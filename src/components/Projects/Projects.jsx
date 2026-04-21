import React from 'react';
import { projects } from '../../constants';
import { Github, ExternalLink, Folder, ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden scroll-mt-32">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-text-secondary text-xs font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary tracking-tight">
            Featured <span className="text-gradient-static">Projects</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card group flex flex-col h-full overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-surface-3">
                {project.image && project.image !== 'https://via.placeholder.com/600x400' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/5">
                    <Folder size={48} className="text-primary/20" strokeWidth={1.5} />
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-white bg-white/10 border border-white/10 hover:bg-primary hover:border-primary hover:scale-110 transition-all shadow-glow-sm"
                    title="View Code"
                  >
                    <Github size={20} strokeWidth={2} />
                  </a>
                  {project.webapp && project.webapp !== '#' && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl text-white bg-white/10 border border-white/10 hover:bg-primary hover:border-primary hover:scale-110 transition-all shadow-glow-sm"
                      title="View Live Demo"
                    >
                      <ExternalLink size={20} strokeWidth={2} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow border-t border-white/5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  {project.webapp && project.webapp !== '#' ? (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary transition-colors shrink-0 ml-2"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  ) : null}
                </div>

                <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2.5 py-1 rounded-md font-bold text-text-muted border border-white/5 bg-white/5 uppercase tracking-wider hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/PrakarshSingh5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-border-light text-text-secondary hover:text-text-primary transition-all font-medium text-sm group"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <Github size={16} />
            View more on GitHub
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
