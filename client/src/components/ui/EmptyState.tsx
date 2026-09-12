import React from 'react';
import { SearchX, FolderOpen, HeartOff, SlidersHorizontal } from 'lucide-react';
import { Button } from './Button';

export interface EmptyStateProps {
  icon?: 'search' | 'saved' | 'filter' | 'generic';
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = 'search',
  title,
  description,
  actionLabel,
  onAction,
  className = '',
}) => {
  const iconMap = {
    search: <SearchX className="w-10 h-10 text-slate-400" />,
    saved: <HeartOff className="w-10 h-10 text-slate-400" />,
    filter: <SlidersHorizontal className="w-10 h-10 text-slate-400" />,
    generic: <FolderOpen className="w-10 h-10 text-slate-400" />,
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 bg-slate-50/50 rounded-2xl border border-dashed border-slate-300 my-4 ${className}`}>
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
        {iconMap[icon]}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
