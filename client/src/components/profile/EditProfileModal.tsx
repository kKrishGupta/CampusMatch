'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Camera, Trash2, Upload, User as UserIcon, Check } from 'lucide-react';
import { User } from '@/types/user';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/Toast';
import { COURSE_STREAMS } from '@/lib/constants';

export interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80',
];

export const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose }) => {
  const { user, updateProfile } = useAuth();
  const { showToast } = useToast();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [targetCourse, setTargetCourse] = useState(user?.targetCourse || 'Computer Science');
  const [targetCity, setTargetCity] = useState(user?.targetCity || 'New Delhi');
  const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl || '');

  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!user) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      showToast('Image file size must be less than 2MB', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setAvatarUrl(reader.result.toString());
        showToast('Avatar image loaded! Click Save to apply.', 'info');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      showToast('Name cannot be empty', 'error');
      return;
    }

    setIsLoading(true);
    try {
      await updateProfile({
        name: name.trim(),
        email: email.trim(),
        targetCourse,
        targetCity: targetCity.trim(),
        avatarUrl,
      });
      showToast('Profile updated successfully!', 'success');
      onClose();
    } catch (err: any) {
      showToast(err.message || 'Failed to update profile', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Profile & Avatar" maxWidth="md">
      <form onSubmit={handleSave} className="space-y-5">
        {/* Avatar Image Section */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
            Profile Picture
          </label>

          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-2xl bg-indigo-600 border-2 border-indigo-200 overflow-hidden shrink-0 flex items-center justify-center shadow-md">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt="Profile Avatar"
                  fill
                  sizes="80px"
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <span className="text-white font-extrabold text-2xl">
                  {name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                leftIcon={<Upload className="w-3.5 h-3.5 text-indigo-600" />}
              >
                Upload Photo
              </Button>

              {avatarUrl && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setAvatarUrl('')}
                  className="text-rose-600 hover:bg-rose-50"
                  leftIcon={<Trash2 className="w-3.5 h-3.5" />}
                >
                  Remove Photo
                </Button>
              )}
            </div>
          </div>

          {/* Preset Avatars */}
          <div className="space-y-1.5 pt-1">
            <span className="text-xs text-slate-500 font-medium">Or select a preset avatar:</span>
            <div className="flex items-center gap-2">
              {PRESET_AVATARS.map((url, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setAvatarUrl(url)}
                  className={`relative w-10 h-10 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    avatarUrl === url ? 'border-indigo-600 scale-105 shadow-md' : 'border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  <Image src={url} alt={`Preset ${idx}`} fill sizes="40px" className="object-cover" unoptimized />
                  {avatarUrl === url && (
                    <div className="absolute inset-0 bg-indigo-600/30 flex items-center justify-center text-white">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <Input
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          required
        />

        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            label="Target Discipline"
            value={targetCourse}
            onChange={(e) => setTargetCourse(e.target.value)}
            options={COURSE_STREAMS.map((c) => ({ label: c, value: c }))}
          />

          <Input
            label="Target City"
            value={targetCity}
            onChange={(e) => setTargetCity(e.target.value)}
            placeholder="e.g. New Delhi"
          />
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="brand" isLoading={isLoading}>
            Save Profile
          </Button>
        </div>
      </form>
    </Modal>
  );
};
