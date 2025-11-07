'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pages: (number | string)[] = [];

    // Always show first page
    pages.push(1);

    // Calculate range around current page
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    // Add ellipsis after first page if needed
    if (start > 2) {
        pages.push('...');
    }

    // Add pages around current page
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    // Add ellipsis before last page if needed
    if (end < totalPages - 1) {
        pages.push('...');
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
        pages.push(totalPages);
    }

    return (
        <nav
            className="flex items-center justify-center gap-2"
            aria-label="Pagination"
        >
            {/* Previous Button */}
            <Button
                variant="outline"
                size="sm"
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
                aria-label="Previous page"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page Numbers */}
            {pages.map((page, index) => {
                if (page === '...') {
                    return (
                        <span
                            key={`ellipsis-${index}`}
                            className="px-2 text-slate-500"
                        >
                            ...
                        </span>
                    );
                }

                const pageNumber = page as number;
                const isActive = pageNumber === currentPage;

                return (
                    <Button
                        key={pageNumber}
                        variant={isActive ? 'primary' : 'outline'}
                        size="sm"
                        className="min-w-[2.5rem]"
                        onClick={() => onPageChange(pageNumber)}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {pageNumber}
                    </Button>
                );
            })}

            {/* Next Button */}
            <Button
                variant="outline"
                size="sm"
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                aria-label="Next page"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </nav>
    );
}
