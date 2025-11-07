import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ROUTES } from '@/constants';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            Arts E-commerce
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            A modern shopping experience built with Next.js and
                            React.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            Quick Links
                        </h4>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <Link
                                    href={ROUTES.HOME}
                                    className="text-sm text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={ROUTES.PRODUCTS}
                                    className="text-sm text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={ROUTES.CART}
                                    className="text-sm text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
                                >
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            Connect
                        </h4>
                        <div className="mt-3 flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:contact@example.com"
                                className="text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                    <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                        © {currentYear} Arts E-commerce. Built for educational
                        purposes.
                    </p>
                </div>
            </div>
        </footer>
    );
}
