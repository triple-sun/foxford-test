import 'dotenv/config';

import { App, BlockAction } from '@slack/bolt';
import { Answer, PrismaClient } from '@prisma/client';
import { acceptedText, BOT_PORT_DEFAULT, declinedText, getUserIds, logAnswer, questionBlocks } from '@foxford-test/common';

const prisma = new PrismaClient();

const app = new App({
  appToken: process.env.APP_TOKEN,
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
});

const sendQuestion = async (userId: string) => {
  const { channel } = await app.client.conversations.open({
    users: userId,
  });

  if (channel?.id) {
    try {
      app.client.chat.postMessage({
        channel: channel.id,
        blocks: questionBlocks,
        text: 'Привет!\n Планируешь ли ты ехать на летний корпоратив?',
      });
    } catch (err) {
      console.error(err);
    }
  }
};

if (
  !process.env.APP_TOKEN ||
  !process.env.SLACK_BOT_TOKEN ||
  !process.env.DATABASE_URL
) {
  throw new Error('Ошибка загрузки переменных окружения!');
}

app.action<BlockAction>(
  'yes',
  async ({
    ack,
    say,
    body: {
      channel,
      message,
      user: { id },
    },
  }) => {
    await ack();

    const profile = (await app.client.users.info({ user: id })).user?.profile;

    if (!profile?.first_name || !profile?.email || !message || !channel) {
      throw new Error('Ошибка загрузки данных ответа');
    }
    const response = await prisma.userResponse.create({
      data: {
        name: profile.first_name + (profile.last_name ?? ''),
        email: profile.email,
        answer: Answer.YES,
      },
    });

    app.client.chat.update({
      channel: channel.id,
      ts: message.ts,
      text: acceptedText,
    });

    logAnswer(
      response.name,
      response.email,
      response.answer,
      response.createdAt
    );
  }
);

app.action<BlockAction>(
  'no',
  async ({
    ack,
    say,
    body: {
      channel,
      message,
      user: { id },
    },
  }) => {
    await ack();

    const profile = (await app.client.users.info({ user: id })).user?.profile;

    if (!profile?.first_name || !profile?.email || !message || !channel) {
      throw new Error('Ошибка загрузки данных ответа');
    }
    const response = await prisma.userResponse.create({
      data: {
        name: profile.first_name + (profile.last_name ?? ''),
        email: profile.email,
        answer: Answer.NO,
      },
    });

    app.client.chat.update({
      channel: channel.id,
      ts: message.ts,
      text: declinedText,
    });

    logAnswer(
      response.name,
      response.email,
      response.answer,
      response.createdAt
    );
  }
);

(async () => {
    const port = process.env.PORT || BOT_PORT_DEFAULT;

  const userList = await app.client.users.list();

  if (!userList) {
    throw new Error('Ошибка загрузки списка пользователей!');
  }

  const users: string[] = getUserIds(userList);

  await app.start(port);
  console.info(`⚡️ Slack Bolt запущен на порту ${port}!`);

  await prisma.$connect();

  if (users.length > 0) {
    users.forEach(sendQuestion);
  }
})();
