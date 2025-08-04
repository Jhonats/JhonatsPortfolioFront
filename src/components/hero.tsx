export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 animate-wave-text-slow">
          <span className="inline-block border-4 border-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg shadow-2xl shadow-red-600/50 animate-wave-border-slow">
            JHONATS
          </span>
        </h1>
        <div className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-lg md:text-xl text-white/80 font-orbitron animate-wave-slow">
          Full Stack Developer
        </div>
      </div>
    </section>
  );
}
