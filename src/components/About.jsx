import React, { useState } from 'react';

export default function About() {
  const [activeInfo, setActiveInfo] = useState(null);

  const softSkills = [
    { name: "Trabajo en equipo", color: "border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" },
    { name: "Aprendizaje continuo", color: "border-green-500 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.6)]" },
    { name: "Resolución de problemas", color: "border-yellow-500 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.6)]" },
    { name: "Adaptabilidad", color: "border-purple-500 text-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.6)]" },
    { name: "Proactividad", color: "border-pink-500 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.6)]" },
    { name: "Empatía", color: "border-orange-500 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.6)]" },
    { name: "Ejecución de tareas", color: "border-cyan-500 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)]" },
    { name: "Responsabilidad", color: "border-red-500 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.6)]" }
  ];

  return (
    <div className="max-w-6xl w-full mx-auto space-y-32 py-10 animate-fade-in relative">
      
      {/* SECCIÓN 1: SOBRE MÍ */}
      <section className="bg-white/5 border border-white/10 rounded-[50px] p-12 md:p-16 backdrop-blur-xl relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-3 h-full bg-pink-600 shadow-[5px_0_40px_rgba(255,45,149,0.7)]"></div>
        <h2 className="text-pink-500 font-black text-5xl mb-10 uppercase italic tracking-[0.2em]">Sobre Mí</h2>
        <div className="max-w-5xl mx-auto space-y-8 text-gray-200 text-xl font-light leading-relaxed">
          <p>
            Soy <span className="text-pink-500 font-bold">Ashley Misae Kuniyoshi Zambrano</span>, estudiante de Ingeniería de Software en la Universidad San Ignacio de Loyola, actualmente cursando el <span className="text-pink-500 font-bold">séptimo ciclo</span> y ubicada dentro del Quinto Superior.
          </p>
          <p>
            Mi formación se orienta al desarrollo Full Stack, con énfasis en la comprensión y construcción de lógica backend, así como en el diseño de interfaces funcionales y orientadas al usuario. Me interesa aplicar principios de arquitectura de software, organización de datos y buenas prácticas de desarrollo para crear soluciones eficientes y mantenibles en entornos académicos y profesionales.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: TRAYECTORIA ACADÉMICA (ALINEACIÓN LINEAL) */}
      <section className="px-6 relative pb-64 z-10">
        <h2 className="text-pink-500 font-black text-3xl mb-32 uppercase text-center tracking-[0.3em] drop-shadow-[0_0_10px_rgba(255,45,149,0.5)]">
          Trayectoria Académica
        </h2>
        
        {/* LÍNEA BASE: Centrada verticalmente respecto a los puntos */}
        <div className="relative max-w-4xl mx-auto h-1.5 bg-pink-500/40 rounded-full flex items-center shadow-[0_0_15px_rgba(236,72,153,0.3)]">
          
          <div className="flex justify-around items-center w-full relative">
            
            {/* PUNTO 1: EDUCACIÓN */}
            <div className="flex flex-col items-center relative">
              <button 
                onClick={() => setActiveInfo(activeInfo === 'edu' ? null : 'edu')}
                /* Sin translate-y para que el flex-center del padre lo ponga al medio */
                className={`w-10 h-10 rounded-full border-4 z-20 transition-all duration-300 ${
                  activeInfo === 'edu' 
                  ? 'bg-white border-pink-500 scale-125 shadow-[0_0_30px_white]' 
                  : 'bg-pink-600 border-[#0a0a0a] hover:scale-110 shadow-[0_0_15px_rgba(255,45,149,0.5)]'
                }`}
              />
              {/* Texto posicionado con margen superior suficiente para despegarse de la línea */}
              <div className="absolute top-14 text-center w-48">
                <p className="text-pink-400 text-[10px] font-black uppercase tracking-widest leading-tight">Marzo 2023 - Actualidad</p>
                <p className="text-white font-bold text-sm uppercase">Educación Universitaria</p>
                <p className="text-gray-400 text-[10px] italic">Universidad San Ignacio de Loyola</p>
              </div>

              {/* RECUADRO DE INFORMACIÓN */}
              {activeInfo === 'edu' && (
              /* Cambié top-40 por top-32 para que suba */
              <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[350px] md:w-[500px] bg-[#12020a] border-2 border-pink-500/40 p-6 rounded-3xl shadow-[0_20px_50px_rgba(255,45,149,0.3)] animate-fade-in z-20">
                <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-6 h-6 bg-[#12020a] border-l-2 border-t-2 border-pink-500/40 rotate-45"></div>
                <p className="text-sm text-gray-200 leading-relaxed font-light italic">Formación universitaria orientada al desarrollo de competencias en ingeniería de software, abarcando programación, desarrollo web, bases de datos y arquitectura de sistemas. Mi malla curricular promueve un enfoque práctico mediante proyectos académicos desarrollados a lo largo de los cursos, fomentando el trabajo colaborativo, el análisis de requerimientos y la aplicación de buenas prácticas de desarrollo.</p>
              </div>
            )}
            </div>

            {/* PUNTO 2: PROYECTO */}
            <div className="flex flex-col items-center relative">
              <button 
                onClick={() => setActiveInfo(activeInfo === 'pro' ? null : 'pro')}
                className={`w-10 h-10 rounded-full border-4 z-20 transition-all duration-300 ${
                  activeInfo === 'pro' 
                  ? 'bg-white border-pink-500 scale-125 shadow-[0_0_30px_white]' 
                  : 'bg-pink-600 border-[#0a0a0a] hover:scale-110 shadow-[0_0_15px_rgba(255,45,149,0.5)]'
                }`}
              />
              <div className="absolute top-14 text-center w-48">
                <p className="text-pink-400 text-[10px] font-black uppercase tracking-widest leading-tight">Agosto 2025 - Actualidad</p>
                <p className="text-white font-bold text-sm uppercase">Proyecto Académico</p>
                <p className="text-gray-400 text-[10px] italic">Universidad San Ignacio de Loyola</p>
              </div>

              {activeInfo === 'pro' && (
              /* Cambié top-40 por top-32 para que suba */
              <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[350px] md:w-[500px] bg-[#12020a] border-2 border-pink-500/40 p-6 rounded-3xl shadow-[0_20px_50px_rgba(255,45,149,0.3)] animate-fade-in z-20">
                <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-6 h-6 bg-[#12020a] border-l-2 border-t-2 border-pink-500/40 rotate-45"></div>
                <p className="text-sm text-gray-200 leading-relaxed font-light italic">
                    Participación como desarrolladora de software en formación en un entorno académico–profesional, aplicando conceptos de frontend y backend. Intervine en el diseño e implementación de interfaces web utilizando HTML, CSS, JavaScript, Bootstrap y Thymeleaf, así como en el desarrollo de lógica backend con Java Spring Boot.
                    <br/><br/>
                    Formé parte del desarrollo de un Sistema de Gestión de Cultivos, colaborando con el equipo según requerimientos definidos por el docente. Proyecto supervisado a nivel universitario, válido para horas de voluntariado y con proyección a registro de propiedad intelectual (Indecopi).
                  </p>

              </div>
            )}
            </div>

          </div>
        </div>
      </section>
      

      {/* SECCIÓN 3: HERRAMIENTAS DE TRABAJO (GLOW NEÓN POTENCIADO ULTRA) */}
      <section className="bg-black/60 border border-white/10 rounded-[60px] p-12 md:p-20 mt-40">
        <h2 className="text-pink-500 font-black text-4xl mb-24 uppercase italic text-center tracking-tighter drop-shadow-[0_0_15px_#ff2d95]">
          Herramientas de Trabajo
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <SkillCategory title="Backend & Logística" skills={[
            {n: "Java", i: "devicon-java-plain", c: "#f89820"},
            {n: "Spring Boot", i: "devicon-spring-original", c: "#6db33f"},
            {n: "C++", i: "devicon-cplusplus-plain", c: "#00599c"},
            {n: "C#", i: "devicon-csharp-plain", c: "#239120"},
            {n: "Python", i: "devicon-python-plain", c: "#3776ab"}
          ]} />

          <SkillCategory title="Front-end & Web" skills={[
            {n: "HTML5", i: "devicon-html5-plain", c: "#e34f26"},
            {n: "CSS3", i: "devicon-css3-plain", c: "#1572b6"},
            {n: "JavaScript", i: "devicon-javascript-plain", c: "#f7df1e"},
            {n: "BootStrap", i: "devicon-bootstrap-plain", c: "#7952b3"},
            {n: "Thymeleaf", img: "https://cdn.simpleicons.org/thymeleaf/white", c: "#005f00"}
          ]} />

          <SkillCategory title="Bases de Datos & Análisis" skills={[
            {n: "SQL Server", i: "devicon-microsoftsqlserver-plain", c: "#a91d22"},
            {n: "PostgreSQL", i: "devicon-postgresql-plain", c: "#336791"},
            {n: "Power BI", isBarIcon: true, c: "#F2C811"}, 
            {n: "Jira", i: "devicon-jira-plain", c: "#0052cc"},
            {n: "Excel", isFlaticonExcel: true, c: "#217346"}
          ]} />
        </div>
      </section>



      {/* SECCIÓN 4: HABILIDADES BLANDAS */}
      <section className="px-6 pb-20 text-center">
        <h2 className="text-pink-500 font-black text-3xl mb-12 uppercase italic text-center tracking-widest">Habilidades Blandas</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {softSkills.map(skill => (
            <div key={skill.name} className={`px-8 py-4 border-2 rounded-2xl bg-black/40 backdrop-blur-md transition-all hover:scale-105 ${skill.color}`}>
              <p className="font-black text-sm uppercase tracking-tighter">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-pink-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 border-b-2 border-pink-500/20 pb-3 italic">
        {title}
      </h4>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map(s => (
          <div key={s.n} className="group relative flex flex-col items-center cursor-default">
            <div 
              className="transition-all duration-300 group-hover:scale-110"
              style={{ 
                filter: `
                  drop-shadow(0 0 8px ${s.c}) 
                  drop-shadow(0 0 20px ${s.c}) 
                  drop-shadow(0 0 45px ${s.c})
                ` 
              }}
            >
              {s.isFlaticonExcel ? (
            /* ICONO EXCEL DE CALIDAD (ESTILO FLATICON) */
            <img 
              src="https://cdn-icons-png.flaticon.com/512/732/732220.png" 
              className="w-12 h-12 mb-2 object-contain" 
              alt="Excel" 
            />
          ) : s.isBarIcon ? (
            /* ICONO DE POWER BI (BARRAS BLANCAS) */
            <svg className="w-12 h-12 mb-2 text-white fill-white" viewBox="0 0 24 24">
              <path d="M7 19h-4v-7h4v7zm6 0h-4v-11h4v11zm6 0h-4v-14h4v14z"/>
            </svg>
          ) : s.img ? (
            <img src={s.img} className="w-12 h-12 mb-2" alt={s.n} />
          ) : (
            <i className={`${s.i} text-5xl text-white mb-2`}></i>
          )}
        </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-10 bg-pink-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full whitespace-nowrap z-50">
              {s.n}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}