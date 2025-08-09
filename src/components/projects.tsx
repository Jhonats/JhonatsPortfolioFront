"use client";

import { projects } from "@/constants/projects";
import Image from "next/image";
import { useState } from "react";
import Legend from "@/components/shared/legend";

const complexityStyles = {
  sencillo:
    "border-green-500 shadow-green-500/30 bg-gradient-to-br from-green-900/20 to-green-800/10",
  intermedio:
    "border-purple-500 shadow-purple-500/30 bg-gradient-to-br from-purple-900/20 to-purple-800/10",
  complejo:
    "border-yellow-500 shadow-yellow-500/50 bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border-wave-yellow",
  destacado:
    "border-red-500 shadow-red-500/70 bg-gradient-to-br from-red-900/30 to-red-800/20 border-wave-red",
};

const complexityColors = {
  sencillo: "text-green-400",
  intermedio: "text-purple-400",
  complejo: "text-yellow-400 wave-text-yellow",
  destacado: "text-red-400 wave-text-red",
};

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="proyectos" className="min-h-screen py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron text-center text-white mb-6 sm:mb-8">
          Proyectos Destacados
        </h2>

        <Legend />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                complexityStyles[
                  project.complexity as keyof typeof complexityStyles
                ]
              } border-2 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={`w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 ${
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-white p-4">
                      <h3 className="text-lg sm:text-xl font-orbitron mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <h3
                  className={`text-base sm:text-lg font-orbitron ${
                    complexityColors[
                      project.complexity as keyof typeof complexityColors
                    ]
                  }`}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-4 sm:px-6 py-2 rounded-lg font-orbitron transition-colors duration-300 text-sm sm:text-base"
          >
            ← Anterior
          </button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  currentPage === index ? "bg-red-600" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
            }
            disabled={currentPage === totalPages - 1}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-4 sm:px-6 py-2 rounded-lg font-orbitron transition-colors duration-300 text-sm sm:text-base"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </section>
  );
}
