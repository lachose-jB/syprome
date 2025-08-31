import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '150+', label: t('home.stats.projects') },
    { value: '500+', label: t('home.stats.clients') },
    { value: '25+', label: t('home.stats.countries') },
    { value: '15+', label: t('home.stats.experience') },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;