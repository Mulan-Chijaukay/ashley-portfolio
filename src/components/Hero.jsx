import React from 'react';

// Recibimos setSeccion para que el botón funcione
export default function Hero({ setSeccion }) {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center justify-center max-w-7xl mx-auto px-6 animate-fade-in relative z-10">
      
      {/* SECCIÓN SUPERIOR */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 text-center md:text-left w-full mb-16">
        <div className="flex-1">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8 italic">
            Ashley Misae <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-600 drop-shadow-[0_0_20px_rgba(255,45,149,0.5)]">
              Kuniyoshi Zambrano
            </span>
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-pink-500 text-sm font-black uppercase tracking-[0.3em]">
              Estudiante de Ingeniería de Software · Full Stack con enfoque Backend
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl font-medium leading-relaxed italic max-w-2xl">
              "Enfocada en construir soluciones de software estructuradas, mantenibles y orientadas a datos."
            </p>
          </div>
        </div>
        
        {/* Círculo decorativo */}
        <div className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-full border-[15px] border-white/5 p-4 relative group shrink-0">
          <div className="absolute inset-0 bg-pink-600 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-600/10 to-transparent backdrop-blur-3xl flex items-center justify-center border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(255,45,149,0.1)] transition-transform duration-500 group-hover:rotate-3">
             <span className="text-7xl grayscale opacity-10 italic font-black select-none tracking-tighter">ASHLEY</span>
          </div>
        </div>
      </div>

      {/* SECCIÓN INTERMEDIA: APORTE */}
      <div className="w-full bg-white/5 border border-white/10 rounded-[50px] p-10 md:p-16 mb-16 backdrop-blur-md shadow-2xl">
        <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest mb-8 text-center md:text-left">
          ¿ Qué aporto al equipo ?
        </h3>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium max-w-5xl">
          Pensamiento lógico, buenas prácticas de desarrollo y una base sólida en backend y bases de datos para equipos de desarrollo en formación y crecimiento.
        </p>
      </div>

      {/* SECCIÓN INFERIOR: IDIOMAS Y UBICACIÓN RESALTADOS */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/5 pt-12">
        <div className="flex gap-10 text-center md:text-left">
          <div className="flex flex-col">
            <span className="text-pink-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Idiomas</span>
            <p className="text-white text-sm font-bold uppercase tracking-tighter">Español: Nativo</p>
            <p className="text-white text-sm font-bold uppercase tracking-tighter">Inglés: Intermedio</p>
          </div>

          {/* Ubicación ahora brilla igual que idiomas */}
          <div className="flex flex-col">
            <span className="text-pink-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Ubicación</span>
            <p className="text-white text-sm font-bold uppercase tracking-tighter">Lima, Perú 🇵🇪</p>
          </div>
        </div>

        {/* Botón de navegación */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <button 
            onClick={() => setSeccion('contacto')} 
            className="px-16 py-6 bg-pink-600 hover:bg-pink-500 text-white font-black rounded-full uppercase text-sm tracking-[0.2em] transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(219,39,119,0.4)]"
          >
            ¿Trabajamos juntos?
          </button>
          <span className="text-gray-600 font-black italic uppercase text-[10px] tracking-widest animate-pulse">
            Disponible para prácticas
          </span>
        </div>
      </div>
    </div>
  );
}