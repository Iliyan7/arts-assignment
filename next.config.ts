import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Allow images from external domains (for DummyJSON API)
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    // Enable experimental features for better development
    experimental: {
        optimizePackageImports: ['lucide-react'], // We'll use this icon library
    },
};

export default nextConfig;
