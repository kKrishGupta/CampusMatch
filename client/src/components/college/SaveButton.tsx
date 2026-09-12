'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { College } from '@/types/college';
import { useSavedColleges } from '@/hooks/useSavedColleges';

export interface SaveButtonProps {
  college: College;
  variant?: 'icon' | 'full';
  size?: 'sm' | 'md';
  className?: string;
}

export const SaveButton: React.FC<SaveButtonProps> = ({
  college,
  variant = 'icon',
  size = 'md',
  className = '',
}) => {
  const { isSaved, toggleSave } = useSavedColleges();
  const saved = isSaved(college.id);

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleSave(college);
        }}
        className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium text-sm px-4 py-2 transition-all border ${
          saved
            ? 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100'
            : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
        } ${className}`}
        aria-label={saved ? 'Remove from saved' : 'Save college'}
      >
        <Heart className={`w-4 h-4 ${saved ? 'fill-rose-500 text-rose-500' : 'text-slate-500'}`} />
        {saved ? 'Saved' : 'Save'}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSave(college);
      }}
      className={`p-2 rounded-lg border transition-all ${
        saved
          ? 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100'
          : 'bg-white border-slate-200 text-slate-400 hover:text-rose-500 hover:bg-slate-50'
      } ${className}`}
      aria-label={saved ? 'Remove from saved' : 'Save college'}
      title={saved ? 'Remove from saved' : 'Save college'}
    >
      <Heart className={`w-4 h-4 ${saved ? 'fill-rose-500 text-rose-500' : ''}`} />
    </button>
  );
};
