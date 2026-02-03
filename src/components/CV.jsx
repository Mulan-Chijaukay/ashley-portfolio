import React from 'react';

export default function CV() {
  const cvPath = "/ashley-portfolio/CV_Ashley_K_IngSoftware.pdf#view=FitH";

  return (
    <div className="min-h-screen py-20 animate-fade-in relative z-10 flex flex-col items-center bg-[#050505]">
      <h2 className="text-pink-500 font-black text-6xl mb-16 uppercase italic text-center tracking-widest drop-shadow-[0_0_20px_#ff2d95]">
        Mi Currículum
      </h2>

      {/* SECCIÓN DE DESCARGA - CON ÍCONO VISIBLE Y CENTRADO */}
      <div className="bg-[#0a0a0a] border border-white/10 p-10 md:p-12 rounded-[50px] shadow-2xl mb-16 max-w-4xl w-full mx-6 flex flex-col items-center">
        <p className="text-gray-400 font-black uppercase tracking-[0.3em] mb-10 text-xs md:text-sm text-center w-full italic">
          ¿Prefieres tener una copia física?
        </p>
        
        <div className="w-full flex justify-center">
          <a 
            href="/ashley-portfolio/CV_Ashley_K_IngSoftware.pdf"
            download="CV_Ashley_K_IngSoftware.pdf"
            className="flex items-center justify-center gap-4 bg-pink-600 hover:bg-pink-500 text-white font-black py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(219,39,119,0.6)] uppercase tracking-widest text-base md:text-lg w-full max-w-[340px]"
          >
            {/* Ícono de descarga forzado a ser blanco y visible */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>

            <span className="leading-none">Descargar CV</span>
          </a>
        </div>
      </div>

      {/* VISTA PREVIA XL - Aquí está el cambio para que sea GIGANTE */}
      <div className="w-[98vw] max-w-[1400px] bg-[#111] border border-white/5 rounded-[40px] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)] h-[1100px] relative">
        {/* Barra superior estilo navegador */}
        <div className="absolute top-0 left-0 right-0 bg-[#1a1a1a] p-5 border-b border-white/10 flex items-center justify-between px-10 z-20">
          <div className="flex gap-3">
            <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          </div>
          <span className="text-[12px] text-gray-400 font-black uppercase tracking-[0.4em]">Vista Previa del Documento</span>
          <div className="w-20"></div> 
        </div>
        
        {/* Iframe con ancho completo del 100% */}
        <iframe 
          src={cvPath} 
          className="w-full h-full border-none pt-16"
          style={{ width: '100%', height: '100%' }}
          title="Ashley CV Preview"
        />
      </div>
    </div>
  );
}