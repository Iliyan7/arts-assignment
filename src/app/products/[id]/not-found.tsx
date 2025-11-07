import Link from 'next/link';
import { PackageX } from 'lucide-react';
import { Button } from '@/components/ui';
import { ROUTES } from '@/constants';

export default function NotFound() {
    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center px-4">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <PackageX className="h-8 w-8 text-slate-400" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                Product Not Found
            </h2>
            <p className="mb-6 text-center text-slate-600 dark:text-slate-400">
                The product you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link href={ROUTES.PRODUCTS}>
                <Button>Browse All Products</Button>
            </Link>
        </div>
    );
}
