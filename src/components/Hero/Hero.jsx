import React from 'react';
import { ArrowRight, Code2, Terminal, Cpu, Globe, Download } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-20">
            {/* Background Blobs for depth */}
            <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Content */}
                <div className="space-y-8 animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/60 shadow-sm backdrop-blur-md">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-text-secondary font-semibold text-sm tracking-wide uppercase">Open to Opportunities</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-text-primary tracking-tight">
                        Code that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Thinks</span>.<br />
                        Systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-500">Scale</span>.
                    </h1>

                    <p className="text-xl text-text-secondary max-w-lg leading-relaxed font-light">
                        I'm <span className="font-medium text-text-primary">Prakarsh Singh</span>. I architect high-performance backends and build AI agents that turn complex data into intelligent action.
                    </p>

                    <div className="flex flex-wrap gap-5 pt-4">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-text-primary text-white rounded-2xl font-semibold shadow-lg shadow-text-primary/20 hover:shadow-xl hover:shadow-text-primary/30 hover:-translate-y-1 transition-all overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Explore My Work
                                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 text-text-primary font-semibold bg-white border border-white/60 rounded-2xl hover:bg-white/80 transition-all shadow-sm hover:shadow-md backdrop-blur-sm"
                        >
                            Let's Talk
                        </a>
                        <a
                            href="#"
                            className="px-8 py-4 text-text-primary font-semibold bg-white border border-white/60 rounded-2xl hover:bg-white/80 transition-all shadow-sm hover:shadow-md backdrop-blur-sm flex items-center gap-2"
                        >
                            <span>Resume</span>
                            <Download size={18} strokeWidth={2.5} />
                        </a>
                    </div>

                    {/* Tech Stack Mini Indicators */}
                    <div className="pt-8 flex items-center gap-6 text-text-secondary/60">
                         <div className="flex items-center gap-2">
                            <Code2 size={20} /> <span className="text-sm font-medium">Clean Code</span>
                         </div>
                         <div className="w-1 h-1 rounded-full bg-current"></div>
                         <div className="flex items-center gap-2">
                            <Cpu size={20} /> <span className="text-sm font-medium">AI Engineering</span>
                         </div>
                         <div className="w-1 h-1 rounded-full bg-current"></div>
                         <div className="flex items-center gap-2">
                            <Globe size={20} /> <span className="text-sm font-medium">Scalable Sys</span>
                         </div>
                    </div>
                </div>

                {/* Right Visual - Modern Abstract Code Window */}
                <div className="relative hidden lg:block animate-fade-in delay-200">
                     {/* Floating Elements Background */}
                     <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-2xl opacity-20 animate-blob"></div>
                     <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-secondary to-yellow-400 rounded-full blur-2xl opacity-20 animate-blob animation-delay-2000"></div>

                    {/* Main Card */}
                    <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="ml-4 px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 font-mono flex items-center gap-2">
                                <Terminal size={12} />
                                ~/developer/core/brain.py
                            </div>
                        </div>

                        {/* Code Grid */}
                        <div className="space-y-3 font-mono text-sm leading-relaxed">
                            <div className="flex gap-4">
                                <span className="text-slate-600 text-right w-6 select-none">1</span>
                                <span className="text-purple-400">class</span> <span className="text-yellow-300">Developer</span>:
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-600 text-right w-6 select-none">2</span>
                                <span className="pl-4 text-slate-300">def</span> <span className="text-blue-400">__init__</span>(<span className="text-orange-300">self</span>):
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-600 text-right w-6 select-none">3</span>
                                <span className="pl-8 text-orange-300">self</span>.<span className="text-slate-300">name</span> = <span className="text-green-300">"Prakarsh Singh"</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-600 text-right w-6 select-none">4</span>
                                <span className="pl-8 text-orange-300">self</span>.<span className="text-slate-300">role</span> = <span className="text-green-300">"Backend & AI Engineer"</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-600 text-right w-6 select-none">5</span>
                                <span className="pl-8 text-orange-300">self</span>.<span className="text-slate-300">passion</span> = [<span className="text-green-300">"Scalability"</span>, <span className="text-green-300">"Automation"</span>]
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-600 text-right w-6 select-none">6</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-600 text-right w-6 select-none">7</span>
                                <span className="pl-4 text-slate-300">def</span> <span className="text-blue-400">build_future</span>(<span className="text-orange-300">self</span>):
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-600 text-right w-6 select-none">8</span>
                                <span className="pl-8 text-purple-400">return</span> <span className="text-green-300">"Innovative Solutions"</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-600 flex-none text-right w-6 select-none animate-pulse text-green-500">_</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge 1 */}
                    <div className="absolute -left-8 top-1/2 bg-white p-4 rounded-xl shadow-warm border border-white/60 animate-bounce hover:scale-105 transition-transform cursor-pointer">
                        <div className="flex items-center gap-3">
                             <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                <Cpu size={20} />
                             </div>
                             <div>
                                 <p className="text-xs text-text-secondary font-medium uppercase">Powered By</p>
                                 <p className="text-sm font-bold text-text-primary">LLMs & AI</p>
                             </div>
                        </div>
                    </div>

                     {/* Floating Badge 2 */}
                     <div className="absolute -right-4 bottom-8 bg-white p-4 rounded-xl shadow-warm border border-white/60 animate-bounce hover:scale-105 transition-transform cursor-pointer animation-delay-1500">
                        <div className="flex items-center gap-3">
                             <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                <Globe size={20} />
                             </div>
                             <div>
                                 <p className="text-xs text-text-secondary font-medium uppercase">Deployed On</p>
                                 <p className="text-sm font-bold text-text-primary">Global Cloud</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
