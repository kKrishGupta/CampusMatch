import React from 'react';
import { Search, GitCompare, Award } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      description: 'Search and filter colleges by state, city, annual tuition fee limits, NIRF rankings, and course specializations.',
      icon: <Search className="w-6 h-6 text-indigo-600" />,
    },
    {
      step: '02',
      title: 'Compare',
      description: 'Select 2 to 3 colleges and compare fees, placement packages, course degrees, and campus infrastructure side by side.',
      icon: <GitCompare className="w-6 h-6 text-indigo-600" />,
    },
    {
      step: '03',
      title: 'Decide',
      description: 'Use real structured information, verified student reviews, and transparent placement reports to make confident decisions.',
      icon: <Award className="w-6 h-6 text-indigo-600" />,
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-2">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">How CampusMatch Works</h2>
          <p className="text-slate-600 text-sm mt-2">
            Making the biggest decision of your academic life shouldn’t rely on guesswork or unverified claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-indigo-200">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
