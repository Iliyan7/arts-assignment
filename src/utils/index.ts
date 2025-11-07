import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names and merges Tailwind classes intelligently
 * Usage: cn('bg-red-500', 'bg-blue-500') => 'bg-blue-500'
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Formats price with currency
 */
export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
}

/**
 * Calculates discounted price
 */
export function calculateDiscountedPrice(
    price: number,
    discountPercentage: number
): number {
    return price - (price * discountPercentage) / 100;
}

/**
 * Formats rating to 1 decimal place
 */
export function formatRating(rating: number): string {
    return rating.toFixed(1);
}

/**
 * Truncates text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}
