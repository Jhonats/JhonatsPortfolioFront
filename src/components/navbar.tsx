"use client";

import { useState, useEffect } from "react";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mi", href: "#sobre-mi" },
  { name: "Conocimientos", href: "#conocimientos" },
  { name: "Proyectos Destacados", href: "#proyectos" },
  { name: "Educación", href: "#educacion" },
  { name: "Certificados", href: "#certificados" },
  { name: "Contactos", href: "#contactos" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/20 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center">
          <ul className="flex space-x-8 flex-wrap justify-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-white font-orbitron text-sm 
                    hover:text-red-500 hover:scale-110 
                    transition-all duration-300 px-3 py-2 
                    rounded-lg hover:bg-gray-800/30`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
