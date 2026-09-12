'use client';

import { useState, useEffect, useCallback } from 'react';
import { College, CollegeFilterParams, PaginatedResponse } from '@/types/college';
import { CollegeService } from '@/services/college.service';

export function useColleges(initialParams: CollegeFilterParams = {}) {
  const [params, setParams] = useState<CollegeFilterParams>(initialParams);
  const [data, setData] = useState<PaginatedResponse<College>>({
    data: [],
    total: 0,
    page: 1,
    limit: 12,
    totalPages: 1,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchColleges = useCallback(async (currentParams: CollegeFilterParams) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await CollegeService.getColleges(currentParams);
      setData(response);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch colleges.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchColleges(params);
  }, [params, fetchColleges]);

  const updateFilters = useCallback((newParams: Partial<CollegeFilterParams>) => {
    setParams((prev) => ({
      ...prev,
      ...newParams,
      page: newParams.page !== undefined ? newParams.page : 1, // reset page to 1 unless specified
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setParams({
      search: '',
      state: 'All',
      city: 'All',
      minFees: undefined,
      maxFees: undefined,
      minRating: undefined,
      courseStream: 'All',
      collegeType: 'All',
      sort: 'rating_desc',
      page: 1,
      limit: 12,
    });
  }, []);

  return {
    colleges: data.data,
    total: data.total,
    page: data.page,
    totalPages: data.totalPages,
    limit: data.limit,
    params,
    isLoading,
    error,
    updateFilters,
    clearFilters,
    refetch: () => fetchColleges(params),
  };
}
