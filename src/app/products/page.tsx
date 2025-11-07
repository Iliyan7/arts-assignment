import { ProductsGrid } from '@/components/products';
import { getProducts } from '@/services/products.service';
import { PRODUCTS_PER_PAGE } from '@/constants';

interface ProductsPageProps {
    searchParams: Promise<{ page?: string; search?: string; sort?: string }>;
}

function NoProductsFound({ searchQuery }: { searchQuery?: string }) {
    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
            <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                No products found
            </p>
            {searchQuery && (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    No results for &quot;{searchQuery}&quot;. Try a different search term.
                </p>
            )}
        </div>
    );
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
    const params = await searchParams;
    const page = Number(params.page) || 1;
    const searchQuery = params.search;
    const sortBy = params.sort || '';
    const skip = (page - 1) * PRODUCTS_PER_PAGE;

    const { products, total } = await getProducts({
        limit: PRODUCTS_PER_PAGE,
        skip,
        search: searchQuery,
        sortBy,
    });

    return (
        <div className="bg-slate-50 py-8 dark:bg-slate-900 md:py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
                        {searchQuery ? 'Search Results' : 'All Products'}
                    </h1>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        {searchQuery
                            ? `Showing results for "${searchQuery}"`
                            : 'Browse our complete collection'}
                    </p>
                </div>

                {products.length === 0 ? (
                    <NoProductsFound searchQuery={searchQuery} />
                ) : (
                    <ProductsGrid 
                        page={page} 
                        searchQuery={searchQuery}
                        sortBy={sortBy}
                        products={products}
                        total={total}
                    />
                )}
            </div>
        </div>
    );
}
