import React from 'react';
import GlassCard from './glass-card';
import GlassNav from './glass-nav';

const GlassDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <GlassNav variant="floating" className="mb-8">
          <div className="container mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-center">iOS 16 Glass Effects Demo</h1>
          </div>
        </GlassNav>

        {/* Glass Card Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard variant="subtle" size="lg" interactive>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Subtle Glass</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for subtle UI elements that need minimal visual weight.
              </p>
            </div>
          </GlassCard>

          <GlassCard variant="default" size="lg" interactive>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Default Glass</h3>
              <p className="text-sm text-muted-foreground">
                The standard iOS 16 glass effect with balanced transparency.
              </p>
            </div>
          </GlassCard>

          <GlassCard variant="strong" size="lg" interactive>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Strong Glass</h3>
              <p className="text-sm text-muted-foreground">
                More opaque for better readability while maintaining the glass aesthetic.
              </p>
            </div>
          </GlassCard>

          <GlassCard variant="colored" size="lg" interactive glow>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Colored Glass</h3>
              <p className="text-sm text-muted-foreground">
                Gradient background with enhanced visual appeal and glow effect.
              </p>
            </div>
          </GlassCard>

          <GlassCard variant="frosted" size="lg" interactive>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Frosted Glass</h3>
              <p className="text-sm text-muted-foreground">
                Enhanced blur effect for a more frosted appearance.
              </p>
            </div>
          </GlassCard>

          <GlassCard variant="default" size="lg" interactive className="ios-glass-float">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Floating Animation</h3>
              <p className="text-sm text-muted-foreground">
                Gentle floating animation for dynamic presentations.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Interactive Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard variant="default" size="xl" className="ios-glass-glow">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Interactive Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <GlassCard variant="subtle" size="sm" interactive className="rounded-full p-0">
                    <div className="p-3">✨</div>
                  </GlassCard>
                  <span>Hover Effects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GlassCard variant="colored" size="sm" interactive className="rounded-full p-0">
                    <div className="p-3">🎨</div>
                  </GlassCard>
                  <span>Color Variants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GlassCard variant="strong" size="sm" interactive className="rounded-full p-0">
                    <div className="p-3">⚡</div>
                  </GlassCard>
                  <span>Performance Optimized</span>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard variant="colored" size="xl" interactive glow>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">iOS 16 Features</h3>
              <ul className="space-y-2 text-sm">
                <li>• Backdrop blur with saturation</li>
                <li>• Dynamic transparency</li>
                <li>• Subtle border highlights</li>
                <li>• Inner shadow effects</li>
                <li>• Responsive design</li>
                <li>• Dark mode support</li>
              </ul>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default GlassDemo;

