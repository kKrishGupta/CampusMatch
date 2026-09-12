'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Flame } from 'lucide-react';
import { College } from '@/types/college';
import { CollegeService } from '@/services/college.service';
import { CollegeGrid } from '@/components/college/CollegeGrid';

export const PopularColleges: React.FC = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      try {
        const popular = await CollegeService.getPopularColleges(6);
        setColleges(popular);
      } catch {
        setColleges([]);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" /> Featured Institutions
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Popular Colleges & Universities
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Top ranked campuses with outstanding placement records and student ratings
            </p>
          </div>

          <Link
            href="/colleges"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Explore All 50+ Colleges <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <CollegeGrid colleges={colleges} isLoading={isLoading} />
      </div>
    </section>
  );
};
