"use client";

import { useState } from "react";
import { DiJava, DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const skillsData = [
  {
    language: "Java",
    logo: <DiJava />,
    skills: [
      { name: "Java SE 8, 11 y 17", level: 85 },
      { name: "JPA", level: 80 },
      { name: "JDBC", level: 75 },
      { name: "Hibernate", level: 70 },
      { name: "Jakarta", level: 65 },
    ],
    frameworks: [
      {
        name: "Spring Boot",
        logo: "🍃",
        skills: [
          { name: "Spring Boot", level: 85 },
          { name: "Spring Security", level: 80 },
          { name: "Spring Boot Cloud", level: 70 },
        ],
      },
    ],
  },
  {
    language: "JavaScript",
    logo: <DiJavascript />,
    skills: [
      { name: "Fetch", level: 90 },
      { name: "DOM", level: 85 },
      { name: "ECMAScript", level: 80 },
      { name: "Asyncronism", level: 75 },
    ],
    frameworks: [
      {
        name: "Next.js",
        logo: "⚡",
        skills: [
          { name: "Parallel Routing", level: 75 },
          { name: "Server Side Rendering", level: 80 },
          { name: "Hidratation", level: 70 },
        ],
      },
    ],
  },
  {
    language: "TypeScript",
    logo: <SiTypescript />,
    skills: [
      { name: "Type Safety", level: 85 },
      { name: "Interfaces", level: 80 },
      { name: "Generics", level: 75 },
      { name: "Decorators", level: 70 },
    ],
    frameworks: [],
  },
];

export default function Skills() {
  return (
    <section id="conocimientos" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold font-orbitron text-center text-white mb-16">
          Conocimientos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600/30 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-2 justify-center text-center flex">
                  {skill.logo}
                </div>
                <h3 className="text-2xl text-white">{skill.language}</h3>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-orbitron text-red-400 mb-4">
                  Conocimientos:
                </h4>
                {skill.skills.map((item, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-red-600 to-red-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {skill.frameworks.map((framework, fIdx) => (
                <div key={fIdx}>
                  <div className="text-center mb-4">
                    <div className="text-2xl mb-">{framework.logo}</div>
                    <h4 className="text-lg text-gray-300">
                      Framework: {framework.name}
                    </h4>
                  </div>

                  <div>
                    <h5 className="text-md text-red-400 mb-3">
                      Conocimientos:
                    </h5>
                    {framework.skills.map((item, idx) => (
                      <div key={idx} className="mb-3">
                        <div className="flex justify-between text-sm text-gray-300 mb-1">
                          <span>{item.name}</span>
                          <span>{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-600 to-green-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
