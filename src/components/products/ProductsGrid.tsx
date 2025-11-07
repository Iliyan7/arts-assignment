'use client';

import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import { PRODUCTS_PER_PAGE } from '@/constants';
import { Pagination } from '@/components/ui';
import { ProductCard, ProductSort } from '@/components/products';

interface ProductsGridProps {
    page: number;
    searchQuery?: string;
    sortBy: string;
    products: Product[];
    total: number;
}

export function ProductsGrid({ page, searchQuery, sortBy, products, total }: ProductsGridProps) {
    const router = useRouter();
    const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

    const handlePageChange = (pageNum: number) => {
        const params = new URLSearchParams();
        params.set('page', pageNum.toString());
        if (searchQuery) {
            params.set('search', searchQuery);
        }
        if (sortBy) {
            params.set('sort', sortBy);
        }
        router.push(`/products?${params.toString()}`);
    };

    const handleSortChange = (newSort: string) => {
        const params = new URLSearchParams();
        params.set('page', '1'); // Reset to first page when sorting changes
        if (searchQuery) {
            params.set('search', searchQuery);
        }
        if (newSort) {
            params.set('sort', newSort);
        }
        router.push(`/products?${params.toString()}`);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                {searchQuery && (
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                        Found {total} {total === 1 ? 'product' : 'products'} for &quot;{searchQuery}&quot;
                    </div>
                )}
                {!searchQuery && <div />}
                <ProductSort value={sortBy} onChange={handleSortChange} />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <Pagination 
                    currentPage={page} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
}
