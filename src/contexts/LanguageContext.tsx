import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'Qui sommes-nous',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.blog': 'Actualités',
    'nav.contact': 'Contact',
    
    // Home
    'home.hero.title': 'Votre Partenaire Stratégique International',
    'home.hero.subtitle': 'SYPROM accompagne entreprises et institutions dans leur développement stratégique, du courtage à la formation, en France et à l\'international.',
    'home.hero.cta': 'Découvrir nos services',
    'home.stats.projects': 'Projets Réalisés',
    'home.stats.clients': 'Clients Satisfaits',
    'home.stats.countries': 'Pays d\'Intervention',
    'home.stats.experience': 'Années d\'Expérience',
    
    // About
    'about.title': 'Notre Vision',
    'about.subtitle': 'SYPROM, votre partenaire de confiance pour un développement stratégique réussi',
    'about.mission.title': 'Notre Mission',
    'about.mission.text': 'Accompagner nos clients dans leurs projets les plus ambitieux en proposant des solutions sur mesure, de l\'analyse stratégique à la mise en œuvre opérationnelle.',
    'about.vision.title': 'Notre Vision',
    'about.vision.text': 'Devenir la référence en accompagnement stratégique international, en créant de la valeur durable pour nos clients et partenaires.',
    'about.values.title': 'Nos Valeurs',
    
    // Services
    'services.title': 'Nos Expertises',
    'services.subtitle': 'Des solutions complètes pour accompagner votre croissance',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Parlons de votre projet',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.company': 'Entreprise',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    
    // Footer
    'footer.company': 'SYPROM - Accompagnement Stratégique International',
    'footer.rights': 'Tous droits réservés',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.blog': 'News',
    'nav.contact': 'Contact',
    
    // Home
    'home.hero.title': 'Your International Strategic Partner',
    'home.hero.subtitle': 'SYPROM supports companies and institutions in their strategic development, from brokerage to training, in France and internationally.',
    'home.hero.cta': 'Discover our services',
    'home.stats.projects': 'Completed Projects',
    'home.stats.clients': 'Satisfied Clients',
    'home.stats.countries': 'Countries of Operation',
    'home.stats.experience': 'Years of Experience',
    
    // About
    'about.title': 'Our Vision',
    'about.subtitle': 'SYPROM, your trusted partner for successful strategic development',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'Support our clients in their most ambitious projects by offering tailor-made solutions, from strategic analysis to operational implementation.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'Become the reference in international strategic support, creating sustainable value for our clients and partners.',
    'about.values.title': 'Our Values',
    
    // Services
    'services.title': 'Our Expertise',
    'services.subtitle': 'Complete solutions to support your growth',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s talk about your project',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    
    // Footer
    'footer.company': 'SYPROM - International Strategic Support',
    'footer.rights': 'All rights reserved',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};