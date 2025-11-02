import React from 'react';
import { cn } from '@/lib/utils';

export interface IOSGlassProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'strong' | 'colored';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  border?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

const IOSGlass: React.FC<IOSGlassProps> = ({
  children,
  className,
  variant = 'default',
  blur = 'md',
  opacity = 0.8,
  border = true,
  hover = true,
  onClick,
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const variantClasses = {
    default: 'bg-white/10 dark:bg-white/5',
    subtle: 'bg-white/5 dark:bg-white/2',
    strong: 'bg-white/20 dark:bg-white/10',
    colored: 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10',
  };

  const borderClasses = border
    ? 'border border-white/20 dark:border-white/10'
    : '';

  const hoverClasses = hover
    ? 'transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/8 hover:scale-[1.02] hover:shadow-2xl'
    : '';

  return (
    <div
      className={cn(
        // Base styles
        'relative overflow-hidden rounded-2xl',
        // Backdrop and background
        blurClasses[blur],
        variantClasses[variant],
        borderClasses,
        hoverClasses,
        // Shadows for depth
        'shadow-xl shadow-black/10 dark:shadow-black/30',
        // Inner glow effect
        'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-50 before:pointer-events-none',
        // Additional depth shadow
        'after:absolute after:inset-0 after:rounded-2xl after:shadow-inner after:shadow-black/5 dark:after:shadow-black/20 after:pointer-events-none',
        className
      )}
      style={{
        backdropFilter: `blur(${blur === 'sm' ? '8px' : blur === 'md' ? '16px' : blur === 'lg' ? '24px' : '32px'}) saturate(1.8)`,
        WebkitBackdropFilter: `blur(${blur === 'sm' ? '8px' : blur === 'md' ? '16px' : blur === 'lg' ? '24px' : '32px'}) saturate(1.8)`,
      }}
      onClick={onClick}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default IOSGlass;

