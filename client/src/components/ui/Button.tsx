import React from 'react';
import { Spinner } from './Spinner';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'brand' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98] cursor-pointer';

    const variantStyles = {
      primary:
        'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500 shadow-md shadow-indigo-200/80 hover:shadow-lg hover:shadow-indigo-300/50',
      brand:
        'bg-brand-gradient hover:opacity-95 text-white focus:ring-indigo-500 shadow-md shadow-indigo-900/20 hover:shadow-lg',
      gradient:
        'bg-brand-gradient-vibrant hover:brightness-110 text-white focus:ring-purple-500 shadow-md shadow-purple-200 hover:shadow-lg',
      secondary:
        'bg-indigo-50/80 hover:bg-indigo-100/80 text-indigo-900 focus:ring-indigo-400 border border-indigo-100',
      outline:
        'border border-slate-300/80 bg-white hover:bg-slate-50 hover:border-slate-400 text-slate-700 focus:ring-indigo-500 shadow-xs',
      ghost:
        'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 focus:ring-indigo-400',
      danger:
        'bg-rose-600 hover:bg-rose-700 text-white focus:ring-rose-500 shadow-xs',
    };

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Spinner size={size === 'sm' ? 'sm' : 'md'} className="text-current" />
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
