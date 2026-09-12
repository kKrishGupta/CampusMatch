import React from 'react';
import Link from 'next/link';
import { Compass, GitCompare, Sparkles, Building2, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SearchHero } from './SearchHero';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950/5 via-slate-50/50 to-slate-50 pt-16 pb-24 border-b border-slate-200/80">
      {/* Background Brand Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-800 text-xs font-bold shadow-xs animate-in fade-in slide-in-from-top-3 duration-500">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>India’s Most Intelligent College Decision Engine</span>
        </div>

        {/* Headlines */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Find the college that <span className="text-brand-gradient">fits you.</span>
          </h1>
          <p className="text-lg sm:text-2xl font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover, compare, and choose colleges with confidence.
          </p>
        </div>

        {/* Discover -> Compare -> Choose Visual Flow Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-xs sm:text-sm font-bold text-slate-700 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-indigo-100 shadow-sm">
          <span className="flex items-center gap-1.5 text-indigo-700">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" /> 1. Discover
          </span>
          <span className="text-slate-300">→</span>
          <span className="flex items-center gap-1.5 text-purple-700">
            <CheckCircle2 className="w-4 h-4 text-purple-600" /> 2. Compare
          </span>
          <span className="text-slate-300">→</span>
          <span className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 3. Choose
          </span>
        </div>

        {/* Search Hero Input Box */}
        <div className="w-full flex justify-center pt-2">
          <SearchHero />
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="/colleges">
            <Button variant="brand" size="lg" leftIcon={<Compass className="w-5 h-5" />} rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore Colleges
            </Button>
          </Link>
          <Link href="/compare">
            <Button variant="outline" size="lg" leftIcon={<GitCompare className="w-5 h-5 text-purple-600" />}>
              Compare Colleges
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-200/80 max-w-3xl w-full">
          <div className="flex items-center justify-center gap-3 text-slate-700 p-3 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-slate-900 block text-base leading-none">50+</span>
              <span className="text-xs text-slate-500 font-medium">Top Universities</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-slate-700 p-3 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-slate-900 block text-base leading-none">100%</span>
              <span className="text-xs text-slate-500 font-medium">Verified Placement Stats</span>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-3 text-slate-700 p-3 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-slate-900 block text-base leading-none">Transparent</span>
              <span className="text-xs text-slate-500 font-medium">Fee Structures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
