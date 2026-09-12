import React from 'react';
import Link from 'next/link';
import { Compass, GraduationCap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-slate-50">
      <div className="w-20 h-20 rounded-3xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 shadow-inner">
        <GraduationCap className="w-10 h-10" />
      </div>

      <span className="text-sm font-extrabold uppercase tracking-widest text-indigo-600 mb-1">404 Error</span>
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
        Looks like this campus doesn’t exist.
      </h1>

      <p className="text-slate-600 text-sm max-w-md mb-8 leading-relaxed">
        The college or page you are looking for might have been moved, renamed, or is unavailable in our dataset.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/colleges">
          <Button variant="primary" size="lg" leftIcon={<Compass className="w-4 h-4" />}>
            Back to Colleges
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline" size="lg" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
