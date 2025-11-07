/**
 * Generic API client with error handling
 */

export class APIError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.name = 'APIError';
        this.status = status;
    }
}

/**
 * Generic fetch wrapper with error handling
 * Can be reused across all services (products, auth, users, etc.)
 */
export async function apiRequest<T>(
    url: string,
    options?: RequestInit
): Promise<T> {
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
        });

        if (!response.ok) {
            throw new APIError(
                `API request failed: ${response.statusText}`,
                response.status
            );
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof APIError) {
            throw error;
        }
        throw new APIError('Network error occurred', 0);
    }
}
