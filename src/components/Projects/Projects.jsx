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
              className="group flex flex-col h-full rounded-2xl border border-border hover:border-border-light overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
              style={{ background: 'rgba(18,18,22,0.85)' }}
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden" style={{ background: '#111116' }}>
                {project.image && project.image !== 'https://via.placeholder.com/600x400' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(167,139,250,0.05))' }}
                  >
                    <Folder size={48} className="text-primary/30" strokeWidth={1.5} />
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-white border border-white/20 hover:bg-primary hover:border-primary hover:scale-110 transition-all shadow-lg"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                    title="View Code"
                  >
                    <Github size={20} strokeWidth={2} />
                  </a>
                  {project.webapp && project.webapp !== '#' && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full text-white border border-white/20 hover:bg-primary hover:border-primary hover:scale-110 transition-all shadow-lg"
                      style={{ background: 'rgba(255,255,255,0.1)' }}
                      title="View Live Demo"
                    >
                      <ExternalLink size={20} strokeWidth={2} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow border-t border-border/60">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors tracking-tight leading-snug">
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

                <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md font-medium text-text-secondary border border-border hover:border-primary/40 hover:text-primary transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
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
