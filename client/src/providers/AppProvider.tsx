'use client';

import React from 'react';
import { ToastProvider } from '@/components/ui/Toast';
import { AuthProvider } from '@/hooks/useAuth';
import { CompareProvider } from '@/hooks/useCompare';
import { SavedProvider } from '@/hooks/useSavedColleges';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <CompareProvider>
          <SavedProvider>{children}</SavedProvider>
        </CompareProvider>
      </AuthProvider>
    </ToastProvider>
  );
};
