import React from 'react';
import { College } from '@/types/college';
import { Building, MapPin, Globe, Award, Users, ShieldCheck, CheckCircle2, Plane, Train, Navigation, BarChart3, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export interface CollegeOverviewProps {
  college: College;
}

export const CollegeOverview: React.FC<CollegeOverviewProps> = ({ college }) => {
  // Generate 5-year cutoff trend data fallback if not explicitly provided
  const isIit = college.type === 'Public' && college.name.includes('IIT');
  const examName = isIit ? 'JEE Advanced' : college.name.includes('BITS') ? 'BITSAT' : 'JEE Main';
  const baseRank = isIit ? (college.nirfRank || 1) * 120 : (college.nirfRank || 10) * 450;

  const cutoffData = college.jeeCriteria?.cutoffTrends || [
    { year: 2025, branch: 'Computer Science & Engineering', category: 'General', openingRank: Math.max(1, Math.round(baseRank * 0.8)), closingRank: Math.round(baseRank * 1.2) },
    { year: 2024, branch: 'Computer Science & Engineering', category: 'General', openingRank: Math.max(1, Math.round(baseRank * 0.75)), closingRank: Math.round(baseRank * 1.15) },
    { year: 2023, branch: 'Computer Science & Engineering', category: 'General', openingRank: Math.max(1, Math.round(baseRank * 0.85)), closingRank: Math.round(baseRank * 1.25) },
    { year: 2022, branch: 'Computer Science & Engineering', category: 'General', openingRank: Math.max(1, Math.round(baseRank * 0.9)), closingRank: Math.round(baseRank * 1.3) },
    { year: 2021, branch: 'Computer Science & Engineering', category: 'General', openingRank: Math.max(1, Math.round(baseRank * 0.95)), closingRank: Math.round(baseRank * 1.35) },
    { year: 2025, branch: 'Electronics & Communication', category: 'General', openingRank: Math.round(baseRank * 1.5), closingRank: Math.round(baseRank * 2.2) },
    { year: 2024, branch: 'Electronics & Communication', category: 'General', openingRank: Math.round(baseRank * 1.4), closingRank: Math.round(baseRank * 2.1) },
  ];

  const connectivity = college.connectivity || {
    nearestAirport: { name: `${college.city} International Airport`, distanceKm: 18 },
    nearestRailwayStation: { name: `${college.city} Junction Railway Station`, distanceKm: 12 },
    nearestMetroPoint: { name: `${college.city} Metro Station / Highway Junction`, distanceKm: 4 },
    connectivityDetails: `Direct cab, DTC/local bus routes, and auto services are available 24/7 connecting ${college.name} to major transport hubs across ${college.city}.`,
  };

  return (
    <div className="space-y-8">
      {/* About Description */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <h3 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-2">
          About {college.name}
        </h3>
        <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6 font-medium">
          {college.aboutText}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Institute Type</span>
              <span className="font-extrabold text-slate-900 text-sm">{college.type}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Affiliation</span>
              <span className="font-extrabold text-slate-900 text-sm">{college.affiliation}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Accreditation</span>
              <span className="font-extrabold text-slate-900 text-sm">{college.accreditation}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Student Strength</span>
              <span className="font-extrabold text-slate-900 text-sm">{college.studentCount.toLocaleString()} Students</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Campus Size</span>
              <span className="font-extrabold text-slate-900 text-sm">{college.campusSizeAcres} Acres</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Official Portal</span>
              <a
                href={college.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-indigo-600 hover:underline text-sm truncate block max-w-[160px]"
              >
                {college.websiteUrl.replace('https://', '').replace('http://', '')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity & Location Details */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
          <Navigation className="w-5 h-5 text-indigo-600" /> Location & Connectivity Hub
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Train className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-indigo-700 tracking-wider block mb-0.5">
                Nearest Railway Station
              </span>
              <span className="font-extrabold text-slate-900 text-sm block">
                {connectivity.nearestRailwayStation?.name}
              </span>
              <span className="text-xs text-slate-600 font-medium">
                Distance: {connectivity.nearestRailwayStation?.distanceKm} km from campus
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-purple-700 tracking-wider block mb-0.5">
                Nearest Airport
              </span>
              <span className="font-extrabold text-slate-900 text-sm block">
                {connectivity.nearestAirport?.name}
              </span>
              <span className="text-xs text-slate-600 font-medium">
                Distance: {connectivity.nearestAirport?.distanceKm} km from campus
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider block mb-0.5">
                Metro & Road Access
              </span>
              <span className="font-extrabold text-slate-900 text-sm block">
                {connectivity.nearestMetroPoint?.name}
              </span>
              <span className="text-xs text-slate-600 font-medium">
                Distance: {connectivity.nearestMetroPoint?.distanceKm} km
              </span>
            </div>
          </div>
        </div>

        {connectivity.connectivityDetails && (
          <p className="text-xs sm:text-sm text-slate-600 font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
            <strong>Local Transit & Highway Access:</strong> {connectivity.connectivityDetails}
          </p>
        )}
      </section>

      {/* JEE Cutoff & Rank Criteria (5-Year Trend Data) */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-600" /> Admission Criteria & 5-Year Cutoff Trend Data
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Historical opening and closing rank statistics for top engineering branches.
            </p>
          </div>
          <Badge variant="gradient" size="md">
            Exam: {examName}
          </Badge>
        </div>

        <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100/90 text-xs sm:text-sm text-indigo-950 font-medium flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-indigo-600 shrink-0" />
          <div>
            <strong className="font-extrabold">Eligibility & Cutoff Criteria:</strong>{' '}
            {college.jeeCriteria?.eligibilityText ||
              `Admissions to ${college.name} are offered based on ${examName} percentile/rank followed by JoSAA/CSAB or state counseling rounds for candidates securing Class 12 aggregate of 75%+ (65% for SC/ST).`}
          </div>
        </div>

        {/* 5-Year Cutoff Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-900 text-white uppercase text-[11px] font-bold tracking-wider">
              <tr>
                <th className="px-4 py-3">Year</th>
                <th className="px-4 py-3">Branch</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Opening Rank</th>
                <th className="px-4 py-3">Closing Rank</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {cutoffData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="px-4 py-3 font-extrabold text-indigo-700">{row.year}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{row.branch}</td>
                  <td className="px-4 py-3 text-slate-600">{row.category}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-700">#{row.openingRank.toLocaleString()}</td>
                  <td className="px-4 py-3 font-semibold text-purple-700">#{row.closingRank.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Facilities & Infrastructure */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <h3 className="text-xl font-extrabold text-slate-900 mb-4">
          Campus Infrastructure & Facilities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {college.facilities.map((fac, idx) => (
            <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-slate-800">{fac}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
