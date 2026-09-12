export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  savedCollegeIds: string[];
  targetCourse?: string;
  targetCity?: string;
  createdAt: string;
}

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  targetCourse?: string;
}
