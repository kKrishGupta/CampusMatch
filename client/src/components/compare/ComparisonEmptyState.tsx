import React from 'react';
import Link from 'next/link';
import { GitCompare, PlusCircle, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface ComparisonEmptyStateProps {
  count: number;
}

export const ComparisonEmptyState: React.FC<ComparisonEmptyStateProps> = ({ count }) => {
  const isOne = count === 1;

  return (
    <div className="flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl border border-dashed border-slate-300 max-w-2xl mx-auto my-8 shadow-xs">
      <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5">
        {isOne ? <PlusCircle className="w-8 h-8" /> : <GitCompare className="w-8 h-8" />}
      </div>

      <h2 className="text-2xl font-black text-slate-900 mb-2">
        {isOne ? 'Add one more college to compare' : 'Compare Colleges Side-by-Side'}
      </h2>

      <p className="text-slate-600 text-sm max-w-md mb-8 leading-relaxed">
        {isOne
          ? 'You have selected 1 college. Choose at least 1 more college from the listing page to unlock side-by-side comparison matrix.'
          : 'Select 2 to 3 colleges to compare fees, placement statistics, courses, and ratings side by side.'}
      </p>

      <Link href="/colleges">
        <Button variant="primary" size="lg" leftIcon={<Compass className="w-4 h-4" />}>
          Explore Colleges
        </Button>
      </Link>
    </div>
  );
};
