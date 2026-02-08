import React from 'react';
import { projects } from '../../constants';
import { Github, ExternalLink, Folder, ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary tracking-tight">
            Featured <span className="text-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-white/60 shadow-warm hover:shadow-warm-hover bg-white/40 flex flex-col h-full rounded-2xl">
              <div className="relative h-60 overflow-hidden bg-slate-50">
                 {project.image && project.image !== "https://via.placeholder.com/600x400" ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
                    <Folder size={48} className="text-primary/30" strokeWidth={1.5} />
                  </div>
                )}
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-text-primary rounded-full hover:scale-110 hover:bg-primary hover:text-white transition-all shadow-lg" title="View Code">
                    <Github size={20} strokeWidth={2} />
                  </a>
                  {project.webapp && project.webapp !== '#' && (
                    <a href={project.webapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-text-primary rounded-full hover:scale-110 hover:bg-primary hover:text-white transition-all shadow-lg" title="View Live Demo">
                      <ExternalLink size={20} strokeWidth={2} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
                  {project.webapp && project.webapp !== '#' ? (
                      <a href={project.webapp} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                        <ArrowUpRight size={18} />
                      </a>
                  ) : null}
                </div>
                
                <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed font-normal">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-white/60 border border-white rounded-full text-text-secondary font-medium tracking-wide shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://github.com/PrakarshSingh5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-border shadow-sm text-text-primary hover:text-primary hover:border-primary/30 transition-all font-medium tracking-wide text-sm group">
            View more on GitHub <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
