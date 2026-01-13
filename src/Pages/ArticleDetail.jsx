import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import articlesData from "../data/articles.json";

const ArticleDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const article = articlesData.articles.find((a) => a.slug === slug);

    // Get related articles (same category, exclude current)
    const relatedArticles = articlesData.articles
        .filter((a) => a.category === article?.category && a.id !== article?.id)
        .slice(0, 3);

    if (!article) {
        return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Artikel tidak ditemukan
            </h2>
            <Link
                to="/artikel-edukasi"
                className="text-blue-600 hover:text-blue-700 font-medium"
            >
                Kembali ke daftar artikel
            </Link>
            </div>
        </div>
        );
    }

    const handleShare = () => {
        if (navigator.share) {
        navigator.share({
            title: article.title,
            text: article.excerpt,
            url: window.location.href,
        });
        } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert("Link artikel berhasil disalin!");
        }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header dengan Featured Image */}
        <div className="relative bg-linear-to-b py-10 from-gray-900 to-gray-800 text-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover opacity-40"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-1"></div>

          {/* Content */}
          <div className="relative z-2 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali</span>
            </button>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-[#002F8D] text-white text-sm font-semibold px-4 py-2 rounded-full">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(article.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Bagikan</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex items-center gap-2 mb-8 flex-wrap">
                <Tag className="w-4 h-4 text-gray-500" />
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Excerpt */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                {article.excerpt}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-4">
                {article.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Artikel Terkait
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/artikel/${related.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div className="relative">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#002F8D] text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA Back to Articles */}
          <div className="mt-12 text-center">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-[#002F8D] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Lihat Semua Artikel
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ArticleDetail;
