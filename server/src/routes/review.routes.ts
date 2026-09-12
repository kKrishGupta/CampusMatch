import { ReviewController } from '../controllers/review.controller';

export function setupReviewRoutes() {
  const controller = new ReviewController();
  return {
    getReviews: (req: any, res: any) => controller.getCollegeReviews(req, res),
    createReview: (req: any, res: any) => controller.createReview(req, res),
  };
}
