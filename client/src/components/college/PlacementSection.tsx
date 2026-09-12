'use client';

import React from 'react';
import { PlacementStats } from '@/types/college';
import { TrendingUp, Award, DollarSign, Building2, CheckCircle } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export interface PlacementSectionProps {
  placements: PlacementStats;
  collegeName: string;
}

export const PlacementSection: React.FC<PlacementSectionProps> = ({ placements, collegeName }) => {
  const chartData = placements.historicalData.map((d) => ({
    year: d.year,
    Average: d.averagePackageLpa,
    Highest: d.highestPackageLpa,
    Median: d.medianPackageLpa,
  }));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-8">
      {/* Title */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">
          Placement Report ({placements.placementYear})
        </h3>
        <p className="text-xs text-slate-500">
          Verified placement data and top company recruiting statistics for {collegeName}
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Average Package</span>
            <TrendingUp className="w-4 h-4 text-indigo-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">₹{placements.averageLpa} LPA</p>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Highest Package</span>
            <Award className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">₹{placements.highestLpa} LPA</p>
        </div>

        <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">Median Package</span>
            <DollarSign className="w-4 h-4 text-sky-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">₹{placements.medianLpa} LPA</p>
        </div>

        <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">Placement Rate</span>
            <CheckCircle className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">{placements.placementPercentage}%</p>
        </div>
      </div>

      {/* Historical Package Chart */}
      {chartData.length > 0 && (
        <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40">
          <h4 className="font-bold text-slate-900 text-sm mb-4">Placement Trends (LPA)</h4>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} unit="L" />
                <Tooltip
                  formatter={(value: any) => [`₹${value} LPA`, '']}
                  contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="Average" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Average Package" />
                <Bar dataKey="Highest" fill="#10b981" radius={[4, 4, 0, 0]} name="Highest Package" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Top Recruiters */}
      <div>
        <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-indigo-600" /> Top Recruiting Companies
        </h4>
        <div className="flex flex-wrap gap-2">
          {placements.topRecruiters.map((recruiter, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
            >
              {recruiter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
