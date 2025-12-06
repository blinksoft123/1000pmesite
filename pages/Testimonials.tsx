import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Amara Diop",
      role: "E-commerce de mode",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6GkZbmnDfbZfq8qV-BkebYwqWNzRN4BvbFys4UNjjdfAapKDLVXjd3UyuHaPKVlmxe9_ZXRDHtEBt2wYfYpGnGL_LSwgjeyAqtiFmQVorHtqEF9EM7HdOiZkqdulpgsbzpsEApzVUrE2PClwToWTQD7Ouo7kWT0ayrZG37e1EsBEMqJ4VhfLexyyIaJ-tvIzNHk_vyErF3b59C5p_O5QSWt6kWnDTIRVUl2_UIq9dFZGHnWouohGq_sukDLbn2Ekzx67dlk2A6SE",
      quote: "Grâce à BlinksoftTech, nous avons non seulement digitalisé notre inventaire mais aussi doublé nos ventes en ligne en seulement 6 mois. Une véritable révolution pour notre marque."
    },
    {
      name: "Fatima Zahra",
      role: "Fintech",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdoMMuc8lXvELoYcz-Y_JcUqzh_3mK-Alih5qKKpUXTCb9IZiYBQSZ1_zvYszUyy3CWGsNG4CTt8N6CENRF7SpZe3h4w1cjWj92S9hyz5CbxptJtIBVVfwNpviPUOUTnAKwhIYxY9k4FdddXzpKNlCZaIkcsKXEtSJJeTlBVo-NtjFQx_gn-n01PHuNl7y9VKYL9z4LIzBiDjBZ7ZRKBpCpXQJEF_FkxIDVAz7EwGsottUqsnjjFLGcbyHad3bIYOjoRAuhyAC-so",
      quote: "Le programme 1000PME a été un catalyseur. L'optimisation de nos processus financiers a atteint 40%, nous rendant plus agiles et compétitifs sur le marché."
    },
    {
      name: "Kwame Asante",
      role: "Agro-industrie",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDji8AoTdmbjtpOJamuwNzRGbEprZrRRTtlRTGyCfy-P6xyGIoIZSNwg4ZeR5ThR-4Z0ZOyqt5bVURYmoc3efrjdJdaTxrrCyN9EHTDbtgwowhvfY4c7hTJdlXSXbHoTAsNZaFBJJ463koYKbGjO_y8Gwg4IQvf91MsZWZ3OscpHn_IgRMgZssv2ECVPGg4uIQantsYzt9K2ASbxfZ0IWt_Fe0Kxfp0tMwWSR8bPSkSri_Y4SXl1dzNW29AwaYnt6vifi8DLUyP1Nc",
      quote: "La plateforme développée nous a ouvert les portes des marchés internationaux. Notre visibilité a explosé, et notre carnet de commandes avec."
    }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight drop-shadow-lg">
            Ils ont transformé leur entreprise avec nous
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-muted max-w-3xl mx-auto">
            Découvrez comment le programme 1000PME a propulsé la croissance des entreprises africaines grâce à la digitalisation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col gap-6 bg-card-dark/80 backdrop-blur-sm p-8 rounded-2xl w-full md:w-[350px] border border-border-dark transition-all duration-300 hover:border-primary hover:shadow-glow-primary hover:-translate-y-2"
            >
               {/* Glow effect on hover */}
               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="flex items-center gap-4 z-10">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <p className="text-white text-lg font-bold">{t.name}</p>
                  <p className="text-primary text-sm font-medium">{t.role}</p>
                </div>
              </div>
              <div className="z-10 relative">
                <span className="text-4xl text-primary/30 absolute -top-4 -left-2 font-serif">"</span>
                <p className="text-gray-300 text-base leading-relaxed italic relative z-10 pl-2">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link 
            to="/pricing"
            className="relative flex items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold tracking-wide shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
          >
            <span className="relative z-10">Commencez votre transformation digitale</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;