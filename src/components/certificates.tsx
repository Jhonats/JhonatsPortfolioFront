"use client";

import { useState } from "react";
import Image from "next/image";
import { certificates } from "@/constants/certificates";
import Legend from "@/components/shared/legend";

const importanceStyles = {
  basic:
    "border-green-500 shadow-green-500/30 bg-gradient-to-br from-green-900/20 to-green-800/10",
  medium:
    "border-purple-500 shadow-purple-500/30 bg-gradient-to-br from-purple-900/20 to-purple-800/10",
  hard: "border-yellow-500 shadow-yellow-500/50 bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border-wave-yellow",
  rated:
    "border-red-500 shadow-red-500/70 bg-gradient-to-br from-red-900/30 to-red-800/20 border-wave-red",
};

const importanceColors = {
  basic: "text-green-400",
  medium: "text-purple-400",
  hard: "text-yellow-400 wave-text-yellow",
  rated: "text-red-400 wave-text-red",
};

export default function Certificates() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  const currentCertificates = certificates.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="certificados" className="min-h-screen py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron text-center text-white mb-6 sm:mb-8">
          Certificados
        </h2>

        <Legend />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          {currentCertificates.map((cert) => (
            <div
              key={cert.id}
              className={`backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 transition-all duration-300 hover:scale-105 ${
                importanceStyles[
                  cert.importance as keyof typeof importanceStyles
                ]
              }`}
            >
              <div className="mb-4">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="sm:h-44 md:h-60 object-contain rounded-lg"
                />
              </div>

              <h3
                className={`text-base sm:text-lg font-orbitron mb-2 ${
                  importanceColors[
                    cert.importance as keyof typeof importanceColors
                  ]
                }`}
              >
                {cert.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 mb-1">
                <span
                  className={`${
                    importanceColors[
                      cert.importance as keyof typeof importanceColors
                    ]
                  }`}
                >
                  Emitido por:
                </span>{" "}
                {cert.academy}
              </p>

              <p className="text-xs sm:text-sm text-gray-400">{cert.date}</p>
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
