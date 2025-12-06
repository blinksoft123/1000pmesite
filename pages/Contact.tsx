import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary text-base font-bold uppercase tracking-wider">Contact</p>
          <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mt-2">
            Construisons l'avenir ensemble
          </h1>
          <p className="text-slate-600 dark:text-[#8eb9cc] text-lg font-normal leading-normal max-w-3xl mt-4">
            Prêt à digitaliser votre entreprise ou à en savoir plus sur notre programme 1000PME? 
            Remplissez le formulaire ci-dessous ou utilisez nos coordonnées directes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <form action="#" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="flex flex-col">
                  <span className="text-slate-900 dark:text-white text-base font-medium pb-2">Nom complet</span>
                  <input 
                    type="text" 
                    className="w-full rounded-lg bg-white dark:bg-card-dark/80 backdrop-blur-sm border border-gray-300 dark:border-border-dark text-slate-900 dark:text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                    placeholder="Votre nom complet"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-slate-900 dark:text-white text-base font-medium pb-2">Adresse e-mail</span>
                  <input 
                    type="email" 
                    className="w-full rounded-lg bg-white dark:bg-card-dark/80 backdrop-blur-sm border border-gray-300 dark:border-border-dark text-slate-900 dark:text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                    placeholder="votre.email@example.com"
                  />
                </label>
              </div>
              
              <label className="flex flex-col">
                <span className="text-slate-900 dark:text-white text-base font-medium pb-2">Sujet</span>
                <input 
                  type="text" 
                  className="w-full rounded-lg bg-white dark:bg-card-dark/80 backdrop-blur-sm border border-gray-300 dark:border-border-dark text-slate-900 dark:text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                  placeholder="Sujet de votre message"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-slate-900 dark:text-white text-base font-medium pb-2">Votre message</span>
                <textarea 
                  className="w-full rounded-lg bg-white dark:bg-card-dark/80 backdrop-blur-sm border border-gray-300 dark:border-border-dark text-slate-900 dark:text-white px-4 py-3 min-h-[150px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm resize-y"
                  placeholder="Écrivez votre message ici..."
                ></textarea>
              </label>

              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-hover hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-card-dark/80 backdrop-blur-sm border border-gray-200 dark:border-border-dark rounded-xl p-8 h-full shadow-lg">
              <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-2">Nos Coordonnées</h3>
              <p className="text-slate-600 dark:text-[#8eb9cc] mb-8">
                Contactez-nous directement via les canaux suivants.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-semibold text-lg">Adresse</h4>
                    <p className="text-slate-600 dark:text-[#8eb9cc]">123 Tech Avenue, Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-semibold text-lg">Email</h4>
                    <a href="mailto:contact@blinksofttech.com" className="text-slate-600 dark:text-[#8eb9cc] hover:text-primary transition-colors">
                      contact@blinksofttech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                     <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-semibold text-lg">Téléphone</h4>
                    <a href="tel:+2250102030405" className="text-slate-600 dark:text-[#8eb9cc] hover:text-primary transition-colors">
                      +225 01 02 03 04 05
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;