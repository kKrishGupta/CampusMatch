import { Suspense } from 'react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your CampusMatch account to access saved colleges and post reviews"
    >
      <Suspense fallback={<div className="p-4 text-center text-xs text-slate-500">Loading form...</div>}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}
