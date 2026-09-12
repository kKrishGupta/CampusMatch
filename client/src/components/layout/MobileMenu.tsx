'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, GitCompare, Heart, User as UserIcon, LogOut, Compass, Home } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useCompare } from '@/hooks/useCompare';
import { useSavedColleges } from '@/hooks/useSavedColleges';
import { Button } from '@/components/ui/Button';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();
  const { selectedIds } = useCompare();
  const { savedIds } = useSavedColleges();

  const isActive = (path: string) => pathname === path || (path !== '/' && pathname?.startsWith(`${path}/`));

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Side Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0B132B] text-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200 border-l border-indigo-900">
            <div className="flex items-center justify-between px-5 py-4 border-b border-indigo-900/80">
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-xs shrink-0 border border-blue-400/30">
                  <Image
                    src="/image.png"
                    alt="CampusMatch Logo"
                    fill
                    sizes="32px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <span className="font-extrabold text-white text-lg tracking-tight">
                  Campus<span className="text-blue-400">Match</span>
                </span>
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
              {isAuthenticated && user && (
                <div className="p-3.5 rounded-xl bg-white/5 border border-indigo-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-base shrink-0">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-white text-sm truncate">{user.name}</p>
                    <p className="text-xs text-slate-400 truncate">{user.email}</p>
                  </div>
                </div>
              )}

              <nav className="flex flex-col gap-1.5">
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Home className="w-5 h-5 text-blue-400" />
                  Home
                </Link>

                <Link
                  href="/colleges"
                  onClick={onClose}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Compass className="w-5 h-5 text-blue-400" />
                  Explore Colleges
                </Link>

                <Link
                  href="/compare"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <GitCompare className="w-5 h-5 text-purple-400" />
                    Compare Colleges
                  </div>
                  {selectedIds.length > 0 && (
                    <span className="px-2 py-0.5 text-xs font-bold bg-purple-500 text-white rounded-full">
                      {selectedIds.length}
                    </span>
                  )}
                </Link>

                <Link
                  href="/saved"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-rose-400" />
                    Saved Colleges
                  </div>
                  {savedIds.length > 0 && (
                    <span className="px-2 py-0.5 text-xs font-bold bg-rose-500 text-white rounded-full">
                      {savedIds.length}
                    </span>
                  )}
                </Link>

                <Link
                  href="/profile"
                  onClick={onClose}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <UserIcon className="w-5 h-5 text-emerald-400" />
                  My Profile
                </Link>
              </nav>
            </div>

            <div className="p-5 border-t border-indigo-900 bg-white/5">
              <Button
                variant="outline"
                className="w-full justify-center text-rose-400 border-rose-500/30 hover:bg-rose-500/10"
                leftIcon={<LogOut className="w-4 h-4" />}
                onClick={() => {
                  logout();
                  onClose();
                }}
              >
                Logout Account
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom Navigation Bar for Mobile (Matching Reference UI) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B132B]/95 backdrop-blur-md border-t border-indigo-950/90 lg:hidden px-4 py-2">
        <div className="grid grid-cols-5 gap-1 text-center">
          <Link
            href="/"
            className={`flex flex-col items-center py-1 rounded-xl transition-all ${
              pathname === '/' ? 'text-blue-400 font-extrabold' : 'text-slate-400 font-semibold'
            }`}
          >
            <Home className="w-5 h-5 mb-0.5" />
            <span className="text-[10px]">Home</span>
          </Link>

          <Link
            href="/colleges"
            className={`flex flex-col items-center py-1 rounded-xl transition-all ${
              isActive('/colleges') ? 'text-blue-400 font-extrabold' : 'text-slate-400 font-semibold'
            }`}
          >
            <Compass className="w-5 h-5 mb-0.5" />
            <span className="text-[10px]">Colleges</span>
          </Link>

          <Link
            href="/compare"
            className={`flex flex-col items-center py-1 rounded-xl transition-all relative ${
              isActive('/compare') ? 'text-purple-400 font-extrabold' : 'text-slate-400 font-semibold'
            }`}
          >
            <GitCompare className="w-5 h-5 mb-0.5" />
            <span className="text-[10px]">Compare</span>
            {selectedIds.length > 0 && (
              <span className="absolute top-0 right-3 w-4 h-4 text-[9px] font-black bg-purple-500 text-white rounded-full flex items-center justify-center">
                {selectedIds.length}
              </span>
            )}
          </Link>

          <Link
            href="/saved"
            className={`flex flex-col items-center py-1 rounded-xl transition-all relative ${
              isActive('/saved') ? 'text-rose-400 font-extrabold' : 'text-slate-400 font-semibold'
            }`}
          >
            <Heart className="w-5 h-5 mb-0.5" />
            <span className="text-[10px]">Saved</span>
            {savedIds.length > 0 && (
              <span className="absolute top-0 right-3 w-4 h-4 text-[9px] font-black bg-rose-500 text-white rounded-full flex items-center justify-center">
                {savedIds.length}
              </span>
            )}
          </Link>

          <Link
            href="/profile"
            className={`flex flex-col items-center py-1 rounded-xl transition-all ${
              isActive('/profile') ? 'text-emerald-400 font-extrabold' : 'text-slate-400 font-semibold'
            }`}
          >
            <UserIcon className="w-5 h-5 mb-0.5" />
            <span className="text-[10px]">Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
};
