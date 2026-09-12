import { ValidationError } from '../utils/errors';

export class AuthValidator {
  public static validateLogin(data: any) {
    if (!data.email || !data.password) {
      throw new ValidationError('Email and password are required');
    }
  }

  public static validateRegister(data: any) {
    if (!data.name || !data.email || !data.password) {
      throw new ValidationError('Name, email, and password are required');
    }
  }
}
