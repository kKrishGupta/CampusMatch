export interface Course {
  id: string;
  name: string;
  code: string;
  degree: string;
  durationYears: number;
  annualFees: number;
  seats?: number;
  eligibility?: string;
  stream: 'Engineering' | 'Management' | 'Science' | 'Arts' | 'Medical' | 'Design';
}

export interface PlacementYearData {
  year: number;
  averagePackageLpa: number;
  highestPackageLpa: number;
  medianPackageLpa: number;
  placementPercentage: number;
  totalOffers?: number;
  topRecruiters: string[];
}

export interface PlacementStats {
  averageLpa: number;
  highestLpa: number;
  medianLpa: number;
  placementPercentage: number;
  placementYear: number;
  historicalData: PlacementYearData[];
  topRecruiters: string[];
  sectorBreakdown?: { sector: string; percentage: number }[];
}

export interface ConnectivityInfo {
  nearestAirport?: { name: string; distanceKm: number };
  nearestRailwayStation?: { name: string; distanceKm: number };
  nearestMetroPoint?: { name: string; distanceKm: number };
  connectivityDetails?: string;
}

export interface CutoffYearData {
  year: number;
  branch: string;
  category: string;
  openingRank: number;
  closingRank: number;
}

export interface JeeCriteria {
  examName: string;
  eligibilityText: string;
  cutoffTrends: CutoffYearData[];
}

export interface College {
  id: string;
  name: string;
  slug: string;
  location: string;
  city: string;
  state: string;
  description: string;
  aboutText: string;
  logoUrl: string;
  bannerUrl: string;
  websiteUrl: string;
  feesAnnual: number; // in INR e.g. 250000
  rating: number; // e.g. 4.7
  reviewsCount: number;
  averagePlacementLpa: number; // e.g. 18.5
  highestPlacementLpa: number; // e.g. 52.0
  type: 'Public' | 'Private' | 'Deemed' | 'Autonomous';
  affiliation: string;
  establishedYear: number;
  campusSizeAcres: number;
  studentCount: number;
  accreditation: string; // e.g. "NAAC A++" or "NIRF Top 10"
  nirfRank?: number;
  courses: Course[];
  placements: PlacementStats;
  facilities: string[];
  connectivity?: ConnectivityInfo;
  jeeCriteria?: JeeCriteria;
  featured?: boolean;
}

export interface CollegeFilterParams {
  search?: string;
  state?: string;
  city?: string;
  minFees?: number;
  maxFees?: number;
  minRating?: number;
  courseStream?: string;
  collegeType?: string;
  page?: number;
  limit?: number;
  sort?: CollegeSortOption;
}

export type CollegeSortOption =
  | 'rating_desc'
  | 'rating_asc'
  | 'fees_asc'
  | 'fees_desc'
  | 'name_asc'
  | 'name_desc'
  | 'placement_desc';

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
