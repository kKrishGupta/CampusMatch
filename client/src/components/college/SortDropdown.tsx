import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { CollegeSortOption } from '@/types/college';
import { SORT_OPTIONS } from '@/lib/constants';
import { Dropdown } from '@/components/ui/Dropdown';

export interface SortDropdownProps {
  value: CollegeSortOption;
  onChange: (sort: CollegeSortOption) => void;
  className?: string;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange, className = '' }) => {
  const items = SORT_OPTIONS.map((opt) => ({
    label: opt.label,
    value: opt.value,
  }));

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <ArrowUpDown className="w-4 h-4 text-slate-400 shrink-0 hidden sm:inline" />
      <Dropdown
        value={value}
        items={items}
        onChange={(val) => onChange(val as CollegeSortOption)}
      />
    </div>
  );
};
