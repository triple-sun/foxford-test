export const PORT_MAX = 65535;
export const PORT_MIN = 0;

export const RESPONSES_PER_PAGE = 30;

export const BOT_PORT_DEFAULT = 3000;

export const emailRegExp =
  /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail)\.com$/;

export const questionBlocks = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'Привет!\n Планируешь ли ты ехать на летний корпоратив?',
    },
  },
  {
    type: 'actions',
    block_id: 'actions1',
    elements: [
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Да',
        },
        value: 'yes',
        action_id: 'yes',
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Нет',
        },
        value: 'no',
        action_id: 'no',
      },
    ],
  },
];

export const acceptedText =
  'Спасибо за ответ!\n Ждем тебя на летнем корпоративе!';

export const declinedText =
  'Спасибо за ответ!\n Очень жаль, что ты не сможешь приехать =(';
