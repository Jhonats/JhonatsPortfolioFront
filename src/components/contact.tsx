"use client";
import { mail, socialLinks } from "@/constants/contact";

export default function Contact() {
  return (
    <section id="contactos" className="min-h-screen py-20 flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold font-orbitron text-white mb-16">
          Contactos
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Social Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-600/30 hover:border-red-600/50 transition-all duration-300 hover:scale-110 ${social.color}`}
              >
                <social.icon className="w-16 h-16 text-white group-hover:text-red-500 transition-colors duration-300 mb-4" />
                <span className="text-lg font-orbitron text-white group-hover:text-red-500 transition-colors duration-300">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* Email */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-600/30">
            <h3 className="text-2xl font-orbitron text-white mb-4">
              Correo Electrónico
            </h3>
            <a
              href="mailto:jhonatanalfonsoferrermartinez@gmail.com"
              className="text-xl text-red-400 hover:text-red-300 transition-colors duration-300 font-mono"
            >
              {mail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
