import { ValidationError } from '../utils/errors';

export class ReviewValidator {
  public static validateCreateReview(body: any) {
    if (!body.rating || body.rating < 1 || body.rating > 5) {
      throw new ValidationError('Rating must be between 1 and 5');
    }
    if (!body.comment || body.comment.trim().length < 10) {
      throw new ValidationError('Comment must be at least 10 characters long');
    }
  }
}
