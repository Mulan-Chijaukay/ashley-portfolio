import React, { useState } from 'react';

export default function ProjectCarousel() {
  const projects = [
    {
      title: "Banco Analytics",
      desc: "Modelo de Riesgo Crediticio con Python y SQL Server para optimización financiera.",
      img: "https://via.placeholder.com/600x400/1a0205/ff2d95?text=Banco+Analytics"
    },
    {
      title: "VetCare Web",
      desc: "Sistema integral con Spring Boot y registro de propiedad intelectual en Indecopi.",
      img: "https://via.placeholder.com/600x400/1a0205/ff2d95?text=VetCare+Web"
    },
    {
      title: "Gestión ",
      desc: "Arquitectura Java Maven para la ",
      img: "https://via.placeholder.com/600x400/1a0205/ff2d95?text=Gestion+Agricola"
    }
  ];

  return (
    <div className="flex gap-8 overflow-x-auto pb-10 px-4 snap-x no-scrollbar">
      {projects.map((p, i) => (
        <div key={i} className="min-w-[350px] md:min-w-[450px] snap-center bg-white/5 border border-white/10 rounded-[35px] overflow-hidden group hover:border-pink-500/50 transition-all duration-500">
          <div className="h-64 bg-gray-900 overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
          </div>
          <div className="p-8">
            <h3 className="text-pink-500 font-black text-xl mb-3 uppercase tracking-tighter">{p.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}