'use client';

import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export interface CollegeSearchProps {
  value: string;
  onChange: (searchQuery: string) => void;
  placeholder?: string;
  className?: string;
}

export const CollegeSearch: React.FC<CollegeSearchProps> = ({
  value,
  onChange,
  placeholder = 'Search by college name, city or course...',
  className = '',
}) => {
  const [searchTerm, setSearchTerm] = useState(value || '');

  useEffect(() => {
    setSearchTerm(value || '');
  }, [value]);

  const handleClear = () => {
    setSearchTerm('');
    onChange('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    onChange(val);
  };

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <Search className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-xs transition-all"
      />
      {searchTerm && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
