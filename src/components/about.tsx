"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("sobre-mi");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div
        className={`text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-12">
          <Image
            src="/clancy.jpg"
            alt="Jhonatan Ferrer"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-red-600 shadow-2xl shadow-red-600/30"
          />
        </div>

        <h2 className="text-5xl font-bold text-white mb-4">Jhonatan Ferrer</h2>

        <h3 className="text-2xl font-orbitron text-red-500 mb-8">Jhonats</h3>

        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-gray-600/30">
          <p className="text-lg text-gray-300 leading-relaxed font-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}
