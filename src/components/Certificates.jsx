

import React, { useState } from 'react';

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "CISCO Networking Academy",
    image: "/ciscociber-page-001.jpg",
    color: "#00b4e5"
  },
  {
    title: "Scrum de la teoría a la práctica",
    issuer: "Netzun – Dionisio Romero University",
    image: "/certificadoScrum-page-001.jpg",
    color: "#6da33f"
  },
  {
    title: "JavaScript Básico",
    issuer: "Netzun – Dionisio Romero University",
    image: "/certificadoJS-page-001.jpg",
    color: "#f7df1e"
  },
  {
    title: "Microsoft Excel de cero a avanzado",
    issuer: "Netzun – Dionisio Romero University",
    image: "/especiaExcel-page-001.jpg",
    color: "#217346"
  },
  {
    title: "SQL Especialización",
    issuer: "Netzun – Dionisio Romero University",
    image: "/especiaSQL-page-001.jpg",
    color: "#a91d22"
  },
  {
    title: "Habilidades Blandas",
    issuer: "Netzun – Dionisio Romero University",
    image: "/especiaHabilidadesBlandas-page-001.jpg",
    color: "#ec4899"
  },
  {
    title: "Power Bi y Tableau",
    issuer: "Netzun – Dionisio Romero University",
    image: "/especiaPowerBi-page-001.jpg",
    color: "#F2C811"
  },
  {
    title: "Data Analytics",
    issuer: "Netzun – Dionisio Romero University",
    image: "/especiaDataAnalytics-page-001.jpg",
    color: "#06b6d4"
  },
  {
    title: "Programación en Python y Django",
    issuer: "Netzun – Dionisio Romero University",
    image: "/especiaPythonDjango-page-001.jpg",
    color: "#3776ab"
  }
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen py-20 px-6 animate-fade-in relative z-10">
      <h2 className="text-pink-500 font-black text-5xl mb-20 uppercase italic text-center tracking-widest drop-shadow-[0_0_15px_#ff2d95]">
        Certificaciones
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            onClick={() => setSelectedImage(cert.image)}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-[35px] overflow-hidden transition-all duration-500 hover:scale-105 hover:border-pink-500/50 shadow-2xl cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center p-2">
              <img 
                src={cert.image} 
                alt={cert.title}
                loading="lazy"
                className="w-full h-full object-contain rounded-2xl transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay de "Ver más" */}
              <div className="absolute inset-0 bg-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="bg-black/80 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest border border-pink-500">
                  Ver en Grande
                </span>
              </div>
            </div>

            <div className="p-10 relative bg-gradient-to-b from-[#0f0f0f] to-black">
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1.5 rounded-full"
                style={{ backgroundColor: cert.color, boxShadow: `0 0 20px ${cert.color}` }}
              ></div>
              
              <h3 className="text-white font-black text-lg uppercase leading-tight mb-3 group-hover:text-pink-500 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                {cert.issuer}
              </p>

              <div className="inline-block px-4 py-1.5 border border-pink-500/20 rounded-full bg-pink-500/5">
                <span className="text-pink-500 text-[9px] font-black uppercase tracking-tighter">
                  Credencial Verificada
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DE VISTA PREVIA (LIGHTBOX) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white text-4xl hover:text-pink-500 transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          
          <img 
            src={selectedImage} 
            alt="Vista previa" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(255,45,149,0.3)] animate-zoom-in"
          />
          
          <p className="absolute bottom-10 text-pink-500 font-black uppercase tracking-widest text-xs">
            Haz clic en cualquier lugar para cerrar
          </p>
        </div>
      )}
    </div>
  );
}