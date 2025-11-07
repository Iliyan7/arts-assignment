'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/stores/cart';

/**
 * Hydrates the cart store from localStorage on client mount
 * Prevents hydration mismatches between server and client
 */
export function CartStoreHydration() {
    useEffect(() => {
        useCartStore.persist.rehydrate();
    }, []);

    return null;
}
