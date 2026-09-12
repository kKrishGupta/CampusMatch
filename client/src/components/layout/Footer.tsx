import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0d1a] text-slate-300 pt-16 pb-12 border-t border-indigo-950/80 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-indigo-900/40 shrink-0 border border-indigo-500/30">
                <Image
                  src="/image.png"
                  alt="CampusMatch Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Campus<span className="text-purple-400">Match</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Discover, compare, and choose top Indian colleges with confidence using authentic cutoff data, transparent fee breakdowns, and verified placement analytics.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 flex-wrap">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" /> New Delhi, India
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Mail className="w-3.5 h-3.5 text-indigo-400" /> contact@campusmatch.in
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 text-indigo-300">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/colleges" className="hover:text-indigo-400 transition-colors">
                  Top Colleges
                </Link>
              </li>
              <li>
                <Link href="/colleges?courseStream=Computer+Science" className="hover:text-indigo-400 transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link href="/colleges?collegeType=Public" className="hover:text-indigo-400 transition-colors">
                  Government IITs/NITs
                </Link>
              </li>
              <li>
                <Link href="/colleges?sort=placement_desc" className="hover:text-indigo-400 transition-colors">
                  Highest Placements
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools & Features */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 text-indigo-300">
              Decision Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/compare" className="hover:text-indigo-400 transition-colors">
                  College Comparison Tool
                </Link>
              </li>
              <li>
                <Link href="/saved" className="hover:text-indigo-400 transition-colors">
                  Saved Wishlist
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-indigo-400 transition-colors">
                  Course Fee Calculator
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-indigo-400 transition-colors">
                  Student Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Account */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 text-indigo-300">
              Account & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/login" className="hover:text-indigo-400 transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-indigo-400 transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">Terms of Service</span>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p suppressHydrationWarning>© {new Date().getFullYear()} {APP_NAME}. Discover • Compare • Choose.</p>
          <p className="flex items-center gap-1 font-medium text-slate-400">
            Empowering students with verified college data
          </p>
        </div>
      </div>
    </footer>
  );
};
