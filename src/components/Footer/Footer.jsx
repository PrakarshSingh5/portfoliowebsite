import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Logo and Copyright */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <a href="#hero" className="text-2xl font-bold tracking-tight text-text-primary group">
              Prakarsh<span className="text-primary group-hover:text-secondary transition-colors">.</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs text-center md:text-left font-light">
              Building high-performance systems and intelligent AI solutions for the modern web.
            </p>
            <p className="text-text-muted text-xs font-medium pt-2">
              © {new Date().getFullYear()} Prakarsh Singh. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-6">
            <h4 className="text-text-primary font-bold tracking-wider text-sm uppercase">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/PrakarshSingh5" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface-2 border border-white/5 rounded-xl text-text-secondary hover:text-primary hover:border-primary/50 transition-all shadow-sm">
                <Github size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/prakarshsinghdev/" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface-2 border border-white/5 rounded-xl text-text-secondary hover:text-primary hover:border-primary/50 transition-all shadow-sm">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="https://x.com/prakarshsingh_" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface-2 border border-white/5 rounded-xl text-text-secondary hover:text-primary hover:border-primary/50 transition-all shadow-sm">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="mailto:prakarshsingh1@gmail.com" className="p-3 bg-surface-2 border border-white/5 rounded-xl text-text-secondary hover:text-primary hover:border-primary/50 transition-all shadow-sm">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Useful Links & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <h4 className="text-text-primary font-bold tracking-wider text-sm uppercase">Navigation</h4>
            <div className="flex flex-col items-center md:items-end gap-3 text-sm text-text-secondary font-medium">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <button 
                onClick={scrollToTop}
                className="mt-4 flex items-center gap-2 px-4 py-2 bg-surface-3 border border-white/10 rounded-full text-xs hover:bg-primary/10 hover:text-primary hover:border-primary transition-all group"
              >
                Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-[100px] -z-10 translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-[80px] -z-10 -translate-y-1/2 -translate-x-1/2"></div>
    </footer>
  );
};
