'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { useSavedColleges } from '@/hooks/useSavedColleges';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { User as UserIcon, Mail, Calendar, Heart, BookOpen, LogOut, Compass, Edit3, Camera, MapPin } from 'lucide-react';
import { SavedCollegeGrid } from '@/components/saved/SavedCollegeGrid';
import { EditProfileModal } from '@/components/profile/EditProfileModal';

export default function ProfilePage() {
  const { user, isAuthenticated, logout, loginAsDemoUser } = useAuth();
  const { savedIds } = useSavedColleges();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (!isAuthenticated || !user) {
    return (
      <PageContainer size="narrow" className="py-16 text-center">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-md space-y-6">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-100 shadow-xs">
            <UserIcon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">You are currently Signed Out</h2>
            <p className="text-sm text-slate-600 mt-1">Sign in to view your profile, saved colleges, and personalized recommendations.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="/login?redirect=/profile" className="w-full sm:w-auto">
              <Button variant="brand" className="w-full">Sign In to Your Account</Button>
            </Link>
            <Link href="/register" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">Create New Account</Button>
            </Link>
          </div>
          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={loginAsDemoUser}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer"
            >
              Or explore with Instant Guest Access →
            </button>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer size="wide" className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          {/* Avatar with Camera Hover Overlay */}
          <div
            onClick={() => setIsEditModalOpen(true)}
            className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-brand-gradient text-white font-extrabold text-3xl flex items-center justify-center shadow-lg shadow-indigo-500/20 overflow-hidden cursor-pointer shrink-0 border-2 border-white"
            title="Click to edit profile picture"
          >
            {user.avatarUrl ? (
              <Image
                src={user.avatarUrl}
                alt={user.name}
                fill
                sizes="96px"
                className="object-cover group-hover:scale-105 transition-transform"
                unoptimized
              />
            ) : (
              <span>{user.name.charAt(0).toUpperCase()}</span>
            )}
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Camera className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{user.name}</h1>
              <Badge variant="success" size="sm">Verified Account</Badge>
            </div>
            <p className="text-sm text-slate-600 flex items-center gap-2 font-medium">
              <Mail className="w-4 h-4 text-indigo-500" /> {user.email}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 flex-wrap pt-0.5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> Member since {user.createdAt}
              </span>
              {user.targetCity && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {user.targetCity}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Profile Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            onClick={() => setIsEditModalOpen(true)}
            className="flex-1 sm:flex-initial"
            leftIcon={<Edit3 className="w-4 h-4 text-indigo-600" />}
          >
            Edit Profile
          </Button>
          <Button
            variant="outline"
            onClick={logout}
            className="text-rose-600 border-rose-200 hover:bg-rose-50 flex-1 sm:flex-initial"
            leftIcon={<LogOut className="w-4 h-4" />}
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* Preferences & Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Shortlisted Colleges</span>
            <Heart className="w-4.5 h-4.5 text-rose-500" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">{savedIds.length}</p>
          <Link href="/saved" className="text-xs font-bold text-indigo-600 hover:underline inline-block pt-1">
            View Wishlist →
          </Link>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Target Discipline</span>
            <BookOpen className="w-4.5 h-4.5 text-indigo-500" />
          </div>
          <p className="text-xl font-bold text-slate-900">{user.targetCourse || 'Computer Science'}</p>
          <span className="text-xs text-slate-500 font-medium">Academic Preference</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Account Role</span>
            <UserIcon className="w-4.5 h-4.5 text-emerald-500" />
          </div>
          <p className="text-xl font-bold text-slate-900">Student Explorer</p>
          <span className="text-xs text-slate-500 font-medium">Full Access</span>
        </div>
      </div>

      {/* Saved Colleges Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-slate-900">Your Shortlisted Colleges</h2>
          <Link href="/colleges">
            <Button variant="ghost" size="sm" rightIcon={<Compass className="w-4 h-4" />}>
              Find More Colleges
            </Button>
          </Link>
        </div>
        <SavedCollegeGrid />
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </PageContainer>
  );
}
