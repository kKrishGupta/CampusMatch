'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/Toast';
import { Input } from '@/components/ui/Input';
import { PasswordInput } from './PasswordInput';
import { Button } from '@/components/ui/Button';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/profile';

  const { login } = useAuth();
  const { showToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleQuickFill = () => {
    setEmail('student@campusmatch.in');
    setPassword('password123');
    setErrors({});
  };

  const validate = () => {
    const errs: { email?: string; password?: string } = {};

    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!email.includes('@')) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters long.';
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
      await login({ email, password, rememberMe });
      showToast('Login successful! Welcome back.', 'success');
      router.push(redirect);
    } catch (err: any) {
      setErrors({ general: err.message || 'Invalid email or password.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-100/90 flex items-center justify-between gap-2 text-xs">
        <span className="text-indigo-900 font-medium">Quick testing credentials:</span>
        <button
          type="button"
          onClick={handleQuickFill}
          className="font-bold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer shrink-0"
        >
          Auto-fill Demo Details →
        </button>
      </div>

      {errors.general && (
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
          {errors.general}
        </div>
      )}

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

      <PasswordInput
        label="Password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        required
      />

      <div className="flex items-center justify-between text-xs pt-1">
        <label className="flex items-center gap-2 cursor-pointer text-slate-600 font-medium select-none">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          Remember me
        </label>

        <span className="text-slate-400 cursor-not-allowed">Forgot password?</span>
      </div>

      <Button
        type="submit"
        variant="brand"
        size="lg"
        isLoading={isLoading}
        className="w-full justify-center shadow-md shadow-indigo-900/20 mt-2"
        rightIcon={<ArrowRight className="w-4 h-4" />}
      >
        Sign In
      </Button>

      <div className="text-center text-xs text-slate-600 pt-4 border-t border-slate-100">
        Don’t have an account yet?{' '}
        <Link href="/register" className="font-bold text-indigo-600 hover:underline">
          Create Account
        </Link>
      </div>
    </form>
  );
};
