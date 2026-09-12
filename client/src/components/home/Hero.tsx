'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Compass, GitCompare, Sparkles, MapPin, Award, TrendingUp, CheckCircle2, Heart } from 'lucide-react';
import { SearchHero } from './SearchHero';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0A0E1A] text-white py-12 lg:py-20 border-b border-indigo-950">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Search */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>India’s Most Intelligent College Finder Engine</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.12] text-white">
                Find the college that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">fits you.</span>
              </h1>
              <p className="text-base sm:text-xl font-medium text-slate-300 max-w-xl leading-relaxed">
                Discover, compare, and choose colleges with confidence using authentic cutoff data, transparent fee breakdowns, and verified placement stats.
              </p>
            </div>

            {/* Search Hero Box */}
            <div className="w-full pt-1">
              <SearchHero />
            </div>

            {/* 3 Quick Highlight Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <Link
                href="/colleges"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-white block group-hover:text-blue-300 transition-colors">
                    Discover
                  </span>
                  <span className="text-[10px] text-slate-400 block">Explore 100+ colleges</span>
                </div>
              </Link>

              <Link
                href="/compare"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <GitCompare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-white block group-hover:text-purple-300 transition-colors">
                    Compare
                  </span>
                  <span className="text-[10px] text-slate-400 block">Analyze side by side</span>
                </div>
              </Link>

              <Link
                href="/saved"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-white block group-hover:text-emerald-300 transition-colors">
                    Choose
                  </span>
                  <span className="text-[10px] text-slate-400 block">Make right decision</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Floating 3D Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Glowing Backdrop Frame */}
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-30 blur-xl animate-pulse" />

              {/* Showcase Card */}
              <div className="relative bg-white rounded-3xl p-5 text-slate-900 shadow-2xl border border-white/40 space-y-4">
                {/* Campus Image Header */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                    alt="IIT Delhi Campus"
                    fill
                    sizes="400px"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500 text-white shadow-md">
                    Top Rated #1
                  </div>
                </div>

                {/* College Info */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 font-extrabold text-sm mb-0.5">
                      ★ 4.8 <span className="text-xs text-slate-400 font-normal">(2.4k reviews)</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 leading-snug">
                      IIT Delhi — Indian Institute of Technology
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 font-medium mt-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" /> New Delhi, Delhi
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 border border-indigo-100">
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="p-3 rounded-2xl bg-blue-50/80 border border-blue-100">
                    <span className="text-[10px] font-bold text-blue-700 uppercase block mb-0.5">Tuition Fee</span>
                    <span className="font-extrabold text-slate-900 text-sm">₹2.5L / year</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-purple-50/80 border border-purple-100">
                    <span className="text-[10px] font-bold text-purple-700 uppercase block mb-0.5">Avg Placement</span>
                    <span className="font-extrabold text-slate-900 text-sm">₹18 LPA avg</span>
                  </div>
                </div>

                <Link
                  href="/colleges/indian-institute-of-technology-delhi-iitd"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20"
                >
                  Explore IIT Delhi Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
