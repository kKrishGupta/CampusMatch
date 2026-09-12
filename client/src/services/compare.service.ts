import { College } from '@/types/college';
import { MAX_COMPARE_COLLEGES } from '@/lib/constants';
import { CollegeService } from './college.service';

const COMPARE_STORAGE_KEY = 'campusmatch_compare_colleges';

export class CompareService {
  public static getSelectedIds(): string[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(COMPARE_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  public static async getComparisonColleges(): Promise<College[]> {
    const ids = this.getSelectedIds();
    if (ids.length === 0) return [];
    return CollegeService.getCollegesByIds(ids);
  }

  public static toggleCompare(collegeId: string): { success: boolean; isAdded: boolean; message: string; selectedIds: string[] } {
    let ids = this.getSelectedIds();
    const isAlreadySelected = ids.includes(collegeId);

    if (isAlreadySelected) {
      ids = ids.filter((id) => id !== collegeId);
      this.saveSelectedIds(ids);
      return { success: true, isAdded: false, message: 'Removed from comparison', selectedIds: ids };
    }

    if (ids.length >= MAX_COMPARE_COLLEGES) {
      return {
        success: false,
        isAdded: false,
        message: `Maximum ${MAX_COMPARE_COLLEGES} colleges can be compared at once.`,
        selectedIds: ids,
      };
    }

    ids.push(collegeId);
    this.saveSelectedIds(ids);
    return { success: true, isAdded: true, message: 'Added to comparison', selectedIds: ids };
  }

  public static removeFromComparison(collegeId: string): string[] {
    const ids = this.getSelectedIds().filter((id) => id !== collegeId);
    this.saveSelectedIds(ids);
    return ids;
  }

  public static clearComparison(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(COMPARE_STORAGE_KEY);
    }
  }

  private static saveSelectedIds(ids: string[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(ids));
    }
  }
}
