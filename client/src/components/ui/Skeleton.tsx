import React from 'react';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', variant = 'rectangular' }) => {
  const variantStyles = {
    text: 'h-4 w-full rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  return <div className={`animate-pulse bg-slate-200/80 ${variantStyles[variant]} ${className}`} />;
};

export const CollegeCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
      <div className="flex items-start gap-4">
        <Skeleton variant="circular" className="w-12 h-12 shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" className="w-3/4 h-5" />
          <Skeleton variant="text" className="w-1/2 h-4" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 pt-2">
        <Skeleton variant="rectangular" className="h-12" />
        <Skeleton variant="rectangular" className="h-12" />
      </div>
      <div className="flex items-center justify-between pt-2">
        <Skeleton variant="text" className="w-1/3 h-4" />
        <div className="flex gap-2">
          <Skeleton variant="rectangular" className="w-20 h-8" />
          <Skeleton variant="rectangular" className="w-9 h-8" />
        </div>
      </div>
    </div>
  );
};
