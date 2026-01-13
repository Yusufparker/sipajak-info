import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import articlesData from "../data/articles.json";

const Articles = () => {
    const [articles] = useState(articlesData.articles);
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredArticles = articles.filter((article) => {
        const matchCategory =
        selectedCategory === "Semua" || article.category === selectedCategory;
        const matchSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                ARTIKEL EDUKASI PAJAK
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                Pelajari lebih dalam tentang pajak daerah melalui artikel artikel
                informatif
                </p>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Cari artikel..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400"
                />
                </div>

                {/* Filter Kategori */}
                <div className="flex gap-3 mt-8 justify-center flex-wrap">
                {["Semua", "Edukasi", "Tutorial"].map((cat) => (
                    <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                        selectedCategory === cat
                        ? "bg-[#002F8D] text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                    >
                    {cat}
                    </button>
                ))}
                </div>
            </div>
            </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                Tidak ada artikel yang ditemukan
                </p>
            </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                <Link
                    key={article.id}
                    to={`/articles/${article.slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="relative">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-[#002F8D] text-white text-xs font-semibold px-4 py-2 rounded-full">
                        {article.category}
                        </span>
                    </div>
                    </div>
                    <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                        {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                    </p>
                    </div>
                </Link>
                ))}
            </div>
            )}
        </div>
        </div>
    );
};

export default Articles;
