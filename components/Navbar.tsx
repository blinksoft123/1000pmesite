import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClasses = (path: string) =>
    `text-sm font-medium leading-normal transition-colors ${
      isActive(path)
        ? "text-primary font-bold"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/95 backdrop-blur-sm px-4 sm:px-10 py-3">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-4 text-white hover:opacity-90 transition-opacity">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">
            BlinksoftTech
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <nav className="flex items-center gap-9">
            <Link to="/" className={linkClasses('/')}>
              Accueil
            </Link>
            <Link to="/services" className={linkClasses('/services')}>
              Services
            </Link>
             <Link to="/process" className={linkClasses('/process')}>
              Comment ça marche
            </Link>
            <Link to="/pricing" className={linkClasses('/pricing')}>
              Tarifs
            </Link>
            <Link to="/testimonials" className={linkClasses('/testimonials')}>
              Témoignages
            </Link>
             <Link to="/contact" className={linkClasses('/contact')}>
              Contact
            </Link>
          </nav>
          <Link
            to="/pricing"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover transition-colors"
          >
            <span className="truncate">Je veux mon site</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
           <Link
            to="/pricing"
             className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-3 bg-primary text-white text-xs font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover transition-colors"
          >
            <span className="truncate">Souscrire</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-primary transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-white/10 py-4 px-4 flex flex-col gap-4 shadow-xl animate-fade-in-down">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 ${linkClasses('/')}`}
          >
            Accueil
          </Link>
          <Link
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 ${linkClasses('/services')}`}
          >
            Services
          </Link>
          <Link
            to="/process"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 ${linkClasses('/process')}`}
          >
            Comment ça marche
          </Link>
          <Link
            to="/pricing"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 ${linkClasses('/pricing')}`}
          >
            Tarifs
          </Link>
          <Link
            to="/testimonials"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 ${linkClasses('/testimonials')}`}
          >
            Témoignages
          </Link>
           <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 ${linkClasses('/contact')}`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;