import React, { useState, useEffect } from 'react';
// Importación de las capturas de VetCare
import vet1 from '../assets/vetcare/1vet.jpg';
import vet2 from '../assets/vetcare/2vet.png';
import vet3 from '../assets/vetcare/3vet.jpg';
import vet4 from '../assets/vetcare/4vet.png';
import vet5 from '../assets/vetcare/5vet.png';
import vet6 from '../assets/vetcare/6vet.png';
import vet7 from '../assets/vetcare/7vet.png';
import vet8 from '../assets/vetcare/8vet.png';
import vet9 from '../assets/vetcare/9vet.png';
import vet10 from '../assets/vetcare/10vet.jpg';

// NUEVAS IMPORTACIONES: Capturas de Credit
import credi1 from '../assets/credit/1credi.png';
import credi2 from '../assets/credit/2credi.png';

const myProjects = [
  {
    title: "Riesgo Crediticio Ecosistema",
    category: "Data Analytics",
    description: "Proyecto integral de BI enfocado en el sector financiero. Incluye limpieza profunda de datos con SQL, análisis predictivo en Python y Dashboard estratégico en Power BI.",
    // AHORA USA IMAGES Y CAROUSEL
    images: [credi1, credi2], 
    tags: ["SQL", "Python", "Power BI"],
    codeLink: "https://github.com/Mulan-Chijaukay/Riesgo-Crediticio-Ecosistema.git",
    color: "#ff2d95",
    isCarousel: true // ACTIVADO
  },
  {
    title: "VetCare-Web",
    category: "Full Stack",
    description: "Sistema web profesional para clínica veterinaria desarrollado bajo arquitectura MVC. Gestiona citas e historias clínicas con lógica en C# y persistencia en SQL Server.",
    images: [vet1, vet2, vet3, vet4, vet5, vet6, vet7, vet8, vet9, vet10], 
    tags: ["ASP.NET Core", "SQL Server", "C#", "MVC", "Bootstrap"],
    codeLink: "https://github.com/Mulan-Chijaukay/VetCare-Web",
    color: "#00f2ff",
    isCarousel: true // ACTIVADO
  }
];

// Componente del Carrusel
const ProjectCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Indicadores de posición (dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <div 
            key={index}
            className={`h-1.5 w-1.5 rounded-full transition-all ${index === current ? 'bg-pink-500 w-4' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-6 animate-fade-in relative z-10">
      
      {/* ENCABEZADO */}
      <div className="max-w-4xl mx-auto text-center mb-20 flex flex-col items-center">
        <div className="mb-6 drop-shadow-[0_0_15px_#ff2d95]">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ff2d95" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <h2 className="text-[#ff2d95] font-black text-6xl md:text-7xl uppercase italic tracking-tighter drop-shadow-[0_0_20px_#ff2d95] mb-6">
          Proyectos
        </h2>
        <p className="text-gray-400 font-bold uppercase tracking-[0.5em] text-[10px] md:text-[12px]">
          Soluciones innovadoras que combinan datos y desarrollo
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {myProjects.map((project, index) => (
          <div 
            key={index}
            className="bg-[#0a0a0a] border border-white/10 rounded-[50px] overflow-hidden hover:border-pink-500/40 transition-all duration-500 group shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            {/* Contenedor de Imagen / Carrusel */}
            <div className="relative h-80 overflow-hidden bg-[#111]">
              <div className="absolute top-8 left-8 z-20">
                <span className="bg-pink-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(219,39,119,0.5)]">
                  {project.category}
                </span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-90"></div>
              
              {/* Lógica Condicional para carrusel */}
              {project.isCarousel ? (
                <ProjectCarousel images={project.images} />
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100"
                  onError={(e) => { e.target.style.display='none'; }}
                />
              )}
              
              {!project.isCarousel && (
                <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-7xl italic -rotate-12 uppercase pointer-events-none tracking-tighter">
                  Preview
                </div>
              )}
            </div>

            {/* Información del Proyecto */}
            <div className="p-12 relative flex flex-col items-center text-center">
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full -translate-y-1/2"
                style={{ backgroundColor: project.color, boxShadow: `0 0 20px ${project.color}` }}
              ></div>

              <h3 className="text-[#ff2d95] font-black text-4xl mb-6 uppercase italic group-hover:drop-shadow-[0_0_10px_#ff2d95] transition-all">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium max-w-md">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-[10px] font-black text-pink-500 border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 rounded-xl uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botón de GitHub */}
              <div className="w-full max-w-[320px]">
                <a 
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 bg-transparent border-2 border-white/10 hover:border-pink-500 hover:bg-pink-500 text-white font-black py-5 rounded-[25px] transition-all duration-300 uppercase tracking-widest text-xs group/btn shadow-2xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:rotate-12 transition-transform">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}