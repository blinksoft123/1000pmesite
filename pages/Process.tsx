import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Inscription",
      desc: "Commencez par remplir notre formulaire simple pour nous parler de votre entreprise et de vos besoins.",
      icon: "edit_document"
    },
    {
      num: "02",
      title: "Choix du template",
      desc: "Parcourez notre collection de designs modernes et choisissez celui qui correspond le mieux à votre marque.",
      icon: "grid_view"
    },
    {
      num: "03",
      title: "Envoi des informations",
      desc: "Fournissez-nous vos contenus : textes, images, logo et autres éléments essentiels à votre site.",
      icon: "upload_file"
    },
    {
      num: "04",
      title: "Création",
      desc: "Notre équipe d'experts prend le relais et construit votre solution digitale sur mesure avec soin et précision.",
      icon: "construction"
    },
    {
      num: "05",
      title: "Livraison en 7-10 jours",
      desc: "Recevez votre site web ou votre application, prêt à être lancé, dans un délai record pour un impact immédiat.",
      icon: "rocket_launch"
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center py-16 md:py-24 bg-background-dark min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark to-transparent"></div>
        <div className="absolute inset-x-0 top-1/3 h-1/2 bg-primary/5 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tighter pb-4">
            Comment ça marche
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">
            Notre processus en 5 étapes simples pour digitaliser votre entreprise.
          </p>
        </div>

        <div className="w-full px-4">
          <div className="grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-12">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${index === steps.length -1 ? 'bg-primary text-white border-primary shadow-glow-primary' : 'bg-primary/10 border-primary text-primary'}`}>
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-0.5 bg-gradient-to-b from-primary/50 to-transparent h-full min-h-[80px]"></div>
                  )}
                </div>
                
                <div className={`flex flex-col ${index !== steps.length - 1 ? 'pb-16' : 'pb-4'}`}>
                  <p className="text-primary text-sm font-bold uppercase tracking-wider mb-1">Étape {step.num}</p>
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-normal mb-2">{step.title}</h3>
                  <p className="text-text-muted text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;