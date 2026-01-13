import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-[#002F8D] shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
                <img 
                src="/images/si-icon.png" 
                alt="Logo SiPajak Info" 
                className="w-8 h-8 object-contain"
                />
            <div className="text-white">
                <h1 className="font-bold text-lg leading-tight">SiPajak Info</h1>
                <p className="text-xs text-blue-100">Bapenda Kab. Tangerang</p>
            </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
                <Link
                to="/"
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    isActive("/")
                    ? "text-[#002F8D] bg-white"
                    : "text-white hover:bg-blue-600"
                }`}
                >
                Beranda
                </Link>
                <Link
                to="/articles"
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    isActive("/articles")
                    ? "text-[#002F8D] bg-white"
                    : "text-white hover:bg-blue-600"
                }`}
                >
                Artikel Edukasi
                </Link>
                <Link
                to="/simulasi-pajak"
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    isActive("/simulasi-pajak")
                    ? "text-[#002F8D] bg-white"
                    : "text-white hover:bg-blue-600"
                }`}
                >
                Simulasi Pajak
                </Link>
                <Link
                to="/faq"
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    isActive("/faq")
                    ? "text-[#002F8D] bg-white"
                    : "text-white hover:bg-blue-600"
                }`}
                >
                FAQ
                </Link>
                <Link
                to="/contact"
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    isActive("/contact")
                    ? "text-[#002F8D] bg-white"
                    : "text-white hover:bg-blue-600"
                }`}
                >
                Kontak
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="md:hidden text-white p-2 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
            >
                <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                )}
                </svg>
            </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
                <Link
                to="/"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    isActive("/")
                    ? "text-[#002F8D] bg-white"
                    : "text-white hover:bg-blue-600"
                }`}
                onClick={toggleMenu}
                >
                Beranda
                </Link>
                <Link
                to="/articles"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    isActive("/articles")
                    ? "text-[#002F8D] bg-white"
                    : "text-white hover:bg-blue-600"
                }`}
                onClick={toggleMenu}
                >
                Artikel Edukasi
                </Link>
                <Link
                to="/simulasi-pajak"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    isActive("/simulasi-pajak")
                    ? "text-[#002F8D] bg-white"
                    : "text-white hover:bg-blue-600"
                }`}
                onClick={toggleMenu}
                >
                Simulasi Pajak
                </Link>
                <Link
                to="/faq"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    isActive("/faq")
                    ? "text-[#002F8D] bg-white"
                    : "text-white hover:bg-blue-600"
                }`}
                onClick={toggleMenu}
                >
                FAQ
                </Link>
                <Link
                to="/contact"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    isActive("/contact")
                    ? "text-[#002F8D] bg-white"
                    : "text-white hover:bg-blue-600"
                }`}
                onClick={toggleMenu}
                >
                Kontak
                </Link>
            </div>
            )}
        </div>
        </nav>
    );
};

export default Navbar;
