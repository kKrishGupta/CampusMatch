import React from 'react';
import { Star } from 'lucide-react';

export interface RatingProps {
  value: number;
  max?: number;
  showValue?: boolean;
  reviewsCount?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  showValue = true,
  reviewsCount,
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const stars = Array.from({ length: max }, (_, idx) => {
    const starValue = idx + 1;
    const isFull = value >= starValue;
    const isHalf = value >= starValue - 0.5 && value < starValue;

    return (
      <span key={idx} className="relative inline-block text-amber-400">
        {isFull ? (
          <Star className={`${sizeMap[size]} fill-amber-400 text-amber-400`} />
        ) : isHalf ? (
          <span className="relative">
            <Star className={`${sizeMap[size]} text-slate-300`} />
            <span className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className={`${sizeMap[size]} fill-amber-400 text-amber-400`} />
            </span>
          </span>
        ) : (
          <Star className={`${sizeMap[size]} text-slate-300`} />
        )}
      </span>
    );
  });

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5">{stars}</div>
      {showValue && <span className="font-semibold text-slate-800 text-sm ml-0.5">{value.toFixed(1)}</span>}
      {reviewsCount !== undefined && (
        <span className="text-xs text-slate-500">({reviewsCount})</span>
      )}
    </div>
  );
};
