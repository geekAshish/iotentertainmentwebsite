import * as React from 'react';
import { twMerge } from 'tailwind-merge';

// Define the component's props with TypeScript for type safety
// This allows for a flexible `as` prop to change the rendered HTML element
type ContainerProps<T extends React.ElementType> = {
  /** The HTML element to render the component as */
  as?: T;
  /** Additional CSS classes to apply */
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

/**
 * A responsive container component that centers content and sets a max-width.
 */
export const Container = <T extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: ContainerProps<T>) => {
  const Component = as || 'div';

  return (
    <Component
      // Use `twMerge` to intelligently merge base styles with custom classes
      className={twMerge(
        // Sets a max-width, centers the container, and applies responsive padding
        'w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};