import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && <div className="absolute left-3.5 text-slate-400 pointer-events-none">{leftIcon}</div>}
          <input
            ref={ref}
            id={inputId}
            className={`w-full bg-white border ${
              error
                ? 'border-rose-500 focus:ring-rose-500/20 focus:border-rose-600'
                : 'border-slate-300/90 hover:border-slate-400 focus:ring-4 focus:ring-indigo-500/15 focus:border-indigo-600'
            } rounded-xl text-slate-900 text-sm py-2.5 ${leftIcon ? 'pl-10' : 'pl-3.5'} ${
              rightIcon ? 'pr-10' : 'pr-3.5'
            } transition-all duration-200 placeholder:text-slate-400 focus:outline-none disabled:bg-slate-100 disabled:cursor-not-allowed ${className}`}
            {...props}
          />
          {rightIcon && <div className="absolute right-3.5 text-slate-400">{rightIcon}</div>}
        </div>
        {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}
        {!error && helperText && <p className="text-xs text-slate-500">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
