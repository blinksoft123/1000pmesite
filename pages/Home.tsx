import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[calc(100vh-160px)] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center text-center px-4 py-10 @[480px]:px-10 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 29, 35, 0.8) 0%, rgba(15, 29, 35, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRnvPFPOXcOCXd8CO9ROprm3IkMNdEvqkpVffq99GxHDCYQlmwpJ8N_X8AEQ_8xIYDN4rsynyQPdZQp_diVHzhw1gRJT700fEH3ETyO76jOzn2gHUoyzg1LnYh6unaI8MoKfpZMfoHSQ68lIJY_0XxEieAMgrDZ_3bH52DD0lb9okO4areg7gGHEUxscovwjCotl6WmdlxSQk9z1-sQFyAVu951jg6EACZhQ7a0Ws8mgCSqrabLNlY8TaSJ4GVI8isld7MfgoGoyI")`
            }}
          >
            <div className="flex flex-col gap-4 text-center items-center max-w-4xl z-10">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tighter sm:text-6xl sm:leading-tight">
                Digitalisez votre PME pour <span className="text-primary">60 000 FCFA</span>
              </h1>
              <h2 className="text-white/80 text-base font-normal leading-normal sm:text-xl">
                Site pro + Google Business + Page Facebook Pro + Visuels + Ciblage client
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 z-10 justify-center">
              <Link
                to="/pricing"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-all hover:scale-105 neon-glow"
              >
                <span className="truncate">Je veux mon site</span>
              </Link>
              <Link
                to="/process"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-transparent border-2 border-white/50 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/10 hover:border-white transition-colors"
              >
                <span className="truncate">Comment ça marche ?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Included Services Preview */}
      <div className="flex flex-col gap-10 px-4 py-16 sm:py-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="text-white tracking-tight text-3xl font-bold leading-tight sm:text-4xl max-w-[720px]">
            Nos Services Inclus
          </h2>
          <p className="text-text-muted text-base font-normal leading-normal max-w-[720px]">
            Tout ce dont vous avez besoin pour lancer votre présence en ligne et attirer de nouveaux clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {[
            { icon: "web", title: "Site Professionnel", desc: "Un site web moderne et performant pour présenter votre entreprise." },
            { icon: "storefront", title: "Google Business", desc: "Améliorez votre visibilité locale et apparaissez sur Google Maps." },
            { icon: "social_leaderboard", title: "Page Facebook Pro", desc: "Engagez votre communauté et partagez vos actualités." },
            { icon: "palette", title: "Visuels Personnalisés", desc: "Des graphismes sur mesure pour une identité de marque forte." },
            { icon: "ads_click", title: "Ciblage Client", desc: "Atteignez les bonnes personnes avec des stratégies de ciblage efficaces." },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-3 rounded-lg border border-border-dark bg-card-dark p-4 transition-all hover:border-primary hover:bg-primary/10 group cursor-default">
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-base font-bold leading-tight">{item.title}</h3>
                <p className="text-text-muted text-sm font-normal leading-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
           <Link to="/services" className="text-primary hover:text-white transition-colors font-semibold flex items-center gap-2">
             Voir les détails <span className="material-symbols-outlined">arrow_forward</span>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;