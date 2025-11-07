import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950',
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('flex flex-col space-y-1.5 p-6', className)}
                {...props}
            />
        );
    }
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, ...props }, ref) => {
        return (
            <h3
                ref={ref}
                className={cn(
                    'text-2xl font-semibold leading-none tracking-tight',
                    className
                )}
                {...props}
            />
        );
    }
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps
    extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className={cn('text-sm text-slate-500 dark:text-slate-400', className)}
                {...props}
            />
        );
    }
);

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, ...props }, ref) => {
        return (
            <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
        );
    }
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('flex items-center p-6 pt-0', className)}
                {...props}
            />
        );
    }
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
