'use client';

import React from 'react';
import { Database, GitCompare, UserCheck, ShieldCheck } from 'lucide-react';

export const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: 'Comprehensive Data',
      description: 'Real insights on fees, placements, reviews and more.',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
    },
    {
      icon: <GitCompare className="w-6 h-6 text-purple-600" />,
      title: 'Smart Comparison',
      description: 'Compare 2-3 colleges side by side.',
      bg: 'bg-purple-50',
      border: 'border-purple-100',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-cyan-600" />,
      title: 'Student First',
      description: 'Built to help you make confident decisions.',
      bg: 'bg-cyan-50',
      border: 'border-cyan-100',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Trusted & Updated',
      description: 'Regularly updated with latest information.',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Why CampusMatch?
          </h2>
          <p className="text-slate-600 text-sm mt-1 font-medium">
            Empowering students across India with objective data and intelligent decision tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 space-y-4"
            >
              <div className={`w-12 h-12 rounded-2xl ${f.bg} ${f.border} border flex items-center justify-center`}>
                {f.icon}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-1">{f.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
