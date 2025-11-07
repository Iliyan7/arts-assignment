import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Star, ArrowLeft } from 'lucide-react';
import { ROUTES, IMAGE_PLACEHOLDER } from '@/constants';
import { getProduct } from '@/services/products.service';
import { formatPrice, calculateDiscountedPrice } from '@/utils';
import { AddToCartButton, ReviewsSection } from '@/components/product-detail';
import { Badge, Card, CardContent, ImageCarousel } from '@/components/ui';

interface ProductDetailsPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
    const { id } = await params;
    const productId = parseInt(id);

    if (isNaN(productId)) {
        notFound();
    }

    const product = await getProduct(productId);

    if (!product) {
        notFound();
    }

    const discountedPrice = calculateDiscountedPrice(
        product.price,
        product.discountPercentage
    );

    return (
        <div className="bg-slate-50 py-8 dark:bg-slate-900 md:py-12">
            <div className="container mx-auto px-4">
                <Link
                    href={ROUTES.PRODUCTS}
                    className="mb-6 inline-flex items-center text-sm text-slate-600 hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                </Link>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="relative">
                        <ImageCarousel
                            images={product.images.length > 0 ? product.images : [IMAGE_PLACEHOLDER]}
                            alt={product.title}
                        />
                        {product.discountPercentage > 0 && (
                            <Badge
                                variant="destructive"
                                className="absolute right-4 top-4 text-base"
                            >
                                -{product.discountPercentage}%
                            </Badge>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div>
                            <Badge variant="secondary" className="mb-2">
                                {product.category}
                            </Badge>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
                                {product.title}
                            </h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                                    {product.rating.toFixed(1)}
                                </span>
                            </div>
                            <span className="text-slate-600 dark:text-slate-400">
                                ({product.reviews?.length || 0} reviews)
                            </span>
                            <Badge
                                variant={product.stock > 0 ? 'success' : 'destructive'}
                            >
                                {product.stock > 0
                                    ? `${product.stock} in stock`
                                    : 'Out of Stock'}
                            </Badge>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                                {formatPrice(discountedPrice)}
                            </span>
                            {product.discountPercentage > 0 && (
                                <span className="text-xl text-slate-500 line-through">
                                    {formatPrice(product.price)}
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                                    Description
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {product.description}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Product Details */}
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                                    Product Details
                                </h2>
                                <dl className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <dt className="text-slate-600 dark:text-slate-400">
                                            Brand
                                        </dt>
                                        <dd className="font-medium text-slate-900 dark:text-slate-100">
                                            {product.brand || 'N/A'}
                                        </dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-slate-600 dark:text-slate-400">
                                            SKU
                                        </dt>
                                        <dd className="font-medium text-slate-900 dark:text-slate-100">
                                            {product.sku}
                                        </dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-slate-600 dark:text-slate-400">
                                            Weight
                                        </dt>
                                        <dd className="font-medium text-slate-900 dark:text-slate-100">
                                            {product.weight}g
                                        </dd>
                                    </div>
                                    {product.dimensions && (
                                        <div className="flex justify-between">
                                            <dt className="text-slate-600 dark:text-slate-400">
                                                Dimensions
                                            </dt>
                                            <dd className="font-medium text-slate-900 dark:text-slate-100">
                                                {product.dimensions.width} ×{' '}
                                                {product.dimensions.height} ×{' '}
                                                {product.dimensions.depth} cm
                                            </dd>
                                        </div>
                                    )}
                                    <div className="flex justify-between">
                                        <dt className="text-slate-600 dark:text-slate-400">
                                            Warranty
                                        </dt>
                                        <dd className="font-medium text-slate-900 dark:text-slate-100">
                                            {product.warrantyInformation}
                                        </dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-slate-600 dark:text-slate-400">
                                            Shipping
                                        </dt>
                                        <dd className="font-medium text-slate-900 dark:text-slate-100">
                                            {product.shippingInformation}
                                        </dd>
                                    </div>
                                </dl>
                            </CardContent>
                        </Card>

                        {/* Add to Cart */}
                        <AddToCartButton product={product} />
                    </div>
                </div>

                <ReviewsSection reviews={product.reviews} />
            </div>
        </div>
    );
}
