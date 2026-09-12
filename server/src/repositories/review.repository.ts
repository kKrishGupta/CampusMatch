import { ReviewModel, IReviewDocument } from '../models/review.model';
import { ReviewEntity } from '../types';

export class ReviewRepository {
  public async findByCollegeId(collegeId: string): Promise<ReviewEntity[]> {
    const docs = await ReviewModel.find({ collegeId }).sort({ createdAt: -1 }).exec();
    return docs.map((doc: IReviewDocument) => doc.toJSON() as unknown as ReviewEntity);
  }

  public async create(data: Partial<ReviewEntity>): Promise<ReviewEntity> {
    const doc = await ReviewModel.create({
      collegeId: data.collegeId,
      userName: data.userName,
      rating: data.rating,
      title: data.title,
      comment: data.comment,
    });
    return doc.toJSON() as unknown as ReviewEntity;
  }
}

