import React from 'react';
import { SkillsInfo } from '../../constants';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary tracking-tight">
            Technical <span className="text-secondary">Skills</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto font-light text-lg">
            The technologies and tools I use to build scalable, intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillsInfo.map((category, index) => (
            <div key={index} className="glass-card p-8 border border-white/50 shadow-warm hover:shadow-warm-hover bg-white/60 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-text-primary mb-8 border-b border-primary/10 pb-4 tracking-tight">{category.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-3 shadow-sm border border-slate-100 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300">
                      {skill.logo ? (
                        <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100" />
                      ) : (
                        <div className="w-full h-full bg-slate-200 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-xs text-text-secondary group-hover:text-primary transition-colors text-center font-medium tracking-wide">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
