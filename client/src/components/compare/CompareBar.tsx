'use client';

import React from 'react';
import Link from 'next/link';
import { X, GitCompare, ArrowRight, Trash2 } from 'lucide-react';
import { useCompare } from '@/hooks/useCompare';
import { Button } from '@/components/ui/Button';

export const CompareBar: React.FC = () => {
  const { selectedColleges, removeFromCompare, clearCompare } = useCompare();

  if (selectedColleges.length === 0) return null;

  const canCompare = selectedColleges.length >= 2;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#4338ca] text-white backdrop-blur-xl border-t border-indigo-500/30 shadow-2xl shadow-indigo-950/50 py-3.5 px-4 animate-in slide-in-from-bottom-5 duration-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left Status & Selection Chips */}
        <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto py-1 scrollbar-none">
          <div className="flex items-center gap-2.5 shrink-0 pr-3 border-r border-indigo-400/30">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
              <GitCompare className="w-4 h-4 text-purple-300" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-white block">Compare Colleges</span>
              <span className="text-[11px] text-indigo-200 font-medium">
                {selectedColleges.length} of 3 selected
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            {selectedColleges.map((college) => (
              <span
                key={college.id}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/15 backdrop-blur-md shrink-0 shadow-xs"
              >
                <span className="truncate max-w-[130px]">{college.name}</span>
                <button
                  type="button"
                  onClick={() => removeFromCompare(college.id)}
                  className="text-indigo-200 hover:text-white p-0.5 rounded-full hover:bg-white/20 transition-colors"
                  aria-label={`Remove ${college.name}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={clearCompare}
            className="text-xs text-indigo-200 hover:text-rose-300 p-2 font-semibold transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" /> Clear
          </button>

          {canCompare ? (
            <Link href="/compare">
              <Button
                variant="gradient"
                size="sm"
                className="font-bold shadow-md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Compare Now ({selectedColleges.length})
              </Button>
            </Link>
          ) : (
            <span className="text-xs text-amber-300 font-semibold px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30">
              Select 1 more to compare
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
