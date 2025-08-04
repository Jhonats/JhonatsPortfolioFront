export default function Legend() {
  return (
    /* Legend Shared */
    <div className="flex justify-center mb-8 sm:mb-12">
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-600/30 w-full max-w-4xl">
        <h3 className="text-base sm:text-lg font-orbitron text-white mb-3 sm:mb-4 text-center">
          Leyenda de Complejidad
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm font-orbitron">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-green-500 rounded"></div>
            <span className="text-green-400">Sencillo</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-purple-500 rounded"></div>
            <span className="text-purple-400">Intermedio</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-yellow-500 rounded border-wave-yellow"></div>
            <span className="text-yellow-400 wave-text-yellow">Complejo</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-red-500 rounded border-wave-red"></div>
            <span className="text-red-400 wave-text-red">Destacado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
