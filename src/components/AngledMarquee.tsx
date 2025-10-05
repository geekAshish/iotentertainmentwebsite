// src/components/AngledMarquee.tsx
import React, { useState, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

interface AngledMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  angle?: number;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast' | number; // number = seconds
  pauseOnHover?: boolean;
  /** tiny overlap in px to hide subpixel seam (defaults to 1) */
  seamFixPx?: number;
}

export const AngledMarquee = ({
  children,
  className,
  angle = 5,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = false,
  seamFixPx = 1,
  ...props
}: AngledMarqueeProps) => {
  const wrapperClasses = twMerge('relative w-full overflow-hidden', className);

  const getDuration = () => {
    if (typeof speed === 'number') return `${speed}s`;
    switch (speed) {
      case 'slow':
        return '60s';
      case 'fast':
        return '15s';
      case 'normal':
      default:
        return '30s';
    }
  };

  const duration = getDuration();
  const animationName = direction === 'left' ? 'fm-marquee-left' : 'fm-marquee-right';
  const rotateDeg = direction === 'left' ? -angle : angle;

  const [isPaused, setIsPaused] = useState(false);
  const onEnter = useCallback(() => { if (pauseOnHover) setIsPaused(true); }, [pauseOnHover]);
  const onLeave = useCallback(() => { if (pauseOnHover) setIsPaused(false); }, [pauseOnHover]);

  const injected = `
    /* Keyframes: translate by 50% because we duplicate content twice */
    @keyframes fm-marquee-left {
      0%   { transform: translate3d(0,0,0); }
      100% { transform: translate3d(-50%,0,0); }
    }
    @keyframes fm-marquee-right {
      0%   { transform: translate3d(-50%,0,0); }
      100% { transform: translate3d(0,0,0); }
    }

    .fm-track {
      display: flex;
      align-items: center;
      white-space: nowrap;
      flex-wrap: nowrap;
      will-change: transform;
      transform-style: preserve-3d;
      backface-visibility: hidden;
      margin: 0;
      padding: 0;
      width: max-content; /* ensure track width equals content */
    }

    .fm-seg {
      display: inline-flex;
      align-items: center;
      flex: 0 0 auto; /* don't shrink */
      margin-right: calc(var(--fm-seam-fix, 1) * -1px);
      -webkit-font-smoothing: antialiased;
    }

    @media (prefers-reduced-motion: reduce) {
      .fm-track { animation: none !important; transform: translate3d(0,0,0) !important; }
    }
  `;

  return (
    <>
      <style>{injected}</style>

      <div
        className={wrapperClasses}
        style={{ transform: `rotate(${rotateDeg}deg)` }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        {...props}
      >
        <div
          className="fm-track"
          style={{
            animationName,
            animationDuration: duration,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
            // seam fix variable
            // @ts-ignore
            ['--fm-seam-fix' as any]: seamFixPx,
          }}
          aria-hidden={false}
        >
          {/* exactly two segments for seamless -50% translate */}
          <div className="fm-seg text-white bg-[#212121]">{children}</div>
          <div className="fm-seg text-white bg-[#212121]" aria-hidden>{children}</div>
        </div>
      </div>
    </>
  );
};

export default AngledMarquee;
