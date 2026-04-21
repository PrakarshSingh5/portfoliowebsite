import React from 'react';
import { education } from "../../constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="pt-24 px-[12vw] md:px-[7vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
          Academic <span className="text-secondary">Background</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        <p className="text-text-secondary mt-6 text-lg font-light max-w-2xl mx-auto">
          My education has been a journey of discovery and growth, building a strong foundation in engineering and problem solving.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent h-full z-0" />

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`relative z-10 flex flex-col sm:flex-row items-center mb-16 ${isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
            >
              {/* Timeline Dot */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10 shadow-glow-sm" />

              {/* Card */}
              <div
                className={`w-full sm:w-[45%] glass-card p-8 group transition-all duration-500 hover:-translate-y-2 ${isLeft ? "sm:ml-0 sm:mr-auto" : "sm:ml-auto sm:mr-0"
                  }`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-20 h-20 bg-surface-3 rounded-2xl p-2 border border-white/5 flex-shrink-0">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">{edu.degree}</h3>
                    <p className="text-text-secondary mt-1 font-medium">{edu.school}</p>
                    <p className="text-xs text-text-muted mt-2 uppercase tracking-widest bg-white/5 inline-block px-2 py-1 rounded">{edu.date}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-sm">
                    <span className="text-text-secondary">Performance</span>
                    <span className="text-primary font-bold">{edu.grade}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
