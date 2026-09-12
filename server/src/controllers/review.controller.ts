import { ReviewService } from '../services/review.service';
import { ResponseUtil } from '../utils/response';

export class ReviewController {
  private reviewService: ReviewService;

  constructor() {
    this.reviewService = new ReviewService();
  }

  public async getCollegeReviews(req: any, res: any) {
    const reviews = await this.reviewService.getCollegeReviews(req.params.collegeId);
    return ResponseUtil.success(reviews, 'Reviews retrieved');
  }

  public async createReview(req: any, res: any) {
    const newReview = await this.reviewService.addReview(req.body);
    return ResponseUtil.success(newReview, 'Review created successfully');
  }
}
