'use client';

import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { College } from '@/types/college';
import { SavedCollegeService } from '@/services/saved.service';
import { CollegeService } from '@/services/college.service';
import { useToast } from '@/components/ui/Toast';
import { useAuth } from '@/hooks/useAuth';

interface SavedContextType {
  savedIds: string[];
  savedColleges: College[];
  isLoading: boolean;
  toggleSave: (college: College) => void;
  isSaved: (collegeId: string) => boolean;
}

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [savedColleges, setSavedColleges] = useState<College[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { showToast } = useToast();

  const loadSaved = useCallback(async (ids: string[]) => {
    if (ids.length === 0) {
      setSavedIds([]);
      setSavedColleges([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const colleges = await CollegeService.getCollegesByIds(ids);
      setSavedColleges(colleges);
      // Sync savedIds to only count colleges that actually exist
      const validIds = colleges.map((c) => c.id);
      setSavedIds(validIds);
    } catch {
      setSavedIds([]);
      setSavedColleges([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      setSavedIds([]);
      setSavedColleges([]);
      setIsLoading(false);
      return;
    }
    const ids = SavedCollegeService.getSavedIds();
    loadSaved(ids);
  }, [loadSaved, user, isAuthenticated]);

  const toggleSave = useCallback(
    (college: College) => {
      const result = SavedCollegeService.toggleSave(college.id);
      if (result.isSaved) {
        setSavedColleges((prev) => {
          const exists = prev.some((c) => c.id === college.id);
          const next = exists ? prev : [...prev, college];
          setSavedIds(next.map((c) => c.id));
          return next;
        });
        showToast(`Saved ${college.name}`, 'success');
      } else {
        setSavedColleges((prev) => {
          const next = prev.filter((c) => c.id !== college.id && c.slug !== college.id);
          setSavedIds(next.map((c) => c.id));
          return next;
        });
        showToast(`Removed ${college.name} from saved`, 'info');
      }
    },
    [showToast]
  );

  const isSaved = useCallback(
    (collegeId: string) =>
      savedColleges.some(
        (c) => c.id === collegeId || c.slug === collegeId || c.id.includes(collegeId) || collegeId.includes(c.id)
      ) || savedIds.includes(collegeId),
    [savedColleges, savedIds]
  );

  return (
    <SavedContext.Provider
      value={{
        savedIds,
        savedColleges,
        isLoading,
        toggleSave,
        isSaved,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export const useSavedColleges = () => {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSavedColleges must be used within a SavedProvider');
  }
  return context;
};
