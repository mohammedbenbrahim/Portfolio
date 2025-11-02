import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassNavProps {
  children: React.ReactNode;
  className?: string;
  position?: 'fixed' | 'sticky' | 'relative';
  variant?: 'header' | 'sidebar' | 'floating';
  blur?: 'sm' | 'md' | 'lg';
}

const GlassNav: React.FC<GlassNavProps> = ({
  children,
  className,
  position = 'fixed',
  variant = 'header',
  blur = 'md',
}) => {
  const positionClasses = {
    fixed: 'fixed top-0 left-0 right-0 z-50',
    sticky: 'sticky top-0 z-50',
    relative: 'relative',
  };

  const variantClasses = {
    header: 'border-b border-white/20 dark:border-white/10',
    sidebar: 'border-r border-white/20 dark:border-white/10',
    floating: 'rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl',
  };

  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  };

  return (
    <nav
      className={cn(
        // Base styles
        positionClasses[position],
        variantClasses[variant],
        blurClasses[blur],
        // Background with iOS 16 glass effect
        'bg-white/10 dark:bg-white/5',
        // iOS 16 specific effects
        'before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-50 before:pointer-events-none',
        'after:absolute after:inset-0 after:shadow-inner after:shadow-white/10 dark:after:shadow-white/5 after:pointer-events-none',
        // Transitions
        'transition-all duration-300',
        className
      )}
      style={{
        backdropFilter: 'blur(16px) saturate(1.8) brightness(1.1)',
        WebkitBackdropFilter: 'blur(16px) saturate(1.8) brightness(1.1)',
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </nav>
  );
};

export default GlassNav;

