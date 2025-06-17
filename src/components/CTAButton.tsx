// src/components/CTAButton.tsx
'use client';

import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 ease-out transform active:scale-95 sm:hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 touch-manipulation';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25 focus:ring-purple-500 active:shadow-purple-500/40',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/30 backdrop-blur-sm focus:ring-white/30 active:bg-white/25 active:border-white/40',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  // Handle both internal links and external URLs
  if (href.startsWith('#')) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(onClick && { onClick })}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith('http') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        {...(onClick && { onClick })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      href={href} 
      className={combinedClasses} 
      {...(onClick && { onClick })}
    >
      {children}
    </Link>
  );
}