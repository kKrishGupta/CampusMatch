import { UserModel } from '../models/user.model';
import { UserEntity } from '../types';

export class UserRepository {
  public async findByEmail(email: string): Promise<UserEntity | null> {
    const doc = await UserModel.findOne({ email }).exec();
    return doc ? (doc.toJSON() as unknown as UserEntity) : null;
  }

  public async findById(id: string): Promise<UserEntity | null> {
    const doc = await UserModel.findById(id).exec();
    return doc ? (doc.toJSON() as unknown as UserEntity) : null;
  }

  public async create(userData: Partial<UserEntity>): Promise<UserEntity> {
    const doc = await UserModel.create({
      name: userData.name,
      email: userData.email,
      passwordHash: userData.passwordHash,
      savedCollegeIds: userData.savedCollegeIds || [],
    });
    return doc.toJSON() as unknown as UserEntity;
  }
}

