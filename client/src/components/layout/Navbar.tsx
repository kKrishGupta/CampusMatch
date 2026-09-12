'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Compass, GitCompare, Heart, User as UserIcon, Menu, LogOut, Search, X, MapPin, Award } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useCompare } from '@/hooks/useCompare';
import { useSavedColleges } from '@/hooks/useSavedColleges';
import { MOCK_COLLEGES } from '@/data/colleges';
import { matchCollegeSearch } from '@/services/college.service';
import { getCollegeLogoUrl } from '@/lib/utils';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [navSearch, setNavSearch] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);

  const { user, isAuthenticated, logout } = useAuth();
  const { selectedIds } = useCompare();
  const { savedColleges, isLoading: savedLoading } = useSavedColleges();
  const savedCount = savedLoading ? 0 : savedColleges.length;

  const isActive = (path: string) => pathname === path || pathname?.startsWith(`${path}/`);

  // Compute live search results matching college name, city, state, acronyms, or stream
  const searchResults = useMemo(() => {
    if (!navSearch.trim()) return [];
    return MOCK_COLLEGES.filter((c) => matchCollegeSearch(c, navSearch)).slice(0, 6);
  }, [navSearch]);

  // Click outside listener for live search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearch.trim()) {
      setIsSearchFocused(false);
      router.push(`/colleges?search=${encodeURIComponent(navSearch.trim())}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0B132B]/95 backdrop-blur-xl border-b border-indigo-950/90 text-white shadow-md transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all shrink-0 border border-blue-400/30">
              <Image
                src="/image.png"
                alt="CampusMatch Logo"
                fill
                sizes="36px"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white leading-tight">
                Campus<span className="text-blue-400">Match</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            <Link
              href="/colleges"
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isActive('/colleges')
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Compass className="w-4 h-4 text-blue-400" />
              Colleges
            </Link>

            <Link
              href="/compare"
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all relative ${
                isActive('/compare')
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <GitCompare className="w-4 h-4 text-purple-400" />
              Compare
              {selectedIds.length > 0 && (
                <span className="ml-1 px-1.5 py-0.5 text-[10px] font-extrabold bg-blue-600 text-white rounded-full">
                  {selectedIds.length}
                </span>
              )}
            </Link>

            <Link
              href="/saved"
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all relative ${
                isActive('/saved')
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Heart className="w-4 h-4 text-rose-400" />
              Saved
              {savedCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 text-[10px] font-extrabold bg-rose-500 text-white rounded-full">
                  {savedCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Quick Search Input Box in Navbar with Live Autocomplete Dropdown */}
          <div ref={searchContainerRef} className="hidden md:block flex-1 max-w-sm relative">
            <form onSubmit={handleNavSearch} className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none z-10" />
              <input
                type="text"
                value={navSearch}
                onFocus={() => setIsSearchFocused(true)}
                onChange={(e) => {
                  setNavSearch(e.target.value);
                  setIsSearchFocused(true);
                }}
                placeholder="Search colleges, courses, cities..."
                className="w-full bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/15 rounded-full text-xs text-white placeholder-slate-400 pl-9 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
              />
              {navSearch && (
                <button
                  type="button"
                  onClick={() => setNavSearch('')}
                  className="absolute right-3 text-slate-400 hover:text-white p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>

            {/* Live Autocomplete Search Results Dropdown */}
            {isSearchFocused && navSearch.trim().length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-[#0B132B] border border-indigo-900 rounded-2xl shadow-2xl overflow-hidden z-50 text-white animate-in fade-in zoom-in-95 duration-150">
                {searchResults.length > 0 ? (
                  <div className="py-1.5">
                    <div className="px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-indigo-900/60">
                      Top Colleges ({searchResults.length})
                    </div>
                    {searchResults.map((college) => (
                      <Link
                        key={college.id}
                        href={`/colleges/${college.id}`}
                        onClick={() => {
                          setIsSearchFocused(false);
                          setNavSearch('');
                        }}
                        className="flex items-center gap-3 px-3.5 py-2.5 hover:bg-white/10 transition-colors group"
                      >
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/20 shrink-0 bg-slate-800">
                          <Image
                            src={getCollegeLogoUrl(college.name, college.logoUrl)}
                            alt={college.name}
                            fill
                            sizes="32px"
                            className="object-cover group-hover:scale-105 transition-transform"
                            unoptimized
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-white group-hover:text-blue-300 truncate">
                            {college.name}
                          </div>
                          <div className="text-[11px] text-slate-400 truncate flex items-center gap-1.5">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-slate-400" />
                              {college.city}, {college.state}
                            </span>
                            <span>•</span>
                            <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
                              <Award className="w-3 h-3 text-emerald-400" />
                              {college.nirfRank ? `NIRF #${college.nirfRank}` : college.accreditation}
                            </span>
                          </div>
                        </div>
                        <span className="text-slate-400 text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                      </Link>
                    ))}
                    <button
                      onClick={handleNavSearch}
                      className="w-full text-center py-2 text-xs font-bold text-blue-400 hover:bg-blue-600/20 border-t border-indigo-900/80 transition-colors cursor-pointer"
                    >
                      View all results for "{navSearch}" →
                    </button>
                  </div>
                ) : (
                  <div className="p-4 text-center space-y-2">
                    <p className="text-xs text-slate-300">No colleges found matching "{navSearch}"</p>
                    <button
                      onClick={handleNavSearch}
                      className="text-xs text-blue-400 font-bold hover:underline cursor-pointer"
                    >
                      Search directory for "{navSearch}" →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right User Avatar Action */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 pr-3.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all focus:outline-none cursor-pointer"
                >
                  <div className="relative w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs overflow-hidden shrink-0 border border-blue-400/40">
                    {user.avatarUrl ? (
                      <Image
                        src={user.avatarUrl}
                        alt={user.name}
                        fill
                        sizes="28px"
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      user.name.charAt(0).toUpperCase()
                    )}
                  </div>
                  <span className="text-xs font-bold text-white max-w-[110px] truncate">
                    {user.name}
                  </span>
                </button>

                {userDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#0B132B] shadow-2xl border border-indigo-900 py-1.5 z-50 text-white animate-in fade-in zoom-in-95 duration-150"
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-4 py-2.5 border-b border-indigo-900/80 bg-white/5 rounded-t-2xl">
                      <p className="text-xs font-extrabold text-white truncate">{user.name}</p>
                      <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                    </div>
                    <Link
                      href="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <UserIcon className="w-4 h-4 text-blue-400" /> My Profile
                    </Link>
                    <Link
                      href="/saved"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <Heart className="w-4 h-4 text-rose-400" /> Saved Colleges
                    </Link>
                    <button
                      onClick={async () => {
                        await logout();
                        setUserDropdownOpen(false);
                        router.push('/login');
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-rose-400 hover:bg-rose-500/10 border-t border-indigo-900/80 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition-all shadow-md shadow-blue-500/20"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
