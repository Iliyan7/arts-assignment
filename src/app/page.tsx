import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, ShoppingBag, Shield } from 'lucide-react';
import { ROUTES } from '@/constants';
import { getProducts } from '@/services/products.service';
import { Button } from '@/components/ui';
import { ProductCard } from '@/components/products';

function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-teal-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                        Discover Quality Products
                    </h1>
                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                        Experience modern e-commerce with our curated
                        collection. Built with Next.js for lightning-fast
                        performance.
                    </p>
                    <div className="mt-6">
                        <Link href={ROUTES.PRODUCTS}>
                            <Button size="lg">
                                Browse Products
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeaturesSection() {
    return (
        <section className="border-b border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900">
                            <Zap className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-100">
                            Lightning Fast
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            Built with Next.js 16 and React 19 for optimal
                            performance
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900">
                            <ShoppingBag className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-100">
                            Smart Cart
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            Persistent shopping cart with Zustand state
                            management
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900">
                            <Shield className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-100">
                            Type Safe
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            Full TypeScript coverage for reliable code
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

async function FeaturedProducts() {
    const { products } = await getProducts({ limit: 4, skip: 0 });

    return (
        <section className="bg-slate-50 py-8 dark:bg-slate-900 md:py-12">
            <div className="container mx-auto px-4">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                            Featured Products
                        </h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">
                            Check out our most popular items
                        </p>
                    </div>
                    <Link href={ROUTES.PRODUCTS}>
                        <Button variant="outline">View All</Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeaturedProductsSkeleton() {
    return (
        <section className="bg-slate-50 py-8 dark:bg-slate-900 md:py-12">
            <div className="container mx-auto px-4">
                <div className="mb-6">
                    <div className="h-9 w-64 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                    <div className="mt-2 h-6 w-48 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="h-96 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="bg-teal-700 py-8 dark:bg-teal-800 md:py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                        Ready to Start Shopping?
                    </h2>
                    <p className="mt-3 text-base text-teal-50">
                        Browse our full catalog and add items to your cart
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <Link href={ROUTES.PRODUCTS}>
                            <Button size="lg">
                                Browse Products
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function HomePage() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <FeaturesSection />
            <Suspense fallback={<FeaturedProductsSkeleton />}>
                <FeaturedProducts />
            </Suspense>
            <CTASection />
        </div>
    );
}
