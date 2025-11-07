/**
 * Cart domain types
 * Shopping cart items and state management
 */

/**
 * Cart item model
 * Lightweight representation of product in cart
 */
export interface CartItem {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
    stock: number;
}

/**
 * Cart state
 * The data stored in the cart
 */
export interface CartState {
    items: CartItem[];
}

/**
 * Cart actions
 * Methods to mutate the cart state
 */
export interface CartActions {
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

/**
 * Cart store
 * Combined state and actions
 */
export type CartStore = CartState & CartActions;
