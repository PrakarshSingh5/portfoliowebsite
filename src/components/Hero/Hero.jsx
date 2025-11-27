import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Very Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-10 animate-fadeIn">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-slate-600 font-medium text-xs tracking-wide uppercase">Available for work</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] text-text-primary tracking-tight">
                        Building <br />
                        <span className="text-slate-400">Intelligent</span> Systems.
                    </h1>

                    <p className="text-lg text-text-secondary max-w-md leading-relaxed font-light">
                        I'm Prakarsh Singh, a Backend Developer & AI Engineer. I craft scalable architectures and automated workflows with precision and care.
                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <a
                            href="#projects"
                            className="group flex items-center gap-3 text-text-primary font-medium hover:opacity-70 transition-opacity"
                        >
                            View Projects
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                <ArrowRight size={18} strokeWidth={1.5} />
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="text-text-secondary hover:text-text-primary transition-colors font-medium"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Minimalist Abstract Visual - Just a clean shape */}
                        <div className="absolute inset-0 bg-slate-100 rounded-full opacity-50 blur-3xl transform translate-x-10 translate-y-10"></div>
                        <div className="relative w-full h-full bg-gradient-to-tr from-slate-50 to-slate-100 rounded-[2rem] border border-white shadow-soft flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
                            <div className="text-[10rem] font-light text-slate-200 select-none tracking-tighter">PS</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
