import { CartContent } from '@/components/cart';

export default function CartPage() {
    return (
        <div className="bg-slate-50 py-8 dark:bg-slate-900 md:py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
                        Shopping Cart
                    </h1>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Review your items before checkout
                    </p>
                </div>

                <CartContent />
            </div>
        </div>
    );
}
