'use client';

import React from 'react';
import Link from 'next/link';
import { X, Search, GitCompare, Heart, User as UserIcon, LogOut, Compass } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useCompare } from '@/hooks/useCompare';
import { useSavedColleges } from '@/hooks/useSavedColleges';
import { Button } from '@/components/ui/Button';

import Image from 'next/image';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const { selectedIds } = useCompare();
  const { savedIds } = useSavedColleges();

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-xs shrink-0">
              <Image
                src="/logo.png"
                alt="CampusMatch Logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span className="font-extrabold text-slate-900 text-lg tracking-tight">
              Campus<span className="text-indigo-600">Match</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
          {isAuthenticated && user && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-base shrink-0">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-slate-900 text-sm truncate">{user.name}</p>
                <p className="text-xs text-slate-500 truncate">{user.email}</p>
              </div>
            </div>
          )}

          <nav className="flex flex-col gap-1">
            <Link
              href="/colleges"
              onClick={onClose}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors"
            >
              <Compass className="w-5 h-5 text-indigo-600" />
              Explore Colleges
            </Link>

            <Link
              href="/compare"
              onClick={onClose}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <GitCompare className="w-5 h-5 text-indigo-600" />
                Compare Colleges
              </div>
              {selectedIds.length > 0 && (
                <span className="px-2 py-0.5 text-xs font-bold bg-indigo-100 text-indigo-700 rounded-full">
                  {selectedIds.length}
                </span>
              )}
            </Link>

            <Link
              href="/saved"
              onClick={onClose}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-indigo-600" />
                Saved Colleges
              </div>
              {savedIds.length > 0 && (
                <span className="px-2 py-0.5 text-xs font-bold bg-rose-100 text-rose-700 rounded-full">
                  {savedIds.length}
                </span>
              )}
            </Link>

            {isAuthenticated && (
              <Link
                href="/profile"
                onClick={onClose}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors"
              >
                <UserIcon className="w-5 h-5 text-indigo-600" />
                My Profile
              </Link>
            )}
          </nav>
        </div>

        <div className="p-5 border-t border-slate-100 bg-slate-50/50">
          {isAuthenticated ? (
            <Button
              variant="outline"
              className="w-full justify-center text-rose-600 border-rose-200 hover:bg-rose-50"
              leftIcon={<LogOut className="w-4 h-4" />}
              onClick={() => {
                logout();
                onClose();
              }}
            >
              Logout
            </Button>
          ) : (
            <div className="flex flex-col gap-2">
              <Link href="/login" onClick={onClose}>
                <Button variant="outline" className="w-full justify-center">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={onClose}>
                <Button variant="primary" className="w-full justify-center">
                  Create Account
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
