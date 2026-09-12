'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, User as UserIcon, ArrowRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/Toast';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { PasswordInput } from './PasswordInput';
import { Button } from '@/components/ui/Button';
import { COURSE_STREAMS } from '@/lib/constants';

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const { register } = useAuth();
  const { showToast } = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [targetCourse, setTargetCourse] = useState('Computer Science');

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const errs: typeof errors = {};

    if (!name.trim()) {
      errs.name = 'Full name is required.';
    }

    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!email.includes('@') || !email.includes('.')) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters long.';
    }

    if (confirmPassword !== password) {
      errs.confirmPassword = 'Passwords do not match.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validate()) return;

    setIsLoading(true);
    try {
      await register({ name, email, password, confirmPassword, targetCourse });
      showToast('Account created successfully! Welcome to CampusMatch.', 'success');
      router.push('/colleges');
    } catch (err: any) {
      setErrors({ general: err.message || 'Failed to create account.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.general && (
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
          {errors.general}
        </div>
      )}

      <Input
        label="Full Name"
        placeholder="e.g. Devanshu Sharma"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        leftIcon={<UserIcon className="w-4 h-4 text-slate-400" />}
        required
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="student@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
        required
      />

      <Select
        label="Target Discipline"
        value={targetCourse}
        onChange={(e) => setTargetCourse(e.target.value)}
        options={COURSE_STREAMS.map((c) => ({ label: c, value: c }))}
      />

      <PasswordInput
        label="Password"
        placeholder="At least 6 characters"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        required
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Repeat password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={errors.confirmPassword}
        required
      />

      <Button
        type="submit"
        variant="brand"
        size="lg"
        isLoading={isLoading}
        className="w-full justify-center shadow-md shadow-indigo-900/20 mt-2"
        rightIcon={<ArrowRight className="w-4 h-4" />}
      >
        Create Account
      </Button>

      <div className="text-center text-xs text-slate-600 pt-4 border-t border-slate-100">
        Already have an account?{' '}
        <Link href="/login" className="font-bold text-indigo-600 hover:underline">
          Sign In
        </Link>
      </div>
    </form>
  );
};
