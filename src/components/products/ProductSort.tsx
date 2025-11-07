'use client';

interface ProductSortProps {
    value: string;
    onChange: (value: string) => void;
}

export function ProductSort({ value, onChange }: ProductSortProps) {
    return (
        <div className="flex items-center gap-3">
            <label 
                htmlFor="sort" 
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
            >
                Sort by:
            </label>
            <select
                id="sort"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 transition-colors hover:border-slate-400 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-500 dark:focus:border-teal-400"
            >
                <option value="">Default</option>
                <option value="title-asc">Name (A-Z)</option>
                <option value="title-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="rating-desc">Rating (High to Low)</option>
                <option value="rating-asc">Rating (Low to High)</option>
            </select>
        </div>
    );
}
