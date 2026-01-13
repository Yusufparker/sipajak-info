import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#002F8D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Section - Brand & Description */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <img 
                        src="/images/si-icon.png" 
                        alt="Logo SiPajak Info" 
                        className="w-8 h-8 object-contain"
                    />
                    <div>
                        <h3 className="font-bold text-xl">SiPajak Info</h3>
                        <p className="text-sm text-blue-200">Bapenda Kab. Tangerang</p>
                    </div>
                </div>
                <p className="text-sm text-blue-100 leading-relaxed max-w-md">
                Portal informasi pajak daerah untuk meningkatkan pemahaman masyarakat
                tentang pajak dan kontribusinya bagi pembangunan daerah.
                </p>
            </div>

            {/* Right Section - Contact Info */}
            <div className="space-y-4">
                <h3 className="font-bold text-xl mb-4">Hubungi Kami</h3>
                <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                    <svg
                    className="w-5 h-5 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    </svg>
                    <p className="text-blue-100">
                    Jl. Satria Sudirman No.1, Kelapa Dua, Kabupaten Tangerang
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <svg
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                    </svg>
                    <p className="text-blue-100">(021) 5525522</p>
                </div>

                <div className="flex items-center gap-3">
                    <svg
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                    </svg>
                    <p className="text-blue-100">Bapenda@gmail.com</p>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#001a4d] border-t border-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-blue-200 text-center md:text-left">
                © 2026 SiPajak Info - Bapenda Kabupaten Tangerang. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                    Kebijakan Privasi
                </a>
                <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                    Syarat & Ketentuan
                </a>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;