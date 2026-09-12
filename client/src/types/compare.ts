import { College } from './college';

export interface CompareState {
  selectedColleges: College[];
}

export type CompareRowKey =
  | 'name'
  | 'rating'
  | 'fees'
  | 'avgPlacement'
  | 'highestPlacement'
  | 'location'
  | 'type'
  | 'establishedYear'
  | 'accreditation'
  | 'nirfRank'
  | 'coursesCount'
  | 'topRecruiters';

export interface ComparisonRow {
  key: CompareRowKey;
  label: string;
  category: 'Overview' | 'Financials' | 'Placements' | 'Academics';
  getValue: (college: College) => string | number | React.ReactNode;
  highlightBest?: 'max' | 'min';
  getNumericValue?: (college: College) => number;
}
