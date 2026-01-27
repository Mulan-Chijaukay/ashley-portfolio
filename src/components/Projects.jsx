export default function Projects() {
  const projs = [
    { 
      title: "Riesgo Crediticio Ecosistema", 
      desc: "Proyecto integral de BI: Limpieza en SQL, análisis en Python y Dashboard en Power BI.",
      tag: "Data Analytics"
    },
    { 
      title: "VetCare-Web", 
      desc: "Sistema web para clínica veterinaria con ASP.NET Core MVC e Indecopi.",
      tag: "Full Stack"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
      {projs.map(p => (
        <div key={p.title} className="flex-1 bg-white/5 border border-white/10 rounded-[35px] p-10 hover:border-pink-500/50 transition-all group relative overflow-hidden">
          <span className="absolute top-5 right-5 text-[9px] bg-pink-600 px-3 py-1 rounded-full font-black uppercase">{p.tag}</span>
          <h3 className="text-pink-500 font-black text-2xl mb-4 uppercase leading-tight mt-4">{p.title}</h3>
          <p className="text-gray-300 text-base leading-relaxed">{p.desc}</p>
          <div className="mt-8 h-1 w-12 bg-pink-500 group-hover:w-full transition-all duration-500"></div>
        </div>
      ))}
    </div>
  );
}