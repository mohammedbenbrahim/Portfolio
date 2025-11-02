import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'strong' | 'colored' | 'frosted';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  gradient?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  padding = 'md',
  interactive = false,
  gradient = false,
  glow = false,
  onClick,
}) => {
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };

  const variantClasses = {
    default: 'bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10',
    subtle: 'bg-white/5 dark:bg-white/2 border-white/10 dark:border-white/5',
    strong: 'bg-white/20 dark:bg-white/10 border-white/30 dark:border-white/15',
    colored: 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-pink-400/10 border-blue-400/20 dark:border-blue-300/10',
    frosted: 'bg-white/15 dark:bg-white/8 border-white/25 dark:border-white/12',
  };

  const interactiveClasses = interactive
    ? 'cursor-pointer transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/8 hover:scale-[1.02] hover:shadow-2xl hover:border-white/30 dark:hover:border-white/15 active:scale-[0.98]'
    : '';

  const gradientClasses = gradient
    ? 'bg-gradient-to-br from-white/15 via-white/10 to-white/5 dark:from-white/10 dark:via-white/5 dark:to-white/2'
    : '';

  const glowClasses = glow
    ? 'shadow-2xl shadow-blue-500/20 dark:shadow-blue-400/10'
    : 'shadow-xl shadow-black/10 dark:shadow-black/30';

  return (
    <div
      className={cn(
        // Base styles
        'relative overflow-hidden rounded-2xl border backdrop-blur-md',
        // Variant styles
        variantClasses[variant],
        // Size and padding
        sizeClasses[size],
        paddingClasses[padding],
        // Interactive styles
        interactiveClasses,
        gradientClasses,
        // Glow effect
        glowClasses,
        // iOS 16 specific effects
        'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/20 before:via-white/10 before:to-transparent before:opacity-60 before:pointer-events-none',
        'after:absolute after:inset-0 after:rounded-2xl after:shadow-inner after:shadow-white/10 dark:after:shadow-white/5 after:pointer-events-none',
        className
      )}
      style={{
        backdropFilter: 'blur(16px) saturate(1.8) brightness(1.1)',
        WebkitBackdropFilter: 'blur(16px) saturate(1.8) brightness(1.1)',
      }}
      onClick={onClick}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;

