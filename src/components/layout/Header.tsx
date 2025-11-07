'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui';
import { useCartStore, cartSelectors } from '@/stores/cart';
import { ROUTES } from '@/constants';
import { SearchBar } from './SearchBar';

export function Header() {
    const totalItems = useCartStore(cartSelectors.totalItems);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === ROUTES.HOME) {
            return pathname === ROUTES.HOME;
        }
        return pathname.startsWith(path);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/95">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link
                    href={ROUTES.HOME}
                    className="flex items-center space-x-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                >
                    <span>Arts</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-8">
                    <Link
                        href={ROUTES.HOME}
                        className={`relative text-sm font-medium transition-colors ${
                            isActive(ROUTES.HOME)
                                ? 'text-teal-700 dark:text-teal-400'
                                : 'text-slate-700 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-400'
                        }`}
                    >
                        Home
                        {isActive(ROUTES.HOME) && (
                            <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-teal-700 dark:bg-teal-400" />
                        )}
                    </Link>
                    <Link
                        href={ROUTES.PRODUCTS}
                        className={`relative text-sm font-medium transition-colors ${
                            isActive(ROUTES.PRODUCTS)
                                ? 'text-teal-700 dark:text-teal-400'
                                : 'text-slate-700 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-400'
                        }`}
                    >
                        Products
                        {isActive('/products') && (
                            <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-teal-700 dark:bg-teal-400" />
                        )}
                    </Link>
                    <Link
                        href={ROUTES.ABOUT}
                        className={`relative text-sm font-medium transition-colors ${
                            isActive(ROUTES.ABOUT)
                                ? 'text-teal-700 dark:text-teal-400'
                                : 'text-slate-700 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-400'
                        }`}
                    >
                        About
                        {isActive(ROUTES.ABOUT) && (
                            <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-teal-700 dark:bg-teal-400" />
                        )}
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <SearchBar />

                    <Link
                        href={ROUTES.CART}
                        className="relative flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                        aria-label={`Shopping cart with ${totalItems} items`}
                    >
                        <ShoppingCart className="h-5 w-5" />
                        {totalItems > 0 && (
                            <Badge
                                key={totalItems}
                                variant="default"
                                className="cart-badge-animate absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs"
                            >
                                {totalItems > 99 ? '99+' : totalItems}
                            </Badge>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}
