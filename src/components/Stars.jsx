export default function Stars() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#0d0108] overflow-hidden">
      {[...Array(120)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse opacity-70"
          style={{
            width: Math.random() * 3 + 'px',
            height: Math.random() * 3 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDuration: (Math.random() * 3 + 2) + 's',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            // Movimiento dinámico
            animation: `float ${(Math.random() * 10 + 10)}s infinite linear`
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-100vh); }
        }
      `}</style>
    </div>
  );
}