// src/components/VerticalOutlineText.tsx


import { twMerge } from 'tailwind-merge';

interface VerticalOutlineTextProps {
  /** The text you want to display */
  children: React.ReactNode;
  
  /** Additional Tailwind classes for styling (e.g., font-size, position, color) */
  className?: string;
  
  /** The direction the text should read */
  direction?: 'up' | 'down';
}

/**
 * A component that displays vertical, outlined text.
 * Must be placed inside a parent with 'position: relative'.
 */
export const VerticalOutlineText = ({
  children,
  className,
  direction = 'up',
}: VerticalOutlineTextProps) => {
  
  // Apply the correct rotation based on the direction prop
  const rotationClass = direction === 'up' ? '-rotate-90' : 'rotate-90';

  return (
    <div
      className={twMerge(
        // --- Core Styles ---
        'absolute whitespace-nowrap', // Makes it a single line and positions it
        'text-transparent',          // Makes the inner fill of the text transparent
        rotationClass,               // Applies the vertical rotation
        
        // --- Default Outline Styles (can be overridden by className) ---
        '[-webkit-text-stroke-width:1px]', // The width of the outline
        '[-webkit-text-stroke-color:white]', // The color of the outline (defaults to white)

        // --- User-provided Classes ---
        className 
      )}
    >
      {children}
    </div>
  );
};