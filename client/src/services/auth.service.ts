import { User, LoginCredentials, RegisterData } from '@/types/user';

const AUTH_USER_KEY = 'campusmatch_auth_user';

const DEFAULT_USER: User = {
  id: 'usr-101',
  name: 'Krish Gupta',
  email: 'kg20060220@gmail.com',
  avatarUrl: 'https://ui-avatars.com/api/?name=Krish+Gupta&background=1E1B4B&color=818CF8&bold=true&size=200',
  savedCollegeIds: ['indian-institute-of-technology-madras-iitm', 'indian-institute-of-technology-delhi-iitd', 'bits-pilani-main-campus'],
  targetCourse: 'B.Tech Computer Science & Engineering',
  targetCity: 'Delhi / NCR',
  createdAt: '2026-01-01',
};

export class AuthService {
  public static getCurrentUser(): User | null {
    if (typeof window === 'undefined') return DEFAULT_USER;
    try {
      const data = localStorage.getItem(AUTH_USER_KEY);
      if (!data) {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(DEFAULT_USER));
        return DEFAULT_USER;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_USER;
    }
  }

  public static async login(credentials: LoginCredentials): Promise<{ user: User; message: string }> {
    // Simulate network delay
    await new Promise((res) => setTimeout(res, 400));

    if (!credentials.email || !credentials.password) {
      throw new Error('Please fill in all required fields.');
    }

    if (!credentials.email.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }

    if (credentials.password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    const name = credentials.email.split('@')[0];
    const user: User = {
      id: `usr-${Date.now()}`,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email: credentials.email,
      savedCollegeIds: ['iit-delhi', 'dtu-delhi'],
      createdAt: new Date().toISOString().split('T')[0],
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    }

    return { user, message: 'Successfully logged in!' };
  }

  public static async register(data: RegisterData): Promise<{ user: User; message: string }> {
    await new Promise((res) => setTimeout(res, 400));

    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      throw new Error('All fields are required.');
    }

    if (!data.email.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }

    if (data.password.length < 6) {
      throw new Error('Password must be at least 6 characters long.');
    }

    if (data.password !== data.confirmPassword) {
      throw new Error('Passwords do not match.');
    }

    const user: User = {
      id: `usr-${Date.now()}`,
      name: data.name,
      email: data.email,
      savedCollegeIds: [],
      targetCourse: data.targetCourse,
      createdAt: new Date().toISOString().split('T')[0],
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    }

    return { user, message: 'Account created successfully!' };
  }

  public static async logout(): Promise<void> {
    await new Promise((res) => setTimeout(res, 200));
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_USER_KEY);
    }
  }

  public static setDemoUser(): User {
    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(DEFAULT_USER));
    }
    return DEFAULT_USER;
  }

  public static async updateProfile(data: Partial<User>): Promise<User> {
    await new Promise((res) => setTimeout(res, 300));
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      throw new Error('User is not logged in.');
    }

    const updatedUser: User = {
      ...currentUser,
      ...data,
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(updatedUser));
    }

    return updatedUser;
  }
}
