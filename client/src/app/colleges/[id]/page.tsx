'use client';

import React, { useEffect, useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { College } from '@/types/college';
import { CollegeService } from '@/services/college.service';
import { PageContainer } from '@/components/layout/PageContainer';
import { CollegeHeader } from '@/components/college/CollegeHeader';
import { CollegeOverview } from '@/components/college/CollegeOverview';
import { CourseList } from '@/components/college/CourseList';
import { PlacementSection } from '@/components/college/PlacementSection';
import { ReviewSection } from '@/components/college/ReviewSection';
import { Skeleton } from '@/components/ui/Skeleton';
import { ChevronRight, Home, Building2 } from 'lucide-react';

export default function CollegeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [college, setCollege] = useState<College | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'placements' | 'reviews'>('overview');

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const result = await CollegeService.getCollegeById(resolvedParams.id);
        if (!result) {
          setCollege(null);
        } else {
          setCollege(result);
        }
      } catch {
        setCollege(null);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [resolvedParams.id]);

  if (!isLoading && !college) {
    return notFound();
  }

  if (isLoading || !college) {
    return (
      <PageContainer size="wide" className="space-y-6">
        <Skeleton variant="rectangular" className="h-64 rounded-2xl" />
        <Skeleton variant="rectangular" className="h-12 rounded-xl" />
        <Skeleton variant="rectangular" className="h-96 rounded-2xl" />
      </PageContainer>
    );
  }

  return (
    <PageContainer size="wide">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
        <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
          <Home className="w-3.5 h-3.5" /> Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/colleges" className="hover:text-indigo-600">
          Colleges
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold truncate max-w-[200px]">{college.name}</span>
      </nav>

      {/* College Header */}
      <CollegeHeader college={college} />

      {/* Sticky Section Navigation */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-1.5 shadow-xs mb-8 flex items-center gap-1 overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview & Campus' },
          { id: 'courses', label: `Courses & Fees (${college.courses.length})` },
          { id: 'placements', label: 'Placements Report' },
          { id: 'reviews', label: `Reviews (${college.reviewsCount})` },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Tabbed Content */}
      <div className="space-y-8">
        {activeTab === 'overview' && <CollegeOverview college={college} />}
        {activeTab === 'courses' && <CourseList courses={college.courses} />}
        {activeTab === 'placements' && (
          <PlacementSection placements={college.placements} collegeName={college.name} />
        )}
        {activeTab === 'reviews' && <ReviewSection college={college} />}
      </div>
    </PageContainer>
  );
}
