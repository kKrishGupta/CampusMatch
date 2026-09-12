export interface Review {
  id: string;
  collegeId: string;
  userName: string;
  userAvatar?: string;
  userCourse?: string;
  passoutYear?: number;
  rating: number;
  title: string;
  comment: string;
  pros?: string[];
  cons?: string[];
  createdAt: string;
  isVerifiedStudent?: boolean;
  likesCount?: number;
}

export interface ReviewRatingStats {
  averageRating: number;
  totalReviews: number;
  starCounts: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface ReviewFormData {
  rating: number;
  title: string;
  comment: string;
  pros?: string;
  cons?: string;
  course?: string;
  passoutYear?: number;
}
