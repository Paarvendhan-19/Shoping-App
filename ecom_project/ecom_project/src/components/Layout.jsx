import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children, cartCount, logout }) => {
    const location = useLocation();
    const isLoggedIn = localStorage.getItem("email");

    const isActive = (path) => location.pathname === path
        ? "text-blue-600 font-semibold border-b-2 border-blue-600"
        : "text-gray-600 hover:text-blue-500 transition-colors";

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                LuxeStore
                            </Link>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <Link to="/" className={`px-1 py-2 text-sm font-medium ${isActive('/')}`}>Home</Link>
                            <Link to="/products" className={`px-1 py-2 text-sm font-medium ${isActive('/products')}`}>Products</Link>
                            <Link to="/about" className={`px-1 py-2 text-sm font-medium ${isActive('/about')}`}>About</Link>
                            <Link to="/contact" className={`px-1 py-2 text-sm font-medium ${isActive('/contact')}`}>Contact</Link>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-blue-600 rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>

                            {isLoggedIn ? (
                                <button
                                    onClick={logout}
                                    className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </div>
            </main>

            <footer className="bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">LuxeStore</h3>
                            <p className="text-gray-500 text-sm max-w-md">
                                Offering the finest selection of premium products with an effortless shopping experience.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Links</h4>
                            <ul className="space-y-4">
                                <li><Link to="/products" className="text-base text-gray-500 hover:text-gray-900">Shop</Link></li>
                                <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">About</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h4>
                            <ul className="space-y-4">
                                <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact</Link></li>
                                <li><Link to="/login" className="text-base text-gray-500 hover:text-gray-900">Account</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-100 pt-8 text-center">
                        <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} LuxeStore. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
