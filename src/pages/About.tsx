import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { teamMembers } from '../data/team';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      titleEn: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet que nous menons.',
      descriptionEn: 'We aim for excellence in every project we undertake.'
    },
    {
      icon: Eye,
      title: 'Vision',
      titleEn: 'Vision',
      description: 'Une approche stratégique et une vision à long terme.',
      descriptionEn: 'A strategic approach and long-term vision.'
    },
    {
      icon: Heart,
      title: 'Engagement',
      titleEn: 'Commitment',
      description: 'Un engagement total envers nos clients et partenaires.',
      descriptionEn: 'Total commitment to our clients and partners.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.vision.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.vision.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.values.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'fr' ? value.title : value.titleEn}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'fr' ? value.description : value.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des experts passionnés à votre service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">
                  {language === 'fr' ? member.position : member.positionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;