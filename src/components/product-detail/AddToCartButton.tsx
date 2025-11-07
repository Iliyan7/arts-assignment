'use client';

import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui';
import { useCartStore, cartSelectors } from '@/stores/cart';
import { Product } from '@/types/index';

interface AddToCartButtonProps {
    product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const [added, setAdded] = useState(false);
    const addItem = useCartStore((state) => state.addItem);
    const inCart = useCartStore((state) => cartSelectors.isInCart(state, product.id));

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            stock: product.stock,
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <Button
            size="lg"
            className="w-full"
            onClick={handleAddToCart}
            disabled={product.stock === 0 || added}
        >
            {added ? (
                <>
                    <Check className="mr-2 h-5 w-5" />
                    Added to Cart
                </>
            ) : (
                <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {inCart ? 'Add Another' : 'Add to Cart'}
                </>
            )}
        </Button>
    );
}
