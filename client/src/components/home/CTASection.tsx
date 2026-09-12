import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white max-w-2xl mx-auto">
          Ready to Make Your College Decision with Confidence?
        </h2>
        <p className="text-indigo-200 text-base max-w-xl mx-auto">
          Join thousands of students exploring top engineering, tech, and management campuses today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="/colleges">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-indigo-900 hover:bg-slate-100 focus:ring-white shadow-lg"
              rightIcon={<ArrowRight className="w-4 h-4 text-indigo-900" />}
            >
              Explore 50+ Colleges
            </Button>
          </Link>
          <Link href="/compare">
            <Button
              variant="outline"
              size="lg"
              className="border-indigo-400/50 text-white hover:bg-indigo-800/60"
            >
              Compare Side-by-Side
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
