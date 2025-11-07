'use client';

import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore, cartSelectors } from '@/stores/cart';
import { Button, Card, CardContent } from '@/components/ui';
import { formatPrice } from '@/utils';
import { ROUTES } from '@/constants';

export function OrderSummary() {
    const totalItems = useCartStore(cartSelectors.totalItems);
    const totalPrice = useCartStore(cartSelectors.totalPrice);

    return (
        <Card className="sticky top-20">
            <CardContent className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Order Summary
                </h2>

                <div className="space-y-3 border-b border-slate-200 pb-4 dark:border-slate-700">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                            Subtotal ({totalItems} items)
                        </span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">
                            {formatPrice(totalPrice)}
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                            Shipping
                        </span>
                        <span className="font-medium text-green-600 dark:text-green-400">
                            FREE
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                            Tax (estimated)
                        </span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">
                            {formatPrice(totalPrice * 0.1)}
                        </span>
                    </div>
                </div>

                <div className="mt-4 flex justify-between">
                    <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        Total
                    </span>
                    <span className="text-lg font-bold text-teal-700 dark:text-teal-400">
                        {formatPrice(totalPrice * 1.1)}
                    </span>
                </div>

                <Button className="mt-6 w-full" size="lg">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Link href={ROUTES.PRODUCTS}>
                    <Button variant="outline" className="mt-3 w-full">
                        Continue Shopping
                    </Button>
                </Link>

                <div className="mt-6 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                    <p className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        Free shipping on all orders
                    </p>
                    <p>✓ Secure checkout</p>
                    <p>✓ 30-day return policy</p>
                </div>
            </CardContent>
        </Card>
    );
}
