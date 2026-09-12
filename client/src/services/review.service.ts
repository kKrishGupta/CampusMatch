import { Review, ReviewFormData, ReviewRatingStats } from '@/types/review';
import { INITIAL_REVIEWS } from '@/data/reviews';
import { MOCK_COLLEGES } from '@/data/colleges';

const REVIEWS_STORAGE_KEY = 'campusmatch_user_reviews';

function generateDefaultReviews(collegeId: string): Review[] {
  const college = MOCK_COLLEGES.find((c) => c.id === collegeId || c.slug === collegeId);
  const collegeName = college ? college.name : 'this institution';
  const collegeCity = college ? college.city : 'campus';

  return [
    {
      id: `rev-gen-1-${collegeId}`,
      collegeId,
      userName: 'Aarav Patel',
      userCourse: 'B.Tech Computer Science & Engineering',
      passoutYear: 2025,
      rating: 5,
      title: `Exceptional academic environment and top-tier placement opportunities at ${collegeName}`,
      comment: `Studying at ${collegeName} in ${collegeCity} has been an incredible experience. The faculty is highly experienced and approachable. The placement cell brings in top global tech firms and Fortune 500 companies every season. Campus facilities and coding culture are world-class.`,
      pros: ['World-class faculty & labs', 'Outstanding placement statistics', 'Vibrant campus culture & hackathons'],
      cons: ['Rigorous semester exam schedule', 'High academic competition'],
      createdAt: '2025-11-15',
      isVerifiedStudent: true,
      likesCount: 24,
    },
    {
      id: `rev-gen-2-${collegeId}`,
      collegeId,
      userName: 'Sneha Reddy',
      userCourse: 'B.Tech Artificial Intelligence & Data Science',
      passoutYear: 2024,
      rating: 5,
      title: `Unmatched coding culture and modern campus infrastructure`,
      comment: `The laboratory facilities, high-speed campus Wi-Fi, and 24/7 library access make research and project development very smooth. Technical clubs and cultural festivals bring out the best in every student.`,
      pros: ['24/7 Library & Lab access', 'Great peer group & mentors', 'Strong alumni network across US & India'],
      cons: ['Hostel room allotment can take time during Round 1'],
      createdAt: '2025-10-08',
      isVerifiedStudent: true,
      likesCount: 19,
    },
    {
      id: `rev-gen-3-${collegeId}`,
      collegeId,
      userName: 'Vikramaditya Singh',
      userCourse: 'B.Tech Electronics & Communication',
      passoutYear: 2025,
      rating: 4,
      title: `Solid industry exposure with excellent lab equipment`,
      comment: `${collegeName} offers fantastic practical exposure. The curriculum is constantly updated to match current industry standards. Campus connectivity to ${collegeCity} transit hubs is super convenient.`,
      pros: ['Industry-updated curriculum', 'Great transit & airport connectivity', 'Generous merit scholarships'],
      cons: ['Mess food menu could use more variety'],
      createdAt: '2025-08-20',
      isVerifiedStudent: true,
      likesCount: 15,
    },
    {
      id: `rev-gen-4-${collegeId}`,
      collegeId,
      userName: 'Ananya Sharma',
      userCourse: 'MBA / Dual Degree Program',
      passoutYear: 2024,
      rating: 4,
      title: `Great ROI and supportive startup incubation center`,
      comment: `Overall, ${collegeName} delivers great value for money and return on investment. The entrepreneurship cell and startup incubation center provide guidance, grants, and mentorship for student founders.`,
      pros: ['Startup incubation & funding support', 'Excellent ROI & average package', 'Global alumni connection'],
      cons: ['High academic workload during semester finals'],
      createdAt: '2025-06-12',
      isVerifiedStudent: true,
      likesCount: 11,
    },
  ];
}

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
    const existing = all.filter(
      (r) => r.collegeId === collegeId || r.collegeId.includes(collegeId) || collegeId.includes(r.collegeId)
    );
    const defaultReviews = generateDefaultReviews(collegeId);

    if (existing.length === 0) {
      return defaultReviews;
    }

    const existingIds = new Set(existing.map((r) => r.id));
    const combined = [...existing];
    defaultReviews.forEach((dr) => {
      if (!existingIds.has(dr.id)) {
        combined.push(dr);
      }
    });

    return combined;
  }

  public static async getRatingStats(collegeId: string): Promise<ReviewRatingStats> {
    const reviews = await this.getReviewsByCollegeId(collegeId);
    const college = MOCK_COLLEGES.find((c) => c.id === collegeId || c.slug === collegeId);

    const starCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let sum = 0;

    reviews.forEach((r) => {
      sum += r.rating;
      const rounded = Math.min(5, Math.max(1, Math.round(r.rating))) as 1 | 2 | 3 | 4 | 5;
      starCounts[rounded] += 1;
    });

    return {
      averageRating: college ? college.rating : parseFloat((sum / reviews.length).toFixed(1)),
      totalReviews: college ? college.reviewsCount : reviews.length,
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

