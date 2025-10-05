// src/components/FloatingMarquee.tsx
'use client';
import React, { useCallback, useState } from 'react';

type Direction = 'left' | 'right';
type SpeedPreset = 'slow' | 'normal' | 'fast';
type Speed = SpeedPreset | number;

interface FloatingMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;            // underlying content the band floats over
  band?: React.ReactNode;               // optional custom band markup
  angle?: number;                       // degrees (tilt the whole band)
  direction?: Direction;                // left or right
  speed?: Speed;                        // seconds (number) or presets
  pauseOnHover?: boolean;
  seamFixPx?: number;                   // small overlap to hide seam
  position?: 'top' | 'center' | 'bottom';
  height?: number | string;             // px number or CSS value
  zIndex?: number;
  pointerEvents?: 'none' | 'auto';
  keepTextUpright?: boolean;            // counter-rotate band children so text remains horizontal
  className?: string;
}

/**
 * FloatingMarquee - wrapper that floats a marquee band over any content.
 *
 * Usage:
 * <FloatingMarquee band={<YourBand/>} position="top" keepTextUpright>
 *   <div>some content</div>
 * </FloatingMarquee>
 */
export default function FloatingMarquee({
  children,
  band,
  angle = 5,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = false,
  seamFixPx = 1,
  position = 'top',
  height = 80,
  zIndex = 40,
  pointerEvents = 'none',
  keepTextUpright = false,
  className = '',
  ...rest
}: FloatingMarqueeProps) {
  // Helper: convert speed preset or number to seconds string
  const getDuration = (s: Speed) =>
    typeof s === 'number' ? `${s}s` : s === 'slow' ? '60s' : s === 'fast' ? '15s' : '30s';

  const duration = getDuration(speed);
  const animationName = direction === 'left' ? 'fm-marquee-left' : 'fm-marquee-right';
  const rotateDeg = direction === 'left' ? -angle : angle;

  const [isPaused, setIsPaused] = useState(false);
  const onEnter = useCallback(() => { if (pauseOnHover) setIsPaused(true); }, [pauseOnHover]);
  const onLeave = useCallback(() => { if (pauseOnHover) setIsPaused(false); }, [pauseOnHover]);

  // Default band if none provided
  const defaultBand = (
    <div style={{ padding: '0 2rem' }}>
      <span style={{ fontWeight: 900, fontSize: '2rem', opacity: 0.12, whiteSpace: 'nowrap' }}>
        ITSONTREND • CREATIVE • MARKETING • BRANDING •
      </span>
    </div>
  );

  // injected CSS (scoped classes to avoid global collisions)
  const css = `
    /* Keyframes use translate3d for GPU acceleration */
    @keyframes fm-marquee-left {
      0% { transform: translate3d(0,0,0); }
      100% { transform: translate3d(-50%,0,0); }
    }
    @keyframes fm-marquee-right {
      0% { transform: translate3d(-50%,0,0); }
      100% { transform: translate3d(0,0,0); }
    }

    /* Container for wrapper */
    .fm-root { position: relative; width: 100%; }

    /* Band overlay (absolute) */
    .fm-band {
      position: absolute;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      pointer-events: var(--fm-pointer-events, none);
      z-index: var(--fm-z, 40);
      transform-origin: center;
      overflow: visible; /* allow tilted band to overflow container edges visually */
    }

    /* Track that scrolls */
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
      /* width: max-content ensures track width equals sum of segments */
      width: max-content;
    }

    .fm-seg {
      display: inline-flex;
      align-items: center;
      flex: 0 0 auto; /* do not shrink or grow */
      margin-right: calc(var(--fm-seam-fix, 1) * -1px); /* small negative to hide seam */
      -webkit-font-smoothing: antialiased;
    }

    /* Reduced motion preference */
    @media (prefers-reduced-motion: reduce) {
      .fm-track { animation: none !important; transform: translate3d(0,0,0) !important; }
    }
  `;

  // Band positioning styles
  const bandPositionStyle: React.CSSProperties = {
    top: position === 'top' ? 0 : position === 'center' ? '50%' : undefined,
    bottom: position === 'bottom' ? 0 : undefined,
    transform: position === 'center' ? 'translateY(-50%)' : undefined,
    height: typeof height === 'number' ? `${height}px` : height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: pointerEvents,
  };

  // combine className safely
  const rootClass = `fm-root ${className}`.trim();

  // inner counter-rotation for keeping text upright if requested
  const innerRotateStyle: React.CSSProperties | undefined = keepTextUpright
    ? { transform: `rotate(${-rotateDeg}deg)` }
    : undefined;

  return (
    <>
      <style>{css}</style>

      <div className={rootClass} {...rest}>
        {/* underlying content */}
        <div>
          {children}
        </div>

        {/* band overlay */}
        <div
          className="fm-band"
          style={{
            ...bandPositionStyle,
            // combine translateY if center + rotate band
            transform: (() => {
              const rotatePart = `rotate(${rotateDeg}deg)`;
              if (position === 'center') return `translateY(-50%) ${rotatePart}`;
              return rotatePart;
            })(),
            // CSS custom props
            // @ts-ignore
            ['--fm-z']: zIndex,
            // @ts-ignore
            ['--fm-pointer-events']: pointerEvents,
          }}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
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
              ['--fm-seam-fix']: seamFixPx,
            }}
            aria-hidden={false}
          >
            {/* two identical segments */}
            <div className="fm-seg" style={innerRotateStyle}>
              {band ?? defaultBand}
            </div>
            <div className="fm-seg" aria-hidden style={innerRotateStyle}>
              {band ?? defaultBand}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
