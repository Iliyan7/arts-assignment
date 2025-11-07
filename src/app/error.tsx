'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { ROUTES } from '@/constants';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Home page error:', error);
    }, [error]);

    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center px-4">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                Something went wrong
            </h2>
            <p className="mb-6 text-center text-slate-600 dark:text-slate-400">
                {error.message || 'Unable to load the page'}
            </p>
            <div className="flex gap-3">
                <Button onClick={reset}>Try again</Button>
                <Link href={ROUTES.PRODUCTS}>
                    <Button variant="outline">Browse Products</Button>
                </Link>
            </div>
        </div>
    );
}
