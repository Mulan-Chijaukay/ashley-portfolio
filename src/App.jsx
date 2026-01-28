import { useState } from 'react';
import Stars from './components/Stars';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

function App() {
  const [seccion, setSeccion] = useState('inicio');

  const NavButton = ({ id, label }) => (
    <button 
      onClick={() => setSeccion(id)}
      className={`transition-all duration-300 cursor-pointer whitespace-nowrap ${seccion === id ? 'text-pink-600 font-black scale-110' : 'text-gray-500 font-bold hover:text-pink-400'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen text-white font-['Plus_Jakarta_Sans'] overflow-x-hidden">
      <Stars />
      
      {/* Header con alto contraste */}
      <nav className="fixed top-0 w-full z-50 bg-[#f3f4f6] border-b border-gray-200 shadow-sm">
        <div className="w-full px-6 md:px-12 py-5 flex justify-between items-center text-black">
          <span className="font-black text-lg md:text-xl tracking-tighter uppercase whitespace-nowrap italic">
            Ashley Misae <span className="text-pink-600 font-extrabold">Kuniyoshi Zambrano</span>
          </span>
          
          <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-widest overflow-x-auto no-scrollbar ml-4">
            <NavButton id="inicio" label="Inicio" />
            <NavButton id="sobre-mi" label="Sobre Mí" />
            <NavButton id="certificados" label="Certificados" />
            <NavButton id="proyectos" label="Proyectos" />
            <NavButton id="cv" label="CV" />
            <NavButton id="contacto" label="Contacto" />
          </div>
        </div>
      </nav>

      {/* Solo se muestra el módulo seleccionado */}
      <main className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        
        {seccion === 'inicio' && <Hero setSeccion={setSeccion} />}
        {seccion === 'sobre-mi' && <About />}
        {seccion === 'certificados' && <Certificates />}
        {seccion === 'proyectos' && <Projects />}
        {seccion === 'cv' && <CV />}
        {seccion === 'contacto' && <Contact />}
      </main>

      <Footer />

    </div>
  );
}

export default App;