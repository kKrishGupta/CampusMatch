import { AuthLayout } from '@/components/auth/AuthLayout';
import { RegisterForm } from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join CampusMatch to discover colleges, save shortlists, and make confident academic choices"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
