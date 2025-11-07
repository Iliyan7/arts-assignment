/**
 * Generic API types
 * Not tied to any specific business domain
 * Can be reused across all services (products, users, orders, auth, etc.)
 */

/**
 * Generic API error
 */
export interface ApiError {
    message: string;
    status: number;
}
