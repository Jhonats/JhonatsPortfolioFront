import Image from "next/image";

export default function Education() {
  return (
    <section id="educacion" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold font-orbitron text-center text-white mb-16">
          Educación
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bachillerato */}
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-gray-600/30 hover:border-red-600/50 transition-all duration-300">
            <div className="mb-6">
              <Image
                src="/vdlch.jpg"
                alt="Bachillerato Logo"
                width={250}
                height={250}
                className="mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <h3 className="text-2xl font-orbitron text-white mb-4">
              Bachillerato
            </h3>

            <p className="text-lg text-gray-300 ">
              U.E Virgen de la Chiquinquirá
            </p>

            <div className="mt-4 text-sm text-red-500">2015 - 2020</div>
          </div>

          {/* TSU */}
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-gray-600/30 hover:border-red-600/50 transition-all duration-300">
            <div className="mb-6">
              <Image
                src="/iutepal.png"
                alt="Universidad Logo"
                width={250}
                height={250}
                className="mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <h3 className="text-2xl text-white mb-4">
              Técnico Superior Universitario en Informática
            </h3>

            <span className="text-lg text-gray-300">
              Instituto Universitario de Tecnología Juan Pablo Pérez Alfonzo
              (IUTEPAL).
            </span>

            <div className="mt-4 text-sm text-red-500">2021 - 2023</div>
          </div>
        </div>
      </div>
    </section>
  );
}
