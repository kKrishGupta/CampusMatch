import React from 'react';
import { ShieldCheck, BarChart3, Star, Layers, Users, Zap } from 'lucide-react';

export const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: 'Verified Placement Data',
      description: 'Access authentic highest, average, and median package stats directly from annual placement reports.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
      title: 'Side-by-Side Matrix',
      description: 'Compare 2 to 3 colleges on key metrics including annual fees, ratings, top recruiters, and NIRF rankings.',
    },
    {
      icon: <Star className="w-5 h-5 text-indigo-600" />,
      title: 'Genuine Student Reviews',
      description: 'Read unvarnished pros and cons written by current students and passout alumni.',
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      title: 'Multi-Parameter Filters',
      description: 'Filter instantly by location, city, state, course stream, tuition budget, and institute type.',
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      title: 'Course & Fee Transparency',
      description: 'Break down course degrees, duration, eligibility requirements, and total seat capacities.',
    },
    {
      icon: <Zap className="w-5 h-5 text-indigo-600" />,
      title: 'Instant URL State & Save',
      description: 'Bookmark saved colleges and share search filter links effortlessly with family and mentors.',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-2">
            Why CampusMatch
          </span>
          <h2 className="text-3xl font-black tracking-tight text-white">
            Built for Students & Parents Who Value Clarity
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            We cut through marketing noise to bring you structured, objective data for India’s top colleges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-indigo-500/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
