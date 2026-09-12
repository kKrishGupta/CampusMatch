import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';
import { College } from '@/types/college';
import { Badge } from '@/components/ui/Badge';
import { Rating } from '@/components/ui/Rating';
import { getCollegeLogoUrl } from '@/lib/utils';

export interface CompareCollegeCardProps {
  college: College;
  onRemove: (collegeId: string) => void;
}

export const CompareCollegeCard: React.FC<CompareCollegeCardProps> = ({ college, onRemove }) => {
  return (
    <div className="relative p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between h-full min-w-[240px]">
      <button
        type="button"
        onClick={() => onRemove(college.id)}
        className="absolute top-3 right-3 p-1.5 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
        aria-label={`Remove ${college.name}`}
        title="Remove college"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="space-y-3">
        <div className="relative w-14 h-14 rounded-xl bg-indigo-950 border border-slate-200 overflow-hidden shadow-xs">
          <Image
            src={getCollegeLogoUrl(college.name, college.logoUrl)}
            alt={`${college.name} logo`}
            fill
            sizes="56px"
            className="object-cover"
            unoptimized
          />
        </div>

        <div>
          <Badge variant={college.type === 'Public' ? 'success' : 'primary'} size="sm" className="mb-1">
            {college.type}
          </Badge>
          <Link
            href={`/colleges/${college.id}`}
            className="font-bold text-slate-900 text-base hover:text-indigo-600 transition-colors line-clamp-2 block leading-snug"
          >
            {college.name}
          </Link>
          <p className="text-xs text-slate-500 mt-1">{college.location}</p>
        </div>

        <Rating value={college.rating} reviewsCount={college.reviewsCount} size="sm" />
      </div>

      <div className="pt-4 mt-2 border-t border-slate-100">
        <Link
          href={`/colleges/${college.id}`}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
        >
          View Full Details <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
