// src/components/AngledMarquee.tsx

import React from 'react';
import { twMerge } from 'tailwind-merge';

// Define the component's props
interface AngledMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  angle?: number;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  repeat?: number;
}

// Keyframes are defined directly in a style tag within the component
const marqueeKeyframes = `
  @keyframes marquee-left {
    from { transform: translateX(0%); }
    to { transform: translateX(-100%); }
  }
  @keyframes marquee-right {
    from { transform: translateX(-100%); }
    to { transform: translateX(0%); }
  }
`;

export const AngledMarquee = ({
  children,
  className,
  angle = 5,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = false,
  repeat = 4,
  ...props
}: AngledMarqueeProps) => {
  const wrapperClasses = twMerge(
    'relative w-full flex overflow-hidden group',
    className
  );
  
  const getDuration = () => {
    switch (speed) {
      case 'slow': return '60s';
      case 'fast': return '15s';
      case 'normal':
      default: return '30s';
    }
  };

  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';
  const animationDuration = getDuration();

  return (
    <>
      {/* This style tag injects the keyframes into the document's head */}
      <style>{marqueeKeyframes}</style>
      
      <div
        className={wrapperClasses}
        style={{
          transform: `rotate(${direction === 'left' ? -angle : angle}deg)`,
        }}
        {...props}
      >
        {/* The single animating container */}
        <div
          className={twMerge(
            'flex',
            pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
          )}
          style={{
            // The animation is now applied directly via inline styles
            animationName: animationName,
            animationDuration: animationDuration,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        >
          {/* Duplicated content for a seamless loop */}
          {Array.from({ length: repeat }).map((_, i) => (
            <div key={i} className="flex-shrink-0">
              {children}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};