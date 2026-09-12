import React from 'react';

export interface BadgeProps {
  variant?: 'primary' | 'violet' | 'accent' | 'success' | 'warning' | 'info' | 'neutral' | 'gradient';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
}) => {
  const variantMap = {
    primary: 'bg-indigo-50/90 text-indigo-700 border-indigo-200/80',
    violet: 'bg-purple-50/90 text-purple-700 border-purple-200/80',
    accent: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200/80',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    warning: 'bg-amber-50 text-amber-800 border-amber-200/80',
    info: 'bg-sky-50 text-sky-700 border-sky-200/80',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200/80',
    gradient: 'bg-brand-gradient text-white border-transparent shadow-xs',
  };

  const sizeMap = {
    sm: 'text-[11px] px-2.5 py-0.5 font-medium rounded-full border',
    md: 'text-xs px-3 py-1 font-semibold rounded-full border',
  };

  return (
    <span className={`inline-flex items-center gap-1 shrink-0 ${variantMap[variant]} ${sizeMap[size]} ${className}`}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
