import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui';
import { Review } from '@/types';

interface ReviewsSectionProps {
    reviews: Review[];
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
    if (!reviews || reviews.length === 0) return null;

    return (
        <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
                Customer Reviews
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
                {reviews.map((review, index) => (
                    <Card key={index}>
                        <CardContent className="p-6">
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${
                                                    i < review.rating
                                                        ? 'fill-yellow-400 text-yellow-400'
                                                        : 'text-slate-300 dark:text-slate-600'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                        {review.rating}/5
                                    </span>
                                </div>
                                <time className="text-sm text-slate-500 dark:text-slate-400">
                                    {new Date(review.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })}
                                </time>
                            </div>
                            <p className="mb-3 font-medium text-slate-900 dark:text-slate-100">
                                {review.reviewerName}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {review.comment}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
