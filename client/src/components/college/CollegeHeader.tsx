import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Globe, Award, Building, Plane, Train, Navigation, BarChart2 } from 'lucide-react';
import { College } from '@/types/college';
import { Rating } from '@/components/ui/Rating';
import { Badge } from '@/components/ui/Badge';
import { getCollegeBannerUrl, getCollegeLogoUrl } from '@/lib/utils';
import { SaveButton } from './SaveButton';
import { CompareButton } from './CompareButton';

export interface CollegeHeaderProps {
  college: College;
}

export const CollegeHeader: React.FC<CollegeHeaderProps> = ({ college }) => {
  const [bannerError, setBannerError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const bannerSrc = bannerError ? getCollegeBannerUrl(college.id) : getCollegeBannerUrl(college.id, college.bannerUrl);
  const logoSrc = logoError ? getCollegeLogoUrl(college.name) : getCollegeLogoUrl(college.name, college.logoUrl);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mb-8">
      {/* Banner Section with Hero Fallback Gradient */}
      <div className="relative w-full h-44 sm:h-60 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
        <Image
          src={bannerSrc}
          alt={`${college.name} campus banner`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
          onError={() => setBannerError(true)}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

        {/* Badges on Top Right of Hero Banner */}
        <div className="absolute top-4 right-4 flex items-center gap-2 flex-wrap z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
            {college.type} Institute
          </span>
          {college.accreditation && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20 backdrop-blur-md">
              {college.accreditation}
            </span>
          )}
        </div>
      </div>

      {/* Main Content Area Below Banner */}
      <div className="relative px-6 sm:px-8 pb-6">
        {/* Logo & Top Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-12 sm:-mt-16 mb-4">
          {/* Logo Box */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-indigo-950 border-4 border-white shadow-xl overflow-hidden shrink-0 z-10 flex items-center justify-center">
            <Image
              src={logoSrc}
              alt={`${college.name} logo`}
              fill
              sizes="128px"
              className="object-cover"
              onError={() => setLogoError(true)}
              unoptimized
            />
          </div>

          {/* Action buttons (Compare & Save) */}
          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 z-10">
            <CompareButton college={college} variant="outline" size="md" className="flex-1 sm:flex-initial" />
            <SaveButton college={college} variant="full" size="md" className="flex-1 sm:flex-initial" />
          </div>
        </div>

        {/* Title, Badges & Metadata (Placed 100% on White Background) */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="primary">{college.type} Institute</Badge>
            {college.accreditation && <Badge variant="violet">{college.accreditation}</Badge>}
            {college.nirfRank && (
              <Badge variant="warning" icon={<Award className="w-3.5 h-3.5 text-amber-600" />}>
                NIRF #{college.nirfRank}
              </Badge>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {college.name}
          </h1>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600 flex-wrap font-medium pt-0.5">
            <span className="flex items-center gap-1.5 text-slate-700">
              <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
              {college.location}
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <Building className="w-4 h-4 text-indigo-600 shrink-0" />
              Estd. {college.establishedYear}
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <Navigation className="w-4 h-4 text-purple-600 shrink-0" />
              Campus: {college.campusSizeAcres} Acres
            </span>
          </div>
        </div>

        {/* Quick Highlights & Connectivity Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Rating & Reviews</span>
            <Rating value={college.rating} reviewsCount={college.reviewsCount} size="sm" />
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Annual Tuition</span>
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              ₹{(college.feesAnnual / 100000).toFixed(2)} Lakh <span className="text-xs text-slate-500 font-normal">/ yr</span>
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Avg Placement</span>
            <span className="font-extrabold text-indigo-700 text-sm sm:text-base">
              ₹{college.averagePlacementLpa} LPA
            </span>
          </div>

          {college.connectivity?.nearestRailwayStation && (
            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Nearest Station</span>
              <span className="font-semibold text-slate-800 text-xs flex items-center gap-1">
                <Train className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                {college.connectivity.nearestRailwayStation.name} ({college.connectivity.nearestRailwayStation.distanceKm} km)
              </span>
            </div>
          )}

          <div className="space-y-1 col-span-2 sm:col-span-1">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Official Portal</span>
            <a
              href={college.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline text-sm inline-flex items-center gap-1.5 transition-colors"
            >
              Visit Portal <Globe className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
