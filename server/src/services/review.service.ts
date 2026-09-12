import { ReviewRepository } from '../repositories/review.repository';

export class ReviewService {
  private reviewRepository: ReviewRepository;

  constructor() {
    this.reviewRepository = new ReviewRepository();
  }

  public async getCollegeReviews(collegeId: string) {
    return this.reviewRepository.findByCollegeId(collegeId);
  }

  public async addReview(data: any) {
    return this.reviewRepository.create(data);
  }
}
