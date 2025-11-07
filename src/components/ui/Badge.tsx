import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'success' | 'destructive' | 'outline';
}

const variantStyles = {
    default: 'bg-teal-700 text-white hover:bg-teal-800',
    secondary:
        'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100',
    success: 'bg-green-600 text-white hover:bg-green-700',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-slate-300 text-slate-900 dark:border-slate-700 dark:text-slate-100',
};

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:focus:ring-slate-300',
                    variantStyles[variant],
                    className
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = 'Badge';

export { Badge };
