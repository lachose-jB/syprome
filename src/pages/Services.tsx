import React from 'react';
import * as LucideIcons from 'lucide-react';
import { services } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<any>;
              
              return (
                <div
                  key={service.id}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {language === 'fr' ? service.title : service.titleEn}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {language === 'fr' ? service.description : service.descriptionEn}
                      </p>
                      <ul className="space-y-2">
                        {(language === 'fr' ? service.features : service.featuresEn).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à développer votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez nos experts pour une consultation personnalisée
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg">
            Prendre rendez-vous
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;