'use client';

import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { College } from '@/types/college';
import { CompareService } from '@/services/compare.service';
import { CollegeService } from '@/services/college.service';
import { useToast } from '@/components/ui/Toast';
import { useAuth } from '@/hooks/useAuth';

interface CompareContextType {
  selectedIds: string[];
  selectedColleges: College[];
  isLoading: boolean;
  toggleCompare: (college: College) => void;
  removeFromCompare: (collegeId: string) => void;
  clearCompare: () => void;
  isCompared: (collegeId: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedColleges, setSelectedColleges] = useState<College[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { showToast } = useToast();

  const loadColleges = useCallback(async (ids: string[]) => {
    if (ids.length === 0) {
      setSelectedColleges([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const colleges = await CollegeService.getCollegesByIds(ids);
      setSelectedColleges(colleges);
    } catch {
      setSelectedColleges([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const ids = CompareService.getSelectedIds();
    setSelectedIds(ids);
    loadColleges(ids);
  }, [loadColleges, user, isAuthenticated]);

  const toggleCompare = useCallback(
    (college: College) => {
      const result = CompareService.toggleCompare(college.id);
      if (!result.success) {
        showToast(result.message, 'warning', 'Compare Limit Reached');
        return;
      }

      setSelectedIds(result.selectedIds);
      if (result.isAdded) {
        setSelectedColleges((prev) => [...prev, college]);
        showToast(`Added ${college.name} to comparison`, 'success');
      } else {
        setSelectedColleges((prev) => prev.filter((c) => c.id !== college.id));
        showToast(`Removed ${college.name} from comparison`, 'info');
      }
    },
    [showToast]
  );

  const removeFromCompare = useCallback(
    (collegeId: string) => {
      const ids = CompareService.removeFromComparison(collegeId);
      setSelectedIds(ids);
      setSelectedColleges((prev) => prev.filter((c) => c.id !== collegeId));
      showToast('Removed college from comparison', 'info');
    },
    [showToast]
  );

  const clearCompare = useCallback(() => {
    CompareService.clearComparison();
    setSelectedIds([]);
    setSelectedColleges([]);
    showToast('Cleared all comparison colleges', 'info');
  }, [showToast]);

  const isCompared = useCallback(
    (collegeId: string) => selectedIds.includes(collegeId),
    [selectedIds]
  );

  return (
    <CompareContext.Provider
      value={{
        selectedIds,
        selectedColleges,
        isLoading,
        toggleCompare,
        removeFromCompare,
        clearCompare,
        isCompared,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
