'use client';

import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { User, LoginCredentials, RegisterData, AuthStatus } from '@/types/user';
import { AuthService } from '@/services/auth.service';

interface AuthContextType {
  user: User | null;
  status: AuthStatus;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  loginAsDemoUser: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>('loading');

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setStatus('authenticated');
    } else {
      setStatus('unauthenticated');
    }
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setStatus('loading');
    try {
      const res = await AuthService.login(credentials);
      setUser(res.user);
      setStatus('authenticated');
    } catch (err: any) {
      setStatus('unauthenticated');
      throw err;
    }
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    setStatus('loading');
    try {
      const res = await AuthService.register(data);
      setUser(res.user);
      setStatus('authenticated');
    } catch (err: any) {
      setStatus('unauthenticated');
      throw err;
    }
  }, []);

  const logout = useCallback(async () => {
    await AuthService.logout();
    setUser(null);
    setStatus('unauthenticated');
  }, []);

  const loginAsDemoUser = useCallback(() => {
    const demoUser = AuthService.setDemoUser();
    setUser(demoUser);
    setStatus('authenticated');
  }, []);

  const updateProfile = useCallback(async (data: Partial<User>) => {
    const updated = await AuthService.updateProfile(data);
    setUser(updated);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        status,
        isAuthenticated: status === 'authenticated',
        login,
        register,
        logout,
        loginAsDemoUser,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
