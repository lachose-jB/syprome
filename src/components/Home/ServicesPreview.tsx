import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { services } from '../../data/services';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesPreview: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 6).map((service) => {
            const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<any>;
            
            return (
              <div
                key={service.id}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {language === 'fr' ? service.title : service.titleEn}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'fr' ? service.description : service.descriptionEn}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
          >
            Voir tous nos services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;