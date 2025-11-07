'use client';

import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { ROUTES } from '@/constants';
import { useCartStore } from '@/stores/cart';
import { Button } from '@/components/ui';
import { CartItems } from './CartItems';
import { OrderSummary } from './OrderSummary';

function EmptyCart() {
    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <ShoppingBag className="h-12 w-12 text-slate-400" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                Your cart is empty
            </h2>
            <p className="mb-6 text-slate-600 dark:text-slate-400">
                Add some products to get started
            </p>
            <Link href={ROUTES.PRODUCTS}>
                <Button>
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
}

export function CartContent() {
    const items = useCartStore((state) => state.items);

    if (items.length === 0) {
        return <EmptyCart />;
    }

    return (
        <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <CartItems />
            </div>
            <div className="lg:col-span-1">
                <OrderSummary />
            </div>
        </div>
    );
}
