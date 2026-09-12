'use client';

import React from 'react';
import { GitCompare, Check } from 'lucide-react';
import { College } from '@/types/college';
import { useCompare } from '@/hooks/useCompare';
import { Button } from '@/components/ui/Button';

export interface CompareButtonProps {
  college: College;
  variant?: 'outline' | 'ghost' | 'icon';
  size?: 'sm' | 'md';
  className?: string;
}

export const CompareButton: React.FC<CompareButtonProps> = ({
  college,
  variant = 'outline',
  size = 'sm',
  className = '',
}) => {
  const { isCompared, toggleCompare } = useCompare();
  const compared = isCompared(college.id);

  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleCompare(college);
        }}
        className={`p-2 rounded-lg border transition-all ${
          compared
            ? 'bg-indigo-50 border-indigo-200 text-indigo-600'
            : 'bg-white border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
        } ${className}`}
        aria-label={compared ? 'Remove from compare' : 'Compare college'}
        title={compared ? 'Remove from compare' : 'Compare college'}
      >
        <GitCompare className="w-4 h-4" />
      </button>
    );
  }

  return (
    <Button
      type="button"
      variant={compared ? 'secondary' : variant}
      size={size}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleCompare(college);
      }}
      className={`${compared ? 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100' : ''} ${className}`}
      leftIcon={compared ? <Check className="w-3.5 h-3.5 text-indigo-600" /> : <GitCompare className="w-3.5 h-3.5" />}
    >
      {compared ? 'Compared' : 'Compare'}
    </Button>
  );
};
