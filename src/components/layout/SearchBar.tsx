'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';

export function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            setIsOpen(false);
            setSearchTerm('');
            router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setSearchTerm('');
    };

    // Close on ESC key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    return (
        <div className="relative">
            {/* Search Icon Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-400"
                aria-label="Search"
            >
                <Search className="h-5 w-5" />
            </button>

            {/* Search Overlay */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Search Box */}
                    <div className="fixed left-1/2 top-24 z-50 w-full max-w-2xl -translate-x-1/2 px-4">
                        <form
                            onSubmit={handleSearch}
                            className="relative rounded-xl border border-slate-200/50 bg-white shadow-2xl dark:border-slate-700/50 dark:bg-slate-800"
                        >
                            <div className="flex items-center gap-3 px-5 py-4">
                                <Search className="h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search for products..."
                                    className="flex-1 bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
                                />
                                {searchTerm && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchTerm('')}
                                        className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
                                        aria-label="Clear search"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
                                    aria-label="Close search"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="border-t border-slate-100 bg-slate-50 px-5 py-3 dark:border-slate-700 dark:bg-slate-700/50">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-500 dark:text-slate-400">
                                        Press <kbd className="rounded border border-slate-300 bg-white px-2 py-1 font-mono font-medium text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">Enter</kbd> to search
                                    </span>
                                    <span className="text-slate-400 dark:text-slate-500">
                                        ESC to close
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}
