import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { ROUTES } from '@/constants';
import { Product } from '@/types';
import { formatPrice, calculateDiscountedPrice } from '@/utils';
import { Card, CardContent, CardFooter, Badge } from '@/components/ui';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const discountedPrice = calculateDiscountedPrice(
        product.price,
        product.discountPercentage
    );

    return (
        <Link href={ROUTES.PRODUCT_DETAIL(product.id)}>
            <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {product.discountPercentage > 0 && (
                        <Badge
                            variant="destructive"
                            className="absolute right-2 top-2"
                        >
                            -{product.discountPercentage}%
                        </Badge>
                    )}
                </div>
                <CardContent className="p-4">
                    <h3 className="line-clamp-1 font-semibold text-slate-900 dark:text-slate-100">
                        {product.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                        {product.description}
                    </p>
                    <div className="mt-2 flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                            {product.rating.toFixed(1)}
                        </span>
                        <span className="text-sm text-slate-500">
                            ({product.reviews?.length || 0})
                        </span>
                    </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4 pt-0">
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            {formatPrice(discountedPrice)}
                        </span>
                        {product.discountPercentage > 0 && (
                            <span className="text-sm text-slate-500 line-through">
                                {formatPrice(product.price)}
                            </span>
                        )}
                    </div>
                    <Badge 
                        variant={product.stock > 0 ? 'secondary' : 'destructive'} 
                        className="text-xs"
                    >
                        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Badge>
                </CardFooter>
            </Card>
        </Link>
    );
}
