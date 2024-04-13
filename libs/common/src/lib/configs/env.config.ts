import { ValidateIf } from 'class-validator';
import {
  ValidateENVPort,
  ValidateENVProp,
} from '../decorators/validate-env.decorator';

export class APIEnvConfig {
  @ValidateIf(({ obj }) => !{ ...obj }.DATABASE_URL)
  @ValidateENVPort()
  public API_PORT!: number;
}

export class PrismaEnvConfig {
  @ValidateENVProp()
  public PRISMA_DB!: string;

  @ValidateENVProp()
  public PRISMA_HOST!: string;

  @ValidateENVProp()
  public PRISMA_USER!: string;

  @ValidateENVProp()
  public PRISMA_PASS!: string;

  @ValidateENVProp()
  public DATABASE_URL!: string;
}

export class SlackbotEnvConfig {
  @ValidateENVProp()
  public APP_TOKEN!: string;

  @ValidateENVProp()
  public SLACK_BOT_TOKEN!: string;
}

export type TEnvConfig = APIEnvConfig | PrismaEnvConfig | SlackbotEnvConfig;
