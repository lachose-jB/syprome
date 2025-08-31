import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Projets & Réalisations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations et l'impact de notre expertise
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={language === 'fr' ? project.title : project.titleEn}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-sm font-medium text-gray-700 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {language === 'fr' ? project.title : project.titleEn}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {language === 'fr' ? project.description : project.descriptionEn}
                  </p>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    En savoir plus
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-600">
              La satisfaction de nos clients est notre priorité
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg`}
                    alt="Client"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Jean Dupont</h4>
                    <p className="text-sm text-gray-500">CEO, TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "SYPROM nous a accompagnés avec professionnalisme dans notre expansion internationale. Leur expertise est remarquable."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;