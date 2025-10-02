import React from 'react';
import { twMerge } from 'tailwind-merge';

// Define the component's props with TypeScript for type safety
// This uses generics to allow for flexible element types via the `as` prop
type TypographyProps<T extends React.ElementType> = {
  /** The text style variant to apply */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'list' | 'lead' | 'muted';
  /** The HTML element to render the component as */
  as?: T;
  /** Additional CSS classes to apply */
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

// A map of variant names to their corresponding Tailwind CSS classes
const variantStyles = {
  h1: 'scroll-m-20 mt-5 text-4xl font-semibold tracking-tight md:text-5xl lg:text-7xl',
  h2: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  // p: 'leading-7 [&:not(:first-child)]:mt-6',
  p: '',
  blockquote: 'mt-6 border-l-4 pl-6 italic',
  list: 'my-6 ml-6 list-disc [&>li]:mt-2',
  lead: 'text-xl text-slate-600 dark:text-slate-400',
  muted: 'text-sm text-slate-500 dark:text-slate-400',
};

// A map of variants to their default semantic HTML elements
const variantElements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  list: 'ul',
  lead: 'p',
  muted: 'p',
};

/**
 * A reusable typography component with responsive and pre-styled variants.
 */
export const Typography = <T extends React.ElementType = 'p'>({
  variant = 'p',
  as,
  className,
  children,
  ...props
}: TypographyProps<T>) => {
  // Determine the component to render. Prioritize `as` prop, then default mapping, fallback to 'p'.
  const Component = as || variantElements[variant] || 'p';

  return (
    <Component
      // Use `twMerge` to intelligently merge base styles with custom classes
      className={twMerge(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};