import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#000000] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company Logo & Slogan */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">hub</span>
              <span className="text-2xl font-bold text-white">BlinksoftTech</span>
            </div>
            <p className="text-sm text-gray-400">
              Pionnier de la digitalisation des Petites et Moyennes Entreprises à travers l'Afrique.
            </p>
          </div>

          {/* Column 2: Legal Information */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold text-white">Mentions Légales</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-primary">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-primary">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-primary">
                  Politique des cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold text-white">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 transition-colors hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 transition-colors hover:text-primary">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold text-white">Suivez-nous</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="group">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-400 transition-colors group-hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M19.333 0H4.667C2.089 0 0 2.089 0 4.667v14.666C0 21.911 2.089 24 4.667 24h14.666C21.911 24 24 21.911 24 19.333V4.667C24 2.089 21.911 0 19.333 0zM7.95 20.4H5.2V9.589h2.75V20.4zm-1.375-12.21c-1.013 0-1.825-.813-1.825-1.825s.812-1.825 1.825-1.825 1.825.812 1.825 1.825-.812 1.825-1.825 1.825zm13.175 12.21h-2.75V14.65c0-1.369-.025-3.125-1.9-3.125-1.901 0-2.194 1.488-2.194 3.025v5.85H9.75V9.589h2.65v1.213h.038c.368-.699 1.268-1.425 2.612-1.425 2.794 0 3.313 1.838 3.313 4.225V20.4z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="group">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-400 transition-colors group-hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.93 4.93 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </a>
              <a href="#" className="group">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-400 transition-colors group-hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2024 BlinksoftTech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;