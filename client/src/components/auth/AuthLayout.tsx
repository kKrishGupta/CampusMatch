import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-950/5 via-slate-50 to-slate-50 relative overflow-hidden">
      {/* Background Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <Link href="/" className="inline-flex items-center gap-3 mb-2 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-all shrink-0 border border-indigo-100">
            <Image
              src="/image.png"
              alt="CampusMatch Logo"
              fill
              sizes="40px"
              className="object-cover"
              unoptimized
            />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-slate-900">
            Campus<span className="text-brand-gradient">Match</span>
          </span>
        </Link>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
        <p className="text-sm text-slate-600 font-medium max-w-sm mx-auto">{subtitle}</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 shadow-xl shadow-indigo-950/5 rounded-3xl border border-slate-200/80">
          {children}
        </div>
      </div>
    </div>
  );
};
