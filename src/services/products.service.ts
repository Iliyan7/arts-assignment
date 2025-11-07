import { Product, ProductsResponse, QueryOptions, SortOrder } from '@/types';
import { apiRequest, APIError } from './api-client';
import { API_CONFIG } from '@/constants';

/**
 * Add sorting parameters to URLSearchParams
 * Supports both "field-order" format (e.g., "price-asc") and separate fields
 */
function addSortParams(
    params: URLSearchParams,
    sortBy?: string,
    order?: SortOrder
): void {
    if (!sortBy) return;

    if (sortBy.includes('-')) {
        const [field, sortOrder] = sortBy.split('-');
        params.set('sortBy', field);
        params.set('order', sortOrder);
    } else if (order) {
        params.set('sortBy', sortBy);
        params.set('order', order);
    }
}

/**
 * Fetch products with optional pagination, search, and sorting
 * Combines getProducts and searchProducts into one function
 */
export async function getProducts(
    options: QueryOptions = {}
): Promise<ProductsResponse> {
    const { limit = API_CONFIG.DEFAULT_LIMIT, skip = 0, search, sortBy, order } = options;

    // Build query parameters
    const params = new URLSearchParams({
        limit: limit.toString(),
        skip: skip.toString(),
    });

    addSortParams(params, sortBy, order);

    // Use search endpoint if query provided, otherwise get all products
    const endpoint = search
        ? `/products/search?q=${encodeURIComponent(search)}&${params.toString()}`
        : `/products?${params.toString()}`;

    return apiRequest<ProductsResponse>(`${API_CONFIG.BASE_URL}${endpoint}`);
}

/**
 * Fetch single product by ID
 * Returns null for 404 errors, throws for other errors
 */
export async function getProduct(id: number): Promise<Product | null> {
    try {
        return await apiRequest<Product>(`${API_CONFIG.BASE_URL}/products/${id}`);
    } catch (error) {
        if (error instanceof APIError && error.status === 404) {
            return null;
        }
        throw error;
    }
}

/**
 * Get products by category
 */
export async function getProductsByCategory(
    category: string,
    options: { limit?: number; skip?: number } = {}
): Promise<ProductsResponse> {
    const { limit = API_CONFIG.DEFAULT_LIMIT, skip = 0 } = options;
    return apiRequest<ProductsResponse>(
        `${API_CONFIG.BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`
    );
}

/**
 * Get all product categories
 */
export async function getCategories(): Promise<string[]> {
    return apiRequest<string[]>(`${API_CONFIG.BASE_URL}/products/categories`);
}
