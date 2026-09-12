'use client';

import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { College } from '@/types/college';
import { SavedCollegeService } from '@/services/saved.service';
import { CollegeService } from '@/services/college.service';
import { useToast } from '@/components/ui/Toast';

interface SavedContextType {
  savedIds: string[];
  savedColleges: College[];
  isLoading: boolean;
  toggleSave: (college: College) => void;
  isSaved: (collegeId: string) => boolean;
}

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [savedColleges, setSavedColleges] = useState<College[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { showToast } = useToast();

  const loadSaved = useCallback(async (ids: string[]) => {
    if (ids.length === 0) {
      setSavedColleges([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const colleges = await CollegeService.getCollegesByIds(ids);
      setSavedColleges(colleges);
    } catch {
      setSavedColleges([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const ids = SavedCollegeService.getSavedIds();
    setSavedIds(ids);
    loadSaved(ids);
  }, [loadSaved]);

  const toggleSave = useCallback(
    (college: College) => {
      const result = SavedCollegeService.toggleSave(college.id);
      setSavedIds(result.savedIds);

      if (result.isSaved) {
        setSavedColleges((prev) => [...prev, college]);
        showToast(`Saved ${college.name}`, 'success');
      } else {
        setSavedColleges((prev) => prev.filter((c) => c.id !== college.id));
        showToast(`Removed ${college.name} from saved`, 'info');
      }
    },
    [showToast]
  );

  const isSaved = useCallback((collegeId: string) => savedIds.includes(collegeId), [savedIds]);

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
