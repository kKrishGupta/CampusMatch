import { Review, ReviewFormData, ReviewRatingStats } from '@/types/review';
import { INITIAL_REVIEWS } from '@/data/reviews';

const REVIEWS_STORAGE_KEY = 'campusmatch_user_reviews';

export class ReviewService {
  private static getStoredReviews(): Review[] {
    if (typeof window === 'undefined') return INITIAL_REVIEWS;
    try {
      const data = localStorage.getItem(REVIEWS_STORAGE_KEY);
      if (!data) return INITIAL_REVIEWS;
      const parsed: Review[] = JSON.parse(data);
      return [...INITIAL_REVIEWS, ...parsed];
    } catch {
      return INITIAL_REVIEWS;
    }
  }

  public static async getReviewsByCollegeId(collegeId: string): Promise<Review[]> {
    const all = this.getStoredReviews();
    return all.filter((r) => r.collegeId === collegeId);
  }

  public static async getRatingStats(collegeId: string): Promise<ReviewRatingStats> {
    const reviews = await this.getReviewsByCollegeId(collegeId);
    if (reviews.length === 0) {
      return {
        averageRating: 4.5,
        totalReviews: 0,
        starCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      };
    }

    const starCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let sum = 0;

    reviews.forEach((r) => {
      sum += r.rating;
      const rounded = Math.min(5, Math.max(1, Math.round(r.rating))) as 1 | 2 | 3 | 4 | 5;
      starCounts[rounded] += 1;
    });

    return {
      averageRating: parseFloat((sum / reviews.length).toFixed(1)),
      totalReviews: reviews.length,
      starCounts,
    };
  }

  public static async createReview(collegeId: string, formData: ReviewFormData, userName = 'Verified Student'): Promise<Review> {
    await new Promise((res) => setTimeout(res, 300));

    if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
      throw new Error('Please select a star rating from 1 to 5.');
    }

    if (!formData.comment || formData.comment.trim().length < 10) {
      throw new Error('Review comment must be at least 10 characters long.');
    }

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      collegeId,
      userName,
      userCourse: formData.course || 'B.Tech Student',
      passoutYear: formData.passoutYear || new Date().getFullYear(),
      rating: formData.rating,
      title: formData.title || 'Honest Review',
      comment: formData.comment.trim(),
      pros: formData.pros ? formData.pros.split(',').map((p) => p.trim()).filter(Boolean) : [],
      cons: formData.cons ? formData.cons.split(',').map((c) => c.trim()).filter(Boolean) : [],
      createdAt: new Date().toISOString().split('T')[0],
      isVerifiedStudent: true,
      likesCount: 0,
    };

    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(REVIEWS_STORAGE_KEY);
      const list: Review[] = stored ? JSON.parse(stored) : [];
      list.unshift(newReview);
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(list));
    }

    return newReview;
  }

  public static async updateReview(reviewId: string, formData: ReviewFormData): Promise<Review> {
    await new Promise((res) => setTimeout(res, 300));

    if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
      throw new Error('Please select a star rating from 1 to 5.');
    }

    if (!formData.comment || formData.comment.trim().length < 10) {
      throw new Error('Review comment must be at least 10 characters long.');
    }

    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(REVIEWS_STORAGE_KEY);
      let list: Review[] = stored ? JSON.parse(stored) : [];
      let updatedReview: Review | null = null;

      list = list.map((rev) => {
        if (rev.id === reviewId) {
          updatedReview = {
            ...rev,
            rating: formData.rating,
            title: formData.title || rev.title,
            comment: formData.comment.trim(),
            userCourse: formData.course || rev.userCourse,
            passoutYear: formData.passoutYear || rev.passoutYear,
            pros: formData.pros ? formData.pros.split(',').map((p) => p.trim()).filter(Boolean) : rev.pros,
            cons: formData.cons ? formData.cons.split(',').map((c) => c.trim()).filter(Boolean) : rev.cons,
          };
          return updatedReview;
        }
        return rev;
      });

      if (!updatedReview) {
        const initial = INITIAL_REVIEWS.find((r) => r.id === reviewId);
        updatedReview = {
          id: reviewId,
          collegeId: initial?.collegeId || '',
          userName: initial?.userName || 'Verified Student',
          userCourse: formData.course || initial?.userCourse || 'B.Tech Student',
          passoutYear: formData.passoutYear || initial?.passoutYear || new Date().getFullYear(),
          rating: formData.rating,
          title: formData.title || initial?.title || 'Updated Review',
          comment: formData.comment.trim(),
          pros: formData.pros ? formData.pros.split(',').map((p) => p.trim()).filter(Boolean) : initial?.pros || [],
          cons: formData.cons ? formData.cons.split(',').map((c) => c.trim()).filter(Boolean) : initial?.cons || [],
          createdAt: initial?.createdAt || new Date().toISOString().split('T')[0],
          isVerifiedStudent: true,
          likesCount: initial?.likesCount || 0,
        };
        list.unshift(updatedReview);
      }

      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(list));
      return updatedReview;
    }

    throw new Error('Local storage unavailable');
  }
}

