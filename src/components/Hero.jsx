export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 text-center md:text-left max-w-6xl">
      <div className="flex-1">
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
          Ashley Misae <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-600 drop-shadow-[0_0_15px_rgba(255,45,149,0.3)]">
            Kuniyoshi Zambrano
          </span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
          Software Dev Student | <span className="text-white font-medium italic">Backend & DB enthusiast</span>. 
          Enfocada en construir sistemas limpios y escalables. 🇵🇪
        </p>
        <button className="mt-10 px-10 py-4 bg-pink-600 rounded-full font-black uppercase text-xs tracking-widest hover:bg-pink-500 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,45,149,0.3)]">
          Conectar
        </button>
      </div>
      
      {/* Círculo para tu imagen */}
      <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-[12px] border-pink-500/10 p-4 relative">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-600/20 to-fuchsia-900/20 backdrop-blur-2xl flex items-center justify-center border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(255,45,149,0.15)]">
           {/* Aquí pondrás tu foto después */}
           <span className="text-6xl grayscale opacity-20 italic font-black">ASHLEY</span>
        </div>
      </div>
    </div>
  );
}