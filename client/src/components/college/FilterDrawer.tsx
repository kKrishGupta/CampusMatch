'use client';

import React from 'react';
import { X, Filter } from 'lucide-react';
import { CollegeFilterParams } from '@/types/college';
import { CollegeFilters } from './CollegeFilters';

export interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  params: CollegeFilterParams;
  onChange: (newParams: Partial<CollegeFilterParams>) => void;
  onClear: () => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  params,
  onChange,
  onClear,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-indigo-600" />
            <h3 className="font-bold text-slate-900 text-base">Filters</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <CollegeFilters params={params} onChange={onChange} onClear={onClear} />
        </div>

        <div className="p-4 border-t border-slate-200 bg-white">
          <button
            onClick={onClose}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm text-sm"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
