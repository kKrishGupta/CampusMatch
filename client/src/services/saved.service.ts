import { College } from '@/types/college';
import { AuthService } from './auth.service';
import { CollegeService } from './college.service';

const SAVED_STORAGE_KEY = 'campusmatch_saved_colleges';

export class SavedCollegeService {
  public static getSavedIds(): string[] {
    if (typeof window === 'undefined') return [];
    try {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser?.savedCollegeIds) {
        return currentUser.savedCollegeIds;
      }
      const data = localStorage.getItem(SAVED_STORAGE_KEY);
      return data ? JSON.parse(data) : ['iit-delhi', 'bits-pilani', 'dtu-delhi'];
    } catch {
      return ['iit-delhi', 'bits-pilani'];
    }
  }

  public static async getSavedColleges(): Promise<College[]> {
    const ids = this.getSavedIds();
    if (ids.length === 0) return [];
    return CollegeService.getCollegesByIds(ids);
  }

  public static toggleSave(collegeId: string): { isSaved: boolean; message: string; savedIds: string[] } {
    let ids = this.getSavedIds();
    const isAlreadySaved = ids.includes(collegeId);

    if (isAlreadySaved) {
      ids = ids.filter((id) => id !== collegeId);
      this.updateSavedIds(ids);
      return { isSaved: false, message: 'Removed from saved colleges', savedIds: ids };
    }

    ids.push(collegeId);
    this.updateSavedIds(ids);
    return { isSaved: true, message: 'College saved to your wishlist', savedIds: ids };
  }

  public static isSaved(collegeId: string): boolean {
    return this.getSavedIds().includes(collegeId);
  }

  private static updateSavedIds(ids: string[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(ids));

    // Also update auth user if present
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      currentUser.savedCollegeIds = ids;
      localStorage.setItem('campusmatch_auth_user', JSON.stringify(currentUser));
    }
  }
}
