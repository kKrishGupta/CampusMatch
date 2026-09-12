'use client';

import React from 'react';
import Link from 'next/link';
import { useCompare } from '@/hooks/useCompare';
import { PageContainer } from '@/components/layout/PageContainer';
import { CompareTable } from '@/components/compare/CompareTable';
import { ComparisonEmptyState } from '@/components/compare/ComparisonEmptyState';
import { GitCompare, Trash2, Plus, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ComparePage() {
  const { selectedColleges, removeFromCompare, clearCompare } = useCompare();

  const count = selectedColleges.length;

  return (
    <PageContainer size="wide">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
            <GitCompare className="w-4 h-4" /> Comparison Matrix
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Compare Colleges Side-by-Side
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Compare fees, placement packages, course degrees, and student ratings for up to 3 colleges.
          </p>
        </div>

        {count >= 2 && (
          <div className="flex items-center gap-2">
            {count < 3 && (
              <Link href="/colleges">
                <Button variant="outline" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
                  Add College ({count}/3)
                </Button>
              </Link>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearCompare}
              className="text-rose-600 hover:bg-rose-50"
              leftIcon={<Trash2 className="w-4 h-4" />}
            >
              Clear All
            </Button>
          </div>
        )}
      </div>

      {/* Main Content */}
      {count < 2 ? (
        <ComparisonEmptyState count={count} />
      ) : (
        <CompareTable colleges={selectedColleges} onRemove={removeFromCompare} />
      )}
    </PageContainer>
  );
}
