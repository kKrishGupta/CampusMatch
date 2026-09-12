import { SavedRepository } from '../repositories/saved.repository';

export class SavedService {
  private savedRepository: SavedRepository;

  constructor() {
    this.savedRepository = new SavedRepository();
  }

  public async getSavedColleges(userId: string) {
    return this.savedRepository.getSavedIds(userId);
  }

  public async toggleSavedCollege(userId: string, collegeId: string) {
    return this.savedRepository.toggleSave(userId, collegeId);
  }
}
