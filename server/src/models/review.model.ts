import { Schema, model, Document } from 'mongoose';
import { ReviewEntity } from '../types';

export interface IReviewDocument extends Omit<ReviewEntity, 'id'>, Document {}

const ReviewSchema = new Schema<IReviewDocument>(
  {
    collegeId: { type: String, required: true, index: true },
    userName: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    title: { type: String, trim: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret: Record<string, any>) => {
        ret.id = ret._id ? ret._id.toString() : '';
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

export const ReviewModel = model<IReviewDocument>('Review', ReviewSchema);
