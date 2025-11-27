import React from 'react';
import { projects } from '../../constants';
import { Github, ExternalLink, Folder } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-text-primary tracking-tight">Featured <span className="text-slate-400">Projects</span></h2>
          <div className="w-16 h-0.5 bg-slate-300"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-500 border-none shadow-soft hover:shadow-card bg-white">
              {/* Image Placeholder or Actual Image */}
              <div className="h-56 bg-slate-100 relative overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-50">
                    <Folder size={48} className="text-slate-300" strokeWidth={1} />
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-slate-800 hover:scale-110 transition-transform shadow-lg">
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                  <a href={project.webapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-slate-800 hover:scale-110 transition-transform shadow-lg">
                    <ExternalLink size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-medium text-text-primary mb-3 group-hover:text-slate-600 transition-colors tracking-tight">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-slate-50 rounded-full text-slate-500 font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://github.com/PrakarshSingh5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors font-medium tracking-wide text-sm border-b border-transparent hover:border-text-primary pb-1">
            View more on GitHub <ExternalLink size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};
