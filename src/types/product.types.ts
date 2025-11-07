/**
 * Product domain types
 * Represents product data from API and internal product models
 */

/**
 * Product review from API
 */
export interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

/**
 * Complete product model from DummyJSON API
 */
export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
}

/**
 * Products API response from DummyJSON
 */
export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
