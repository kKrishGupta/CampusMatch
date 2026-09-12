import { CollegeModel, ICollegeDocument } from '../models/college.model';
import { CollegeEntity } from '../types';

export class CollegeRepository {
  public async findMany(filter: Record<string, any> = {}): Promise<CollegeEntity[]> {
    const docs = await CollegeModel.find(filter).exec();
    return docs.map((doc: ICollegeDocument) => doc.toJSON() as unknown as CollegeEntity);
  }

  public async findById(id: string): Promise<CollegeEntity | null> {
    const doc = await CollegeModel.findById(id).exec();
    return doc ? (doc.toJSON() as unknown as CollegeEntity) : null;
  }

  public async findBySlug(slug: string): Promise<CollegeEntity | null> {
    const doc = await CollegeModel.findOne({ slug }).exec();
    return doc ? (doc.toJSON() as unknown as CollegeEntity) : null;
  }

  public async create(data: Partial<CollegeEntity>): Promise<CollegeEntity> {
    const doc = await CollegeModel.create(data);
    return doc.toJSON() as unknown as CollegeEntity;
  }
}

