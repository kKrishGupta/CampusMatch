import { Request, Response } from 'express';
import { ReviewService } from '../services/review.service';
import { ResponseUtil } from '../utils/response';

export class ReviewController {
  private reviewService: ReviewService;

  constructor() {
    this.reviewService = new ReviewService();
  }

  public async getCollegeReviews(req: Request, res: Response) {
    try {
      const collegeId = req.params.collegeId as string;
      const reviews = await this.reviewService.getCollegeReviews(collegeId);
      return res.status(200).json(ResponseUtil.success(reviews, 'Reviews retrieved successfully'));
    } catch (err: any) {
      return res.status(500).json(ResponseUtil.error(err.message || 'Failed to fetch reviews'));
    }
  }

  public async createReview(req: Request, res: Response) {
    try {
      const review = await this.reviewService.addReview(req.body);
      return res.status(201).json(ResponseUtil.success(review, 'Review published successfully'));
    } catch (err: any) {
      return res.status(400).json(ResponseUtil.error(err.message || 'Failed to publish review'));
    }
  }
}
