'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const SearchHero: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      router.push('/colleges');
      return;
    }
    router.push(`/colleges?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="w-full max-w-3xl space-y-3">
      <form
        onSubmit={handleSearch}
        className="w-full bg-white p-2 sm:p-2.5 rounded-2xl shadow-xl shadow-indigo-900/10 border border-indigo-100 hover:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-500/20 focus-within:border-indigo-600 transition-all flex flex-col sm:flex-row items-center gap-2"
      >
        <div className="relative flex-1 w-full flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-indigo-500 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search colleges, cities (e.g. Delhi, Pune) or courses..."
            className="w-full pl-12 pr-10 py-3 bg-transparent text-slate-900 font-medium text-sm sm:text-base placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <Button
          type="submit"
          variant="brand"
          size="lg"
          className="w-full sm:w-auto shrink-0"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Search Colleges
        </Button>
      </form>

      {/* Suggested Quick Tags */}
      <div className="flex items-center justify-center gap-2 flex-wrap text-xs text-slate-500">
        <span className="font-semibold text-slate-400">Popular:</span>
        {['IIT Delhi', 'Mumbai', 'Computer Science', 'BITS Pilani', 'NIRF Top 10'].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => router.push(`/colleges?search=${encodeURIComponent(tag)}`)}
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};
