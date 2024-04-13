import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

import { PORT_MAX, PORT_MIN } from '../consts/const';
import { APIEnvConfig, TEnvConfig } from '../configs/env.config';
import { getENVErrorMessage } from '../utils/utils';

export const ValidateENVProp = (validationOptions?: ValidationOptions) => {
  return function (object: TEnvConfig, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value) {
          return !!value;
        },
        defaultMessage(args: ValidationArguments) {
          return getENVErrorMessage(args);
        },
      },
    });
  };
};

export const ValidateENVPort = (validationOptions?: ValidationOptions) => {
  return function (object: APIEnvConfig, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value) {
          return (
            typeof value === 'number' && value <= PORT_MAX && value > PORT_MIN
          );
        },
        defaultMessage(args: ValidationArguments) {
          return getENVErrorMessage(args);
        },
      },
    });
  };
};
