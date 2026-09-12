'use client';

import React from 'react';
import { X, Filter, RotateCcw } from 'lucide-react';
import { CollegeFilterParams } from '@/types/college';
import { INDIAN_STATES, POPULAR_CITIES, COURSE_STREAMS, COLLEGE_TYPES, RATING_FILTER_OPTIONS } from '@/lib/constants';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

export interface CollegeFiltersProps {
  params: CollegeFilterParams;
  onChange: (newParams: Partial<CollegeFilterParams>) => void;
  onClear: () => void;
  className?: string;
}

export const CollegeFilters: React.FC<CollegeFiltersProps> = ({
  params,
  onChange,
  onClear,
  className = '',
}) => {
  const hasActiveFilters = Boolean(
    params.state ||
      params.city ||
      params.minFees ||
      params.maxFees ||
      params.minRating ||
      (params.courseStream && params.courseStream !== 'All') ||
      (params.collegeType && params.collegeType !== 'All') ||
      params.search
  );

  return (
    <aside className={`bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col gap-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-indigo-600" />
          <h3 className="font-bold text-slate-900 text-base">Filter Colleges</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Clear all
          </button>
        )}
      </div>

      {/* Active Filter Chips */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-1.5 pb-2">
          {params.state && params.state !== 'All' && (
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full border border-indigo-200">
              State: {params.state}
              <X
                className="w-3 h-3 cursor-pointer hover:text-indigo-900"
                onClick={() => onChange({ state: 'All' })}
              />
            </span>
          )}

          {params.city && params.city !== 'All' && (
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full border border-indigo-200">
              City: {params.city}
              <X
                className="w-3 h-3 cursor-pointer hover:text-indigo-900"
                onClick={() => onChange({ city: 'All' })}
              />
            </span>
          )}

          {params.minRating && (
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200">
              ★ {params.minRating}+ Rating
              <X
                className="w-3 h-3 cursor-pointer hover:text-amber-900"
                onClick={() => onChange({ minRating: undefined })}
              />
            </span>
          )}

          {params.maxFees && (
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
              Max Fees: ₹{(params.maxFees / 100000).toFixed(1)}L
              <X
                className="w-3 h-3 cursor-pointer hover:text-emerald-900"
                onClick={() => onChange({ maxFees: undefined, minFees: undefined })}
              />
            </span>
          )}

          {params.courseStream && params.courseStream !== 'All' && (
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200">
              {params.courseStream}
              <X
                className="w-3 h-3 cursor-pointer hover:text-purple-900"
                onClick={() => onChange({ courseStream: 'All' })}
              />
            </span>
          )}

          {params.collegeType && params.collegeType !== 'All' && (
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-300">
              Type: {params.collegeType}
              <X
                className="w-3 h-3 cursor-pointer hover:text-slate-900"
                onClick={() => onChange({ collegeType: 'All' })}
              />
            </span>
          )}
        </div>
      )}

      {/* Filter Options */}

      {/* State Location */}
      <Select
        label="State"
        value={params.state || 'All'}
        onChange={(e) => onChange({ state: e.target.value })}
        options={[
          { label: 'All States', value: 'All' },
          ...INDIAN_STATES.map((st) => ({ label: st, value: st })),
        ]}
      />

      {/* City Location */}
      <Select
        label="City"
        value={params.city || 'All'}
        onChange={(e) => onChange({ city: e.target.value })}
        options={[
          { label: 'All Cities', value: 'All' },
          ...POPULAR_CITIES.map((ct) => ({ label: ct, value: ct })),
        ]}
      />

      {/* Course Stream */}
      <Select
        label="Course / Discipline"
        value={params.courseStream || 'All'}
        onChange={(e) => onChange({ courseStream: e.target.value })}
        options={[
          { label: 'All Streams', value: 'All' },
          ...COURSE_STREAMS.map((cs) => ({ label: cs, value: cs })),
        ]}
      />

      {/* College Type */}
      <Select
        label="Institute Type"
        value={params.collegeType || 'All'}
        onChange={(e) => onChange({ collegeType: e.target.value })}
        options={[
          { label: 'All Types (Public / Private)', value: 'All' },
          ...COLLEGE_TYPES.map((t) => ({ label: t, value: t })),
        ]}
      />

      {/* Minimum Rating */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
          Minimum Rating
        </label>
        <div className="flex flex-wrap gap-2">
          {RATING_FILTER_OPTIONS.map((opt) => {
            const isSelected = params.minRating === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange({ minRating: isSelected ? undefined : opt.value })}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                  isSelected
                    ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                ★ {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Annual Fee Range */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
          Max Annual Fees
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Under ₹1.5L', max: 150000 },
            { label: 'Under ₹2.5L', max: 250000 },
            { label: 'Under ₹4.0L', max: 400000 },
            { label: 'Any Fees', max: undefined },
          ].map((item, idx) => {
            const isSelected = params.maxFees === item.max;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onChange({ maxFees: item.max })}
                className={`text-xs font-medium p-2 rounded-lg border text-center transition-colors ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Reset action button */}
      {hasActiveFilters && (
        <Button variant="secondary" onClick={onClear} className="w-full justify-center mt-2">
          Reset All Filters
        </Button>
      )}
    </aside>
  );
};
