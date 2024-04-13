import * as Joi from 'joi';

import { registerAs } from '@nestjs/config';

export const prismaEnvSchema = {
  PRISMA_DB: Joi.string().required(),
  PRISMA_HOST: Joi.string().hostname().required(),
  PRISMA_USER: Joi.string().required(),
  PRISMA_PASS: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
};

export const prismaOptions = registerAs('prisma', () => ({
  port: process.env['PRISMA_PORT'],
  host: process.env['PRISMA_HOST'],
  user: process.env['PRISMA_USER'],
  pass: process.env['PRISMA_PASS'],
  DB: process.env['PRISMA_DB'],
}));