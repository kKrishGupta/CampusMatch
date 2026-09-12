import { Schema, model, Document } from 'mongoose';
import { CollegeEntity } from '../types';

export interface ICollegeDocument extends Omit<CollegeEntity, 'id'>, Document {}

const CollegeSchema = new Schema<ICollegeDocument>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    feesAnnual: { type: Number, required: true, default: 0 },
    rating: { type: Number, default: 0.0 },
    averagePlacementLpa: { type: Number, default: 0.0 },
    highestPlacementLpa: { type: Number, default: 0.0 },
    type: { type: String, required: true, trim: true },
    connectivity: { type: Schema.Types.Mixed },
    jeeCriteria: { type: Schema.Types.Mixed },
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

export const CollegeModel = model<ICollegeDocument>('College', CollegeSchema);
