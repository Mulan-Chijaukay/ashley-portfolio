export default function Skills() {
  const stack = [
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "C++", icon: "devicon-cplusplus-plain colored" },
    { name: "C#", icon: "devicon-csharp-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "BootStrap", icon: "devicon-bootstrap-plain colored" },
    { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white/5 border border-pink-500/20 rounded-[40px] p-8 md:p-16 backdrop-blur-md">
      <h2 className="text-pink-500 font-black text-2xl md:text-3xl mb-12 uppercase italic tracking-widest text-center">Habilidades Técnicas</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-14">
        {stack.map(s => (
          <div key={s.name} className="flex flex-col items-center group transition-all hover:scale-125">
            <i className={`${s.icon} text-5xl md:text-6xl`}></i>
            <span className="text-[10px] mt-4 font-bold text-gray-400 uppercase tracking-widest group-hover:text-pink-400 transition-colors">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}