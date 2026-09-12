import { UserModel } from '../models/user.model';

export class SavedRepository {
  public async getSavedIds(userId: string): Promise<string[]> {
    const user = await UserModel.findById(userId).exec();
    return user ? user.savedCollegeIds || [] : [];
  }

  public async toggleSave(userId: string, collegeId: string): Promise<string[]> {
    const user = await UserModel.findById(userId).exec();
    if (!user) return [];

    const index = user.savedCollegeIds.indexOf(collegeId);
    if (index > -1) {
      user.savedCollegeIds.splice(index, 1);
    } else {
      user.savedCollegeIds.push(collegeId);
    }

    await user.save();
    return user.savedCollegeIds;
  }
}

