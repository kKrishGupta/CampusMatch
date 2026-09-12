'use client';

import React from 'react';
import { College } from '@/types/college';
import { CompareCollegeCard } from './CompareCollegeCard';
import { formatCurrency, formatLpa } from '@/lib/utils';
import { Rating } from '@/components/ui/Rating';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, Trophy } from 'lucide-react';

export interface CompareTableProps {
  colleges: College[];
  onRemove: (collegeId: string) => void;
}

export const CompareTable: React.FC<CompareTableProps> = ({ colleges, onRemove }) => {
  if (colleges.length < 2) return null;

  // Calculate best values for highlighting
  const highestRating = Math.max(...colleges.map((c) => c.rating));
  const lowestFees = Math.min(...colleges.map((c) => c.feesAnnual));
  const highestAvgPlacement = Math.max(...colleges.map((c) => c.averagePlacementLpa));
  const highestMaxPlacement = Math.max(...colleges.map((c) => c.highestPlacementLpa));

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden my-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          {/* Table Header Row: College Cards */}
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/60">
              <th className="p-5 font-bold text-slate-900 text-sm w-56 sticky left-0 bg-slate-50 z-10 border-r border-slate-200">
                Metrics & Criteria
              </th>
              {colleges.map((college) => (
                <th key={college.id} className="p-4 align-top w-72">
                  <CompareCollegeCard college={college} onRemove={onRemove} />
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 text-sm">
            {/* Row: Annual Fees */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800 bg-slate-50/30 sticky left-0 z-10 border-r border-slate-200">
                Annual Tuition Fee
              </td>
              {colleges.map((c) => {
                const isLowest = c.feesAnnual === lowestFees;
                return (
                  <td key={c.id} className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-extrabold ${isLowest ? 'text-emerald-700 text-base' : 'text-slate-900'}`}>
                        {formatCurrency(c.feesAnnual)}
                      </span>
                      {isLowest && (
                        <Badge variant="success" size="sm" icon={<Trophy className="w-3 h-3" />}>
                          Lowest Fee
                        </Badge>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>

            {/* Row: Average Placement */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800 bg-slate-50/30 sticky left-0 z-10 border-r border-slate-200">
                Average Placement
              </td>
              {colleges.map((c) => {
                const isHighest = c.averagePlacementLpa === highestAvgPlacement;
                return (
                  <td key={c.id} className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-extrabold ${isHighest ? 'text-indigo-700 text-base' : 'text-slate-900'}`}>
                        {formatLpa(c.averagePlacementLpa)}
                      </span>
                      {isHighest && (
                        <Badge variant="primary" size="sm" icon={<Trophy className="w-3 h-3" />}>
                          Top Avg
                        </Badge>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>

            {/* Row: Highest Package */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800 bg-slate-50/30 sticky left-0 z-10 border-r border-slate-200">
                Highest Package
              </td>
              {colleges.map((c) => {
                const isHighest = c.highestPlacementLpa === highestMaxPlacement;
                return (
                  <td key={c.id} className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{formatLpa(c.highestPlacementLpa)}</span>
                      {isHighest && (
                        <Badge variant="accent" size="sm" icon={<Trophy className="w-3 h-3" />}>
                          Highest
                        </Badge>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>

            {/* Row: Student Rating */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800 bg-slate-50/30 sticky left-0 z-10 border-r border-slate-200">
                Student Rating
              </td>
              {colleges.map((c) => {
                const isHighest = c.rating === highestRating;
                return (
                  <td key={c.id} className="p-4">
                    <div className="flex items-center gap-2">
                      <Rating value={c.rating} reviewsCount={c.reviewsCount} size="sm" />
                      {isHighest && <Badge variant="warning" size="sm">Top Rated</Badge>}
                    </div>
                  </td>
                );
              })}
            </tr>

            {/* Row: Location */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800 bg-slate-50/30 sticky left-0 z-10 border-r border-slate-200">
                Location & State
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4 text-slate-700 font-medium">
                  {c.location}
                </td>
              ))}
            </tr>

            {/* Row: Institute Type */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800 bg-slate-50/30 sticky left-0 z-10 border-r border-slate-200">
                Institute Type
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  <Badge variant={c.type === 'Public' ? 'success' : 'neutral'}>{c.type}</Badge>
                </td>
              ))}
            </tr>

            {/* Row: NIRF / Accreditation */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800 bg-slate-50/30 sticky left-0 z-10 border-r border-slate-200">
                NIRF & Accreditation
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4 text-slate-700 text-xs font-semibold">
                  {c.accreditation}
                </td>
              ))}
            </tr>

            {/* Row: Offered Courses Count */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800 bg-slate-50/30 sticky left-0 z-10 border-r border-slate-200">
                Offered Programs
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4 text-slate-700">
                  <div className="space-y-1">
                    <span className="font-semibold block text-slate-900">{c.courses.length} Degree Programs</span>
                    <ul className="text-xs text-slate-500 space-y-0.5 max-h-24 overflow-y-auto">
                      {c.courses.slice(0, 4).map((cr, idx) => (
                        <li key={idx}>• {cr.name}</li>
                      ))}
                    </ul>
                  </div>
                </td>
              ))}
            </tr>

            {/* Row: Top Recruiters */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800 bg-slate-50/30 sticky left-0 z-10 border-r border-slate-200">
                Top Recruiters
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {c.placements.topRecruiters.map((r, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 rounded text-[11px] font-medium text-slate-700">
                        {r}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Row: Highlights Badges (Matching Reference UI) */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800 bg-slate-50/30 sticky left-0 z-10 border-r border-slate-200">
                Highlights
              </td>
              {colleges.map((c) => {
                const isHighestPlacement = c.highestPlacementLpa === highestMaxPlacement;
                const isLowestFee = c.feesAnnual === lowestFees;
                const isHighestAvg = c.averagePlacementLpa === highestAvgPlacement;

                return (
                  <td key={c.id} className="p-4">
                    <div className="flex flex-wrap gap-1.5">
                      {isHighestPlacement && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Highest Placement
                        </span>
                      )}
                      {isLowestFee && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                          Best Value
                        </span>
                      )}
                      {isHighestAvg && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
                          Top Placement
                        </span>
                      )}
                      {!isHighestPlacement && !isLowestFee && !isHighestAvg && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          {c.type} Institute
                        </span>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
