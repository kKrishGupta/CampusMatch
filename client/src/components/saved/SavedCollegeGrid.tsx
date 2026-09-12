'use client';

import React from 'react';
import Link from 'next/link';
import { useSavedColleges } from '@/hooks/useSavedColleges';
import { useAuth } from '@/hooks/useAuth';
import { CollegeGrid } from '@/components/college/CollegeGrid';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';

export const SavedCollegeGrid: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { savedColleges, isLoading } = useSavedColleges();

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl border border-slate-200 shadow-xs max-w-xl mx-auto my-8 space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Sign in to view your saved colleges</h3>
        <p className="text-sm text-slate-600">
          Save your shortlisted universities and access them anytime across devices.
        </p>
        <div className="flex items-center gap-3 pt-2">
          <Link href="/login?redirect=/saved">
            <Button variant="primary">Sign In</Button>
          </Link>
          <Link href="/register">
            <Button variant="outline">Create Account</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!isLoading && savedColleges.length === 0) {
    return (
      <EmptyState
        icon="saved"
        title="No saved colleges yet"
        description="You haven't added any colleges to your wishlist. Click the heart icon on any college card to save it."
        actionLabel="Explore Colleges"
        onAction={() => (window.location.href = '/colleges')}
      />
    );
  }

  return <CollegeGrid colleges={savedColleges} isLoading={isLoading} />;
};
