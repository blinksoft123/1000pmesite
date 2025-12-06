import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center py-16 sm:py-24 px-4 min-h-screen relative overflow-hidden bg-background-dark"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col items-center text-center gap-4 mb-12 z-10">
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] max-w-2xl">
          Notre Offre Exclusive 1000PME
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-xl">
          La solution tout-en-un pour digitaliser votre entreprise et accélérer votre croissance en Afrique.
        </p>
      </div>

      <div className="relative w-full max-w-md p-0.5 rounded-2xl bg-gradient-to-br from-[#00FFFF] to-[#8A2BE2] shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-300">
        <div className="flex flex-col gap-8 rounded-[15px] bg-[#0A0A1A] p-8 h-full">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-white text-xl font-bold leading-tight uppercase tracking-wider text-primary">Offre Essentielle</h2>
            <div className="flex items-center justify-center gap-1">
               <span className="text-white text-5xl font-black leading-tight tracking-tight">60 000</span>
               <span className="text-white/60 text-xl font-bold mt-4">FCFA</span>
            </div>
            <p className="text-white/60 text-sm">Paiement unique</p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              "Site Vitrine Professionnel",
              "Hébergement Inclus (1 an)",
              "Nom de domaine (.com)",
              "Configuration Google Business",
              "Création Page Facebook Pro",
              "Support Technique"
            ].map((feature, i) => (
               <div key={i} className="flex items-center gap-3 text-white/90 text-sm font-normal leading-normal">
                <span className="material-symbols-outlined text-[#00FFFF] text-xl">check_circle</span>
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
              <p className="text-white/80 text-sm font-normal">Option e-commerce</p>
              <p className="text-[#00FFFF] text-sm font-bold">+ 15 000 FCFA</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white/80 text-sm font-normal">Paiement</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white/80 text-base">phone_iphone</span>
                <p className="text-white text-sm font-medium">Mobile Money</p>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] text-black text-lg font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity shadow-lg"
          >
            Commencer maintenant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;