import React from 'react';

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'normal' | 'wide' | 'narrow';
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  size = 'normal',
}) => {
  const sizeMap = {
    normal: 'max-w-7xl',
    wide: 'max-w-8xl',
    narrow: 'max-w-4xl',
  };

  return (
    <main className={`w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 ${sizeMap[size]} ${className}`}>
      {children}
    </main>
  );
};
