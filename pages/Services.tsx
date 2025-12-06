import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceList = [
    {
      title: "Site web professionnel",
      icon: "language",
      desc: "Nous créons un site web moderne, élégant et entièrement réactif qui présente votre entreprise sous son meilleur jour. C'est votre vitrine numérique, accessible 24/7 pour attirer et convaincre vos clients.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1cOnWqDrbKbCKe4Q0T0tLMUzywkuhlbTl7PbSYARrv0lDocF0OtkmtUit5tGY6nVqEbswD-8BP7mBK9XN8o-vRHFFsDkLuqMVMDpOEm-EvnbVPhqlbQQyZQM9k_EuF92LR5s3Da2Yyk-NNZQ_6_wouPu465NXqiOlEgtIGDX3MDPsuPuWDg0_nSIWhzuUftHtBXciYF6TwfxERSzO_1VQM_lGdQiZ4WZftJ0vNzP1yinrjH8FMqNyBLCwSsTHzy3RNi-VMNiFjGo",
      reverse: false
    },
    {
      title: "Page Google MyBusiness",
      icon: "storefront",
      desc: "Optimisez votre visibilité locale et attirez des clients à proximité grâce à un profil d'entreprise Google complet et optimisé. Apparaissez sur la carte, recueillez des avis et augmentez votre crédibilité.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbDrLcTvNj4YWZBcSczlY0z2_a0eoYn-7L3pIrTC7mzwiCfesxWSs7YlfMrVP1XEcbgwWcOYUBJd5CdqZl3XYfxuq8cskKy69w3J23vDuDIpCTf8EjpjIcV_YB6dLtDDIvR057DTylm6oCKNIm3bLlQc4dMWp7x1L4_BnWfIoVS0NFiRACRgm6LFrUN2uNUCKedziKM4A302RPxAkvkyXr7lvYxNfwYNW6Di6ItpidbeCZNujf1h8Jx1JTJh_Ynn8X9LvH9wr3qPg",
      reverse: true
    },
    {
      title: "Page Facebook Professionnelle",
      icon: "social_leaderboard",
      desc: "Créez une communauté engagée et renforcez votre marque avec une page Facebook professionnelle. Nous mettons en place et optimisons votre page pour interagir avec votre audience et promouvoir vos services.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDBO8_SPnQL9z7ar3WwDKfBpfIN97pRuDeItdQVbQfOW_sLVrYCkEwX5qxZCQxpIHTQB1ZaaDCUk8yWF-wtpU7sFDTFbJvZlQDdTuu1P-v0wmBB0g3sdbC6o9aEbAAKhSuPxJw0H-B7WyLguX-oPHuHRyzrGuxDkonhxU6_9lvmZWtfTHYtjxdNyI1gt5O3h-IwPjb40hjDg1a7ShcfPIxYyC_g_fGuvt0hHH5S0eK3Zo07m7f2JYouI1GU_vN4I12keFSYqu0v7I",
      reverse: false
    },
    {
      title: "5 visuels percutants",
      icon: "palette",
      desc: "Recevez des créations graphiques de haute qualité, conçues pour capter l'attention sur vos campagnes publicitaires et vos réseaux sociaux. Des visuels qui reflètent votre professionnalisme et votre message.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRCSC12n6Uyeu6zHn6X5iYemNNUz4munWUwGRJj715WSPQMiaNEYWJuRRZV1yLHXHLQWGxae1dHccnVyRa87k9OZ5Ot4xkNgs-lRTCZRQ_xGX3gr7rCf6Woihd7vAzD5RPTMgriLMJOInoBw18w8G-If8jd0hCa2PJKc8pcmQ6WT2A-WquMYInjSEjbgoydCsPFN_9LTCM3DyOpAvl1KkTQCSm6CjyQSmySc98fRyWEjiKx83M40Se2oscnNip2BOeNEaRzpmIB7k",
      reverse: true
    },
    {
      title: "Ciblage client & stratégie marketing",
      icon: "track_changes",
      desc: "Nous élaborons une stratégie sur mesure pour atteindre vos clients idéaux. Grâce à une analyse fine et des outils performants, nous vous aidons à développer votre activité de manière ciblée et efficace.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJyhDTmuw61S5UyQAkpDvfj4Kwc4K7zGf8MzK_f1bKYTKI7sYx3Uh8VnJ-tbdwVWTMcSPF9N0rohYo_11hu_iUs4kJ35XH2Envyxzrj325dYofUTHJLuvk-1UzR5vilj8GYdRbEFcDxNFiCV16tiSMioXPy_qilUNCZwYDkQOk4y9SQ5hktJhKW_S8rYrA64n-Vqp5DXPxepn1Q_gwLuSYWRol4HY7H6_XpQgEcF4U_pVQ5rok2Q1BcF1LU6vKemTDPkWjxMvxTcY",
      reverse: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="py-16 md:py-24 px-4 bg-background-dark text-center">
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
          Détails des Services du Pack 1000PME
        </h1>
        <p className="text-text-muted text-base md:text-lg max-w-3xl mx-auto">
          Découvrez les cinq piliers de notre programme, conçus pour propulser votre PME africaine dans l'ère numérique.
        </p>
      </div>

      {/* Services List */}
      <div className="flex flex-col gap-16 md:gap-32 px-4 py-10 max-w-7xl mx-auto">
        {serviceList.map((service, index) => (
          <div key={index} className={`flex flex-col gap-8 items-center ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="flex-1 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 text-primary p-3 rounded-lg">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">{service.title}</h3>
              </div>
              <p className="text-text-muted text-base md:text-lg font-normal leading-relaxed">
                {service.desc}
              </p>
            </div>
            <div 
              className="w-full flex-1 aspect-video rounded-xl bg-cover bg-center shadow-2xl border border-white/5"
              style={{ backgroundImage: `url("${service.img}")` }}
              role="img"
              aria-label={service.title}
            ></div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="py-20 px-4 text-center bg-card-dark/50 border-t border-white/5 mt-10">
        <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Prêt à transformer votre entreprise?</h2>
          <p className="text-text-muted text-lg">
             Rejoignez le programme 1000PME aujourd'hui et faites le premier pas vers votre succès numérique.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
             <Link to="/pricing" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:bg-primary-hover transition-all hover:-translate-y-1">
               Souscrire au Programme
             </Link>
             <Link to="/contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-card-dark border border-border-dark text-white text-base font-bold hover:bg-white/5 transition-colors">
               Contactez-nous
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;