import React from 'react';
import { SkillsInfo } from '../../constants';

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-text-primary tracking-tight">Technical <span className="text-slate-400">Skills</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto font-light">
            The technologies and tools I use to build scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillsInfo.map((category, index) => (
            <div key={index} className="glass-card p-8 border-none shadow-soft hover:shadow-card bg-white">
              <h3 className="text-lg font-medium text-text-primary mb-8 border-b border-slate-100 pb-4 tracking-tight">{category.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center p-2 group-hover:bg-slate-100 transition-colors">
                      {skill.logo ? (
                        <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <div className="w-full h-full bg-slate-200 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors text-center font-medium tracking-wide">{skill.name}</span>
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
