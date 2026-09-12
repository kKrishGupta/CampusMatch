import React from 'react';
import { College } from '@/types/college';
import { CollegeCard } from './CollegeCard';
import { CollegeCardSkeleton } from '@/components/ui/Skeleton';
import { EmptyState } from '@/components/ui/EmptyState';

export interface CollegeGridProps {
  colleges: College[];
  isLoading?: boolean;
  onClearFilters?: () => void;
  className?: string;
}

export const CollegeGrid: React.FC<CollegeGridProps> = ({
  colleges,
  isLoading = false,
  onClearFilters,
  className = '',
}) => {
  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {Array.from({ length: 6 }).map((_, idx) => (
          <CollegeCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (colleges.length === 0) {
    return (
      <EmptyState
        icon="search"
        title="No colleges found"
        description="Try changing your search keywords or adjusting your location, fees, and rating filters."
        actionLabel={onClearFilters ? 'Clear all filters' : undefined}
        onAction={onClearFilters}
      />
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {colleges.map((college) => (
        <CollegeCard key={college.id} college={college} />
      ))}
    </div>
  );
};
