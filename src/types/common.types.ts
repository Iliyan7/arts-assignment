/**
 * Common/shared types used across the entire application
 * These types are domain-agnostic and can be used anywhere
 */

/**
 * Sort order for queries
 */
export type SortOrder = 'asc' | 'desc';

/**
 * Query options for fetching paginated data
 * Can be used for products, orders, users, etc.
 */
export interface QueryOptions {
    limit?: number;
    skip?: number;
    search?: string;
    sortBy?: string;
    order?: SortOrder;
}
