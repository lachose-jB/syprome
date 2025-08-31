import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { useLanguage } from '../contexts/LanguageContext';

const Blog: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Actualités & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos analyses et conseils d'experts
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-white/20 text-sm font-medium rounded-full">
                    Article Featured
                  </span>
                  <div className="flex items-center space-x-2 text-blue-100">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">15 Jan 2024</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  L'Avenir du Commerce International
                </h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Analyse des tendances émergentes qui transforment le commerce international et les opportunités pour les entreprises françaises.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  Lire l'article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg"
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={language === 'fr' ? post.title : post.titleEn}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {language === 'fr' ? post.title : post.titleEn}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {language === 'fr' ? post.excerpt : post.excerptEn}
                  </p>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Lire la suite
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;