import { Package, Truck, Shield, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

function HeroSection() {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100">
                About Arts
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
                Your trusted destination for quality products and exceptional shopping
                experience. We bring you the best selection of items with care and
                dedication.
            </p>
        </div>
    );
}

function ValuesSection() {
    const values = [
        {
            icon: Package,
            title: 'Quality Products',
            description: 'Carefully curated selection of high-quality items that meet our standards.',
        },
        {
            icon: Truck,
            title: 'Fast Shipping',
            description: 'Quick and reliable delivery to get your products to you as soon as possible.',
        },
        {
            icon: Shield,
            title: 'Secure Shopping',
            description: 'Your data and transactions are protected with industry-standard security.',
        },
        {
            icon: Heart,
            title: 'Customer Care',
            description: 'Dedicated support team ready to help you with any questions or concerns.',
        },
    ];

    return (
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
                const Icon = value.icon;
                return (
                    <Card key={value.title}>
                        <CardHeader>
                            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30">
                                <Icon className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                            </div>
                            <CardTitle>{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {value.description}
                            </p>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}

function StorySection() {
    return (
        <div className="mx-auto mt-16 max-w-3xl">
            <Card>
                <CardHeader>
                    <CardTitle>Our Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 dark:text-slate-400">
                    <p>
                        Founded with a passion for bringing quality products to customers
                        worldwide, Arts has grown from a small startup to a trusted name in
                        e-commerce.
                    </p>
                    <p>
                        We believe in the power of great products to enhance everyday life.
                        That&apos;s why we carefully select each item in our catalog, ensuring it
                        meets our high standards for quality, value, and customer
                        satisfaction.
                    </p>
                    <p>
                        Our team works tirelessly to provide you with an exceptional shopping
                        experience, from browsing our catalog to receiving your order at your
                        doorstep. We&apos;re committed to continuous improvement and always
                        listening to our customers.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

function StatsSection() {
    const stats = [
        { value: '10K+', label: 'Happy Customers' },
        { value: '5K+', label: 'Products Available' },
        { value: '98%', label: 'Customer Satisfaction' },
    ];

    return (
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 text-center md:grid-cols-3">
            {stats.map((stat) => (
                <div key={stat.label}>
                    <div className="text-4xl font-bold text-teal-700 dark:text-teal-400">
                        {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <HeroSection />
            <ValuesSection />
            <StorySection />
            <StatsSection />
        </div>
    );
}
