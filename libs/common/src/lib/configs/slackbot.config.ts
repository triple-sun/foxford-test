import * as Joi from 'joi';

export const slackbotEnvSchema = {
  APP_TOKEN: Joi.string().token().required(),
  SLACK_BOT_TOKEN: Joi.string().token().required(),
};
