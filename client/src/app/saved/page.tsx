'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SavedCollegeGrid } from '@/components/saved/SavedCollegeGrid';
import { useSavedColleges } from '@/hooks/useSavedColleges';

export default function SavedCollegesPage() {
  const { savedIds } = useSavedColleges();

  return (
    <PageContainer size="wide">
      <div className="mb-8 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 mb-1">
          <Heart className="w-4 h-4" /> Personal Wishlist
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Saved Colleges</h1>
        <p className="text-sm text-slate-600 mt-1">
          Your shortlisted colleges ({savedIds.length} saved). Access their details, compare them, or manage your wishlist anytime.
        </p>
      </div>

      <SavedCollegeGrid />
    </PageContainer>
  );
}
