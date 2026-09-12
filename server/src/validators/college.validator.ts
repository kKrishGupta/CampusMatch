import { ValidationError } from '../utils/errors';

export class CollegeValidator {
  public static validateQuery(query: any) {
    if (query.minFees && isNaN(Number(query.minFees))) {
      throw new ValidationError('minFees must be a valid number');
    }
  }
}
