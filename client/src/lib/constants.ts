import { CollegeSortOption } from '@/types/college';

export const APP_NAME = 'CampusMatch';
export const APP_TAGLINE = 'Discover. Compare. Choose.';

export const SORT_OPTIONS: { label: string; value: CollegeSortOption }[] = [
  { label: 'Rating: High to Low', value: 'rating_desc' },
  { label: 'Rating: Low to High', value: 'rating_asc' },
  { label: 'Fees: Low to High', value: 'fees_asc' },
  { label: 'Fees: High to Low', value: 'fees_desc' },
  { label: 'Placements: Highest First', value: 'placement_desc' },
  { label: 'Name: A – Z', value: 'name_asc' },
  { label: 'Name: Z – A', value: 'name_desc' },
];

export const INDIAN_STATES = [
  'Delhi',
  'Maharashtra',
  'Karnataka',
  'Tamil Nadu',
  'Telangana',
  'Uttar Pradesh',
  'West Bengal',
  'Punjab',
  'Gujarat',
  'Rajasthan',
  'Haryana',
  'Kerala',
  'Odisha',
  'Madhya Pradesh',
];

export const POPULAR_CITIES = [
  'New Delhi',
  'Mumbai',
  'Bengaluru',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Noida',
  'Ghaziabad',
  'Gurugram',
  'Kolkata',
  'Jaipur',
  'Chandigarh',
  'Ahmedabad',
  'Kochi',
];

export const COURSE_STREAMS = [
  'Computer Science',
  'Electrical',
  'Mechanical',
  'Civil',
  'Electronics & Comm.',
  'Data Science & AI',
  'Information Technology',
  'Biotechnology',
  'Chemical Engineering',
  'Aerospace Engineering',
];

export const COLLEGE_TYPES = ['Public', 'Private', 'Deemed', 'Autonomous'];

export const RATING_FILTER_OPTIONS = [
  { label: '4.5+ Stars', value: 4.5 },
  { label: '4.0+ Stars', value: 4.0 },
  { label: '3.5+ Stars', value: 3.5 },
  { label: '3.0+ Stars', value: 3.0 },
];

export const FEE_RANGES = [
  { label: 'Under ₹1 Lakh', min: 0, max: 100000 },
  { label: '₹1L – ₹2.5L', min: 100000, max: 250000 },
  { label: '₹2.5L – ₹5L', min: 250000, max: 500000 },
  { label: 'Above ₹5L', min: 500000, max: 2000000 },
];

export const MAX_COMPARE_COLLEGES = 3;
export const MIN_COMPARE_COLLEGES = 2;
