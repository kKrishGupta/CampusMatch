'use client';

import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, Compass, SlidersHorizontal } from 'lucide-react';
import { CollegeFilterParams, CollegeSortOption } from '@/types/college';
import { useColleges } from '@/hooks/useColleges';
import { PageContainer } from '@/components/layout/PageContainer';
import { CollegeSearch } from '@/components/college/CollegeSearch';
import { CollegeFilters } from '@/components/college/CollegeFilters';
import { FilterDrawer } from '@/components/college/FilterDrawer';
import { SortDropdown } from '@/components/college/SortDropdown';
import { CollegeGrid } from '@/components/college/CollegeGrid';
import { Pagination } from '@/components/ui/Pagination';
import { Button } from '@/components/ui/Button';

function CollegesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Parse initial filter params from URL search parameters
  const getParamsFromUrl = useCallback((): CollegeFilterParams => {
    const search = searchParams.get('search') || searchParams.get('query') || searchParams.get('q') || '';
    const state = searchParams.get('state') || 'All';
    const city = searchParams.get('city') || 'All';
    const minFees = searchParams.get('minFees') ? Number(searchParams.get('minFees')) : undefined;
    const maxFees = searchParams.get('maxFees') ? Number(searchParams.get('maxFees')) : undefined;
    const minRating = searchParams.get('minRating') ? Number(searchParams.get('minRating')) : undefined;
    const courseStream = searchParams.get('courseStream') || 'All';
    const collegeType = searchParams.get('collegeType') || 'All';
    const sort = (searchParams.get('sort') as CollegeSortOption) || 'rating_desc';
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    return {
      search,
      state,
      city,
      minFees,
      maxFees,
      minRating,
      courseStream,
      collegeType,
      sort,
      page,
      limit: 12,
    };
  }, [searchParams]);

  const {
    colleges,
    total,
    page,
    totalPages,
    limit,
    params,
    isLoading,
    updateFilters,
    clearFilters,
  } = useColleges(getParamsFromUrl());

  // Update URL whenever params change
  const syncParamsToUrl = useCallback(
    (newParams: CollegeFilterParams) => {
      const sp = new URLSearchParams();

      if (newParams.search) sp.set('search', newParams.search);
      if (newParams.state && newParams.state !== 'All') sp.set('state', newParams.state);
      if (newParams.city && newParams.city !== 'All') sp.set('city', newParams.city);
      if (newParams.minFees !== undefined) sp.set('minFees', newParams.minFees.toString());
      if (newParams.maxFees !== undefined) sp.set('maxFees', newParams.maxFees.toString());
      if (newParams.minRating !== undefined) sp.set('minRating', newParams.minRating.toString());
      if (newParams.courseStream && newParams.courseStream !== 'All') sp.set('courseStream', newParams.courseStream);
      if (newParams.collegeType && newParams.collegeType !== 'All') sp.set('collegeType', newParams.collegeType);
      if (newParams.sort && newParams.sort !== 'rating_desc') sp.set('sort', newParams.sort);
      if (newParams.page && newParams.page > 1) sp.set('page', newParams.page.toString());

      const queryStr = sp.toString();
      const newUrl = queryStr ? `/colleges?${queryStr}` : '/colleges';
      router.replace(newUrl, { scroll: false });
    },
    [router]
  );

  const handleFilterChange = (updated: Partial<CollegeFilterParams>) => {
    updateFilters(updated);
    const nextParams = { ...params, ...updated, page: updated.page || 1 };
    syncParamsToUrl(nextParams);
  };

  const handleClearAll = () => {
    clearFilters();
    router.replace('/colleges', { scroll: false });
  };

  const handlePageChange = (newPage: number) => {
    handleFilterChange({ page: newPage });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageContainer size="wide">
      {/* Top Banner Header */}
      <div className="mb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
          <Compass className="w-4 h-4" /> Discovery Directory
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Explore Colleges
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          Search and compare top engineering and management institutions across India by fees, placements, rankings, and authentic student reviews.
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Left Filter Sidebar */}
        <div className="hidden lg:block lg:col-span-1 sticky top-20">
          <CollegeFilters
            params={params}
            onChange={handleFilterChange}
            onClear={handleClearAll}
          />
        </div>

        {/* Right Main Content Column */}
        <div className="lg:col-span-3 space-y-6">
          {/* Top Search & Filter controls */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex-1 w-full">
                <CollegeSearch
                  value={params.search || ''}
                  onChange={(val) => handleFilterChange({ search: val })}
                  placeholder="Search by college name, city or course..."
                />
              </div>

              {/* Mobile Filter Drawer trigger button */}
              <Button
                variant="outline"
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden w-full sm:w-auto shrink-0 justify-center"
                leftIcon={<SlidersHorizontal className="w-4 h-4" />}
              >
                Filters
              </Button>
            </div>

            {/* Sub header: Results Count & Sorting */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <span className="text-sm font-semibold text-slate-700">
                {isLoading ? (
                  'Searching colleges...'
                ) : (
                  <>
                    <strong className="text-indigo-600">{total}</strong> colleges found
                  </>
                )}
              </span>

              <SortDropdown
                value={params.sort || 'rating_desc'}
                onChange={(sortVal) => handleFilterChange({ sort: sortVal })}
              />
            </div>
          </div>

          {/* Colleges Grid */}
          <CollegeGrid
            colleges={colleges}
            isLoading={isLoading}
            onClearFilters={handleClearAll}
          />

          {/* Pagination */}
          {!isLoading && colleges.length > 0 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              totalItems={total}
              itemsPerPage={limit}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>

      {/* Mobile Filter Slide Drawer */}
      <FilterDrawer
        isOpen={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        params={params}
        onChange={handleFilterChange}
        onClear={handleClearAll}
      />
    </PageContainer>
  );
}

export default function CollegesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading colleges directory...</div>}>
      <CollegesContent />
    </Suspense>
  );
}
