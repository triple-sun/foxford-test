import { Answer, PrismaClient, UserResponse } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { rmSync } from 'fs';

const SEED_RESPONSES_COUNT = 100;

const prisma = new PrismaClient();

const generateSeedData = (count: number) => {
  const result: Pick<UserResponse, 'answer' | 'email' | 'name'>[] = [];

  for (let i = 0; i <= SEED_RESPONSES_COUNT; i++) {
    result.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      answer: faker.helpers.enumValue(Answer),
    });
  }

  return result;
};

async function fillDb() {
  const responses = generateSeedData(SEED_RESPONSES_COUNT);
  
  responses.forEach(async ({ name, email, answer }) => {
    console.info(`Inserting response from ${name}...`);
    await prisma.userResponse.create({
      data: {
        name,
        email,
        answer,
      },
    });
  });

  console.info('🤘️ Database was filled');
}

fillDb()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();

    process.exit(1);
  });
