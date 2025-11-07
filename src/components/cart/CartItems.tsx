'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore, cartSelectors } from '@/stores/cart';
import { Button, Card, CardContent } from '@/components/ui';
import { formatPrice } from '@/utils';
import { ROUTES } from '@/constants';

export function CartItems() {
    const { items, removeItem, updateQuantity, clearCart } = useCartStore();
    const totalItems = useCartStore(cartSelectors.totalItems);

    return (
        <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} in cart
                </p>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear Cart
                </Button>
            </div>

            <div className="space-y-4">
                {items.map((item) => (
                    <Card key={item.id}>
                        <CardContent className="p-4">
                            <div className="flex gap-4">
                                {/* Product Image */}
                                <Link
                                    href={ROUTES.PRODUCT_DETAIL(item.id)}
                                    className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800"
                                >
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </Link>

                                {/* Product Details */}
                                <div className="flex flex-1 flex-col justify-between">
                                    <div>
                                        <Link
                                            href={ROUTES.PRODUCT_DETAIL(item.id)}
                                            className="font-medium text-slate-900 hover:text-teal-700 dark:text-slate-100 dark:hover:text-teal-400"
                                        >
                                            {item.title}
                                        </Link>
                                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                            {formatPrice(item.price)} each
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        Math.max(1, item.quantity - 1)
                                                    )
                                                }
                                                disabled={item.quantity <= 1}
                                                className="h-8 w-8 p-0"
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span className="w-12 text-center font-medium text-slate-900 dark:text-slate-100">
                                                {item.quantity}
                                            </span>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() =>
                                                    updateQuantity(item.id, item.quantity + 1)
                                                }
                                                disabled={item.quantity >= item.stock}
                                                className="h-8 w-8 p-0"
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        {/* Subtotal & Remove */}
                                        <div className="flex items-center gap-4">
                                            <p className="font-semibold text-slate-900 dark:text-slate-100">
                                                {formatPrice(item.price * item.quantity)}
                                            </p>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
