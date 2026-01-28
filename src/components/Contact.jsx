import React from 'react';

export default function Contact() {
  const contactData = [
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      link: "https://www.linkedin.com/in/ashley-misae-kuniyoshi-zambrano-a09316278/",
      color: "#0077b5"
    },
    {
      name: "Gmail",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      link: "mailto:ashkunizam1808@gmail.com",
      color: "#ea4335"
    },
    {
      name: "WhatsApp",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      link: "https://wa.me/51963133867",
      color: "#25d366"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 animate-fade-in relative z-10 flex flex-col items-center justify-center">
      
      {/* Título Principal */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-[#ff2d95] font-black text-6xl md:text-7xl uppercase italic tracking-tighter drop-shadow-[0_0_20px_#ff2d95] mb-6">
          Contacto
        </h2>
        <p className="text-gray-400 font-bold uppercase tracking-[0.5em] text-[12px]">
          ¿Tienes algún proyecto en mente? ¡Hablemos!
        </p>
      </div>

      {/* Tarjetas de Contacto */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {contactData.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#0a0a0a] border border-white/10 p-10 rounded-[40px] overflow-hidden transition-all duration-500 hover:scale-105 hover:border-pink-500/40 shadow-2xl flex flex-col items-center justify-center gap-6"
          >
            {/* Efecto de luz al fondo */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at center, ${contact.color}, transparent 70%)` }}
            ></div>

            {/* Icono */}
            <div 
              className="p-5 rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_30px_-5px] group-hover:text-white text-gray-400"
              style={{ color: contact.color }}
            >
              {contact.icon}
            </div>

            {/* Nombre */}
            <span className="text-white font-black uppercase tracking-widest text-sm group-hover:text-pink-500 transition-colors">
              {contact.name}
            </span>

            {/* Indicador de acción */}
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
              Click para conectar
            </div>
          </a>
        ))}
      </div>

      {/* Pie de página decorativo */}
      <div className="mt-24 text-center">
        <p className="text-gray-700 font-black uppercase tracking-[1em] text-[10px]">
          Lima, Perú • 2026
        </p>
      </div>
    </div>
  );
}