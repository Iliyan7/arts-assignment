// API Configuration
export const API_CONFIG = {
    BASE_URL: 'https://dummyjson.com',
    DEFAULT_LIMIT: 30,
    MAX_LIMIT: 100,
} as const;

// App Configuration
export const APP_CONFIG = {
    NAME:  'Arts E-commerce | Modern Shopping Experience',
    DESCRIPTION: 'Modern shopping experience with advanced frontend practices',
    VERSION: '1.0.0',
} as const;

// Routes
export const ROUTES = {
    HOME: '/',
    PRODUCTS: '/products',
    PRODUCT_DETAIL: (id: number | string) => `/products/${id}`,
    CART: '/cart',
    ABOUT: '/about',
} as const;


export const PRODUCTS_PER_PAGE = 12;
export const IMAGE_PLACEHOLDER = '/placeholder-product.jpg';
