'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Calculator, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'calculator' | 'terms' | 'privacy' | null>(null);

  // Calculator State
  const [tuitionPerYear, setTuitionPerYear] = useState<number>(250000);
  const [durationYears, setDurationYears] = useState<number>(4);
  const [expectedLpa, setExpectedLpa] = useState<number>(18);

  const totalFee = tuitionPerYear * durationYears;
  const estimatedFirstYearSalary = expectedLpa * 100000;
  const roiPercentage = Math.round((estimatedFirstYearSalary / totalFee) * 100);

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
                <Link href="/colleges?query=Computer+Science" className="hover:text-indigo-400 transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link href="/colleges?type=Public" className="hover:text-indigo-400 transition-colors">
                  Government IITs/NITs
                </Link>
              </li>
              <li>
                <Link href="/colleges?sort=placement" className="hover:text-indigo-400 transition-colors">
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
                <button
                  type="button"
                  onClick={() => setActiveModal('calculator')}
                  className="hover:text-indigo-400 transition-colors text-left cursor-pointer"
                >
                  Course Fee Calculator
                </button>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-indigo-400 transition-colors">
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
                <Link href="/profile" className="hover:text-indigo-400 transition-colors">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/saved" className="hover:text-indigo-400 transition-colors">
                  Saved Colleges
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-indigo-400 transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-indigo-400 transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
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

      {/* Course Fee & ROI Calculator Modal */}
      <Modal isOpen={activeModal === 'calculator'} onClose={() => setActiveModal(null)} maxWidth="md">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">Course Fee & ROI Calculator</h3>
              <p className="text-xs text-slate-500">Estimate your total degree cost & expected return on investment</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase block mb-1">
                Annual Tuition Fee (₹): {tuitionPerYear.toLocaleString()} / yr
              </label>
              <input
                type="range"
                min={50000}
                max={600000}
                step={10000}
                value={tuitionPerYear}
                onChange={(e) => setTuitionPerYear(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase block mb-1">
                Course Duration: {durationYears} Years
              </label>
              <select
                value={durationYears}
                onChange={(e) => setDurationYears(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value={4}>4 Years (B.Tech / B.E.)</option>
                <option value={5}>5 Years (Dual Degree B.Tech + M.Tech)</option>
                <option value={2}>2 Years (M.Tech / MBA)</option>
                <option value={3}>3 Years (B.Sc / BCA)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase block mb-1">
                Expected Average Placement (LPA): ₹{expectedLpa} LPA
              </label>
              <input
                type="range"
                min={4}
                max={50}
                step={1}
                value={expectedLpa}
                onChange={(e) => setExpectedLpa(Number(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 space-y-2">
              <div className="flex justify-between text-xs text-slate-600 font-semibold">
                <span>Total Investment:</span>
                <span className="font-extrabold text-slate-900">₹{totalFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600 font-semibold">
                <span>Expected 1st Year Package:</span>
                <span className="font-extrabold text-emerald-700">₹{estimatedFirstYearSalary.toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t border-indigo-200/60 flex justify-between text-sm font-extrabold text-indigo-950">
                <span>Estimated ROI:</span>
                <span className="text-indigo-600">{roiPercentage}% Year 1 Return</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button variant="primary" onClick={() => setActiveModal(null)}>
              Done
            </Button>
          </div>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={activeModal === 'terms'} onClose={() => setActiveModal(null)} maxWidth="lg">
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <FileText className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">Terms of Service</h3>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-h-96 overflow-y-auto pr-2">
            <p>
              Welcome to <strong>CampusMatch</strong>. By accessing our platform, you agree to comply with the following terms regarding college discovery, comparison tools, and review submissions.
            </p>
            <h4 className="font-bold text-slate-900 text-sm">1. Accuracy of Data</h4>
            <p>
              Cutoff ranks, placement statistics, tuition fees, and accreditation information displayed on CampusMatch are collected from public institutional disclosures, JoSAA counseling data, and NIRF reports.
            </p>
            <h4 className="font-bold text-slate-900 text-sm">2. Community Review Guidelines</h4>
            <p>
              Users submitting campus reviews must provide honest, constructive feedback. Reviews containing spam, abusive language, or false disclosures will be moderated.
            </p>
          </div>
          <div className="flex justify-end pt-2">
            <Button variant="primary" onClick={() => setActiveModal(null)}>
              I Understand
            </Button>
          </div>
        </div>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal isOpen={activeModal === 'privacy'} onClose={() => setActiveModal(null)} maxWidth="lg">
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">Privacy Policy</h3>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-h-96 overflow-y-auto pr-2">
            <p>
              At <strong>CampusMatch</strong>, we value your privacy. This policy outlines how user preferences, saved college wishlists, and profile information are stored and protected.
            </p>
            <h4 className="font-bold text-slate-900 text-sm">1. Information We Store</h4>
            <p>
              Account details (name, email, target course) and saved colleges are stored securely in your local browser session or encrypted database instance.
            </p>
            <h4 className="font-bold text-slate-900 text-sm">2. Data Sharing</h4>
            <p>
              We do not sell or share personal student contact information with third-party advertisers.
            </p>
          </div>
          <div className="flex justify-end pt-2">
            <Button variant="primary" onClick={() => setActiveModal(null)}>
              Accept Privacy Policy
            </Button>
          </div>
        </div>
      </Modal>
    </footer>
  );
};
