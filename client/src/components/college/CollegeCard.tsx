import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, TrendingUp, Award, ArrowUpRight } from 'lucide-react';
import { College } from '@/types/college';
import { formatCurrency, formatLpa, getCollegeLogoUrl } from '@/lib/utils';
import { Rating } from '@/components/ui/Rating';
import { Badge } from '@/components/ui/Badge';
import { SaveButton } from './SaveButton';
import { CompareButton } from './CompareButton';

export interface CollegeCardProps {
  college: College;
  className?: string;
}

export const CollegeCard: React.FC<CollegeCardProps> = ({ college, className = '' }) => {
  const [logoError, setLogoError] = useState(false);
  const logoSrc = logoError ? getCollegeLogoUrl(college.name) : getCollegeLogoUrl(college.name, college.logoUrl);

  return (
    <div
      className={`group bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-300 shadow-xs hover:shadow-lg hover:shadow-indigo-900/5 transition-all duration-200 flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div className="p-5 flex-1 space-y-3.5">
        {/* Header section: Logo, Name, Location, Badges */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3.5 min-w-0">
            <div className="relative w-12 h-12 rounded-xl bg-indigo-950 border border-slate-200/80 overflow-hidden shrink-0 flex items-center justify-center shadow-xs">
              <Image
                src={logoSrc}
                alt={`${college.name} logo`}
                fill
                sizes="48px"
                className="object-cover"
                onError={() => setLogoError(true)}
                unoptimized
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                <Badge variant={college.type === 'Public' ? 'success' : 'primary'} size="sm">
                  {college.type}
                </Badge>
                {college.nirfRank && (
                  <Badge variant="violet" size="sm">
                    NIRF #{college.nirfRank}
                  </Badge>
                )}
              </div>

              <Link
                href={`/colleges/${college.id}`}
                className="font-extrabold text-slate-900 text-base hover:text-indigo-600 transition-colors line-clamp-1 block group-hover:text-indigo-600"
              >
                {college.name}
              </Link>

              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span className="truncate">{college.location}</span>
              </div>
            </div>
          </div>

          <SaveButton college={college} />
        </div>

        {/* Rating row & Fees */}
        <div className="flex items-center justify-between py-2 px-3 bg-slate-50/80 rounded-xl border border-slate-100">
          <Rating value={college.rating} reviewsCount={college.reviewsCount} size="sm" />
          <div className="text-right">
            <span className="text-[10px] text-slate-400 font-bold block uppercase">Tuition</span>
            <span className="text-xs font-extrabold text-slate-900">{formatCurrency(college.feesAnnual)}</span>
          </div>
        </div>

        {/* Placement Metrics grid */}
        <div className="grid grid-cols-2 gap-2 pt-0.5">
          <div className="p-2.5 rounded-xl bg-indigo-50/60 border border-indigo-100/80">
            <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block mb-0.5">
              Avg Placement
            </span>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="font-extrabold text-slate-900 text-sm">
                {formatLpa(college.averagePlacementLpa)}
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-100/80">
            <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block mb-0.5">
              Highest Placement
            </span>
            <div className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <span className="font-extrabold text-slate-900 text-sm">
                {formatLpa(college.highestPlacementLpa)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-5 py-3 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between gap-2">
        <CompareButton college={college} size="sm" />

        <Link
          href={`/colleges/${college.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline transition-all"
        >
          View Details <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
