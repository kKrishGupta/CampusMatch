import { ValidationError } from '../utils/errors';

export class CompareValidator {
  public static validateComparison(body: any) {
    if (!body.collegeIds || !Array.isArray(body.collegeIds) || body.collegeIds.length < 2) {
      throw new ValidationError('At least 2 college IDs are required for comparison');
    }
  }
}
