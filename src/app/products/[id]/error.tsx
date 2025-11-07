'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Error:', error);
    }, [error]);

    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center px-4">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                Something went wrong!
            </h2>
            <p className="mb-6 text-center text-slate-600 dark:text-slate-400">
                {error.message || 'An unexpected error occurred'}
            </p>
            <Button onClick={reset}>Try again</Button>
        </div>
    );
}
