import { User, LoginCredentials, RegisterData } from '@/types/user';

const AUTH_USER_KEY = 'campusmatch_auth_user';

const DEFAULT_USER: User = {
  id: 'usr-101',
  name: 'Krish Gupta',
  email: 'kg20060220@gmail.com',
  avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80',
  savedCollegeIds: ['indian-institute-of-technology-madras-iitm', 'indian-institute-of-technology-delhi-iitd', 'bits-pilani-main-campus'],
  targetCourse: 'B.Tech Computer Science & Engineering',
  targetCity: 'Delhi / NCR',
  createdAt: '2026-01-01',
};

const LOGGED_OUT_KEY = 'campusmatch_logged_out';

export class AuthService {
  public static getCurrentUser(): User | null {
    if (typeof window === 'undefined') return DEFAULT_USER;
    try {
      const loggedOut = localStorage.getItem(LOGGED_OUT_KEY);
      if (loggedOut === 'true') {
        return null;
      }
      const data = localStorage.getItem(AUTH_USER_KEY);
      if (!data) {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(DEFAULT_USER));
        return DEFAULT_USER;
      }
      const parsed = JSON.parse(data);
      let modified = false;

      if (parsed.name === 'Kg20060220' || parsed.email?.includes('kg20060220')) {
        parsed.name = 'Krish Gupta';
        modified = true;
      }
      if (!parsed.avatarUrl || parsed.avatarUrl.includes('photo-1534528741775-53994a69daeb')) {
        parsed.avatarUrl = DEFAULT_USER.avatarUrl;
        modified = true;
      }

      if (modified) {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(parsed));
      }

      return parsed;
    } catch {
      return null;
    }
  }

  public static async login(credentials: LoginCredentials): Promise<{ user: User; message: string }> {
    await new Promise((res) => setTimeout(res, 300));

    if (!credentials.email || !credentials.password) {
      throw new Error('Please fill in all required fields.');
    }

    if (!credentials.email.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }

    if (credentials.password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    const emailLower = credentials.email.toLowerCase();
    const isKrish = emailLower.includes('kg20060220') || emailLower.includes('krish');
    const rawName = credentials.email.split('@')[0];
    const formattedName = isKrish ? 'Krish Gupta' : rawName.charAt(0).toUpperCase() + rawName.slice(1);

    const user: User = {
      id: `usr-${Date.now()}`,
      name: formattedName,
      email: credentials.email,
      avatarUrl: DEFAULT_USER.avatarUrl,
      savedCollegeIds: ['indian-institute-of-technology-madras-iitm', 'indian-institute-of-technology-delhi-iitd', 'bits-pilani-main-campus'],
      targetCourse: isKrish ? 'B.Tech Computer Science & Engineering' : 'Computer Science',
      targetCity: 'Delhi / NCR',
      createdAt: new Date().toISOString().split('T')[0],
    };

    if (typeof window !== 'undefined') {
      localStorage.removeItem(LOGGED_OUT_KEY);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    }

    return { user, message: 'Successfully logged in!' };
  }

  public static async register(data: RegisterData): Promise<{ user: User; message: string }> {
    await new Promise((res) => setTimeout(res, 300));

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
      avatarUrl: DEFAULT_USER.avatarUrl,
      savedCollegeIds: ['indian-institute-of-technology-madras-iitm', 'indian-institute-of-technology-delhi-iitd'],
      targetCourse: data.targetCourse || 'Computer Science',
      targetCity: 'Delhi / NCR',
      createdAt: new Date().toISOString().split('T')[0],
    };

    if (typeof window !== 'undefined') {
      localStorage.removeItem(LOGGED_OUT_KEY);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    }

    return { user, message: 'Account created successfully!' };
  }

  public static async logout(): Promise<void> {
    await new Promise((res) => setTimeout(res, 100));
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_USER_KEY);
      localStorage.setItem(LOGGED_OUT_KEY, 'true');
    }
  }

  public static setDemoUser(): User {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(LOGGED_OUT_KEY);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(DEFAULT_USER));
    }
    return DEFAULT_USER;
  }

  public static async updateProfile(data: Partial<User>): Promise<User> {
    await new Promise((res) => setTimeout(res, 200));
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
