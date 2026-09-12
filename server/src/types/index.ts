export interface UserEntity {
  id: string;
  name: string;
  email: string;
  passwordHash?: string;
  savedCollegeIds: string[];
  createdAt: Date;
}

export interface CollegeEntity {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
  feesAnnual: number;
  rating: number;
  averagePlacementLpa: number;
  highestPlacementLpa: number;
  type: string;
  connectivity?: any;
  jeeCriteria?: any;
}

export interface ReviewEntity {
  id: string;
  collegeId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: Date;
}
