import * as Joi from 'joi';

import { appConfig } from './app.config';
import envValidation from './env.validation.config';
import { prismaEnvSchema, prismaOptions } from './prisma.config';
import { slackbotEnvSchema } from './slackbot.config';

export const apiEnvSchema = {
  API_PORT: Joi.number().port().required(),
};

const envSchema = Joi.object({
  ...apiEnvSchema,
  ...prismaEnvSchema,
  ...slackbotEnvSchema,
});

export const apiConfig = {
  ...appConfig,
  load: [prismaOptions],
  validate: envValidation,
  validationSchema: envSchema,
};
