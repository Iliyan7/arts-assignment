'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
                <Image
                    src={images[currentIndex]}
                    alt={`${alt} - Image ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <Button
                            variant="secondary"
                            size="sm"
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2"
                            onClick={goToPrevious}
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="secondary"
                            size="sm"
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2"
                            onClick={goToNext}
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* Thumbnail Grid */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`relative aspect-square overflow-hidden rounded-lg bg-white transition-all ${
                                currentIndex === index
                                    ? 'ring-2 ring-teal-700 ring-offset-2'
                                    : 'opacity-60 hover:opacity-100'
                            }`}
                        >
                            <Image
                                src={image}
                                alt={`${alt} thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 25vw, 12vw"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
