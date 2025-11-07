import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartStore } from '@/types';

/**
 * Cart selectors for computed values
 * Use these with useCartStore selector
 */
export const cartSelectors = {
    totalItems: (state: CartStore) =>
        state.items.reduce((sum, item) => sum + item.quantity, 0),
    
    totalPrice: (state: CartStore) =>
        state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    
    itemQuantity: (state: CartStore, id: number) => {
        const item = state.items.find((item) => item.id === id);
        return item ? item.quantity : 0;
    },
    
    isInCart: (state: CartStore, id: number) =>
        state.items.some((item) => item.id === id),
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            // Initial state
            items: [],

            // Actions
            addItem: (item) => {
                const { items } = get();
                const existingItem = items.find(
                    (cartItem) => cartItem.id === item.id
                );

                let newItems: CartItem[];

                if (existingItem) {
                    // Increase quantity if item already exists
                    newItems = items.map((cartItem) =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    );
                } else {
                    // Add new item with quantity 1
                    newItems = [...items, { ...item, quantity: 1 }];
                }

                set({ items: newItems });
            },

            removeItem: (id) => {
                const { items } = get();
                const newItems = items.filter((item) => item.id !== id);
                set({ items: newItems });
            },

            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(id);
                    return;
                }

                const { items } = get();
                const newItems = items.map((item) =>
                    item.id === id ? { ...item, quantity } : item
                );
                set({ items: newItems });
            },

            clearCart: () => {
                set({ items: [] });
            },
        }),
        {
            name: 'cart-storage', // localStorage key
            skipHydration: true, // Prevent hydration mismatches
        }
    )
);
