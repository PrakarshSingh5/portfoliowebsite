
import React from 'react';
import { Code, Server, Database, Cpu } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary tracking-tight">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-text-secondary text-lg leading-relaxed font-light animate-slide-up">
            <p>
              Hello! I'm <span className="text-text-primary font-medium border-b-2 border-primary/20">Prakarsh Singh</span>, a passionate Backend Developer and AI Automation Engineer.
              My journey in tech is driven by a curiosity to understand how complex systems work and a desire to build solutions that make a real impact.
            </p>
            <p>
              I specialize in building <span className="text-text-primary font-medium">scalable backend architectures</span>, designing efficient APIs, and integrating <span className="text-text-primary font-medium">AI agents</span> to automate workflows.
              Whether it's optimizing database queries or deploying microservices, I love the challenge of solving engineering problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest in AI research, contributing to open source, or refining my problem-solving skills on LeetCode.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 border border-white/40 shadow-warm hover:shadow-warm-hover bg-white/60">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Server size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-text-primary text-lg">Backend Dev</h3>
              <p className="text-sm text-text-secondary font-medium">Node.js, Go, Microservices</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 border border-white/40 shadow-warm hover:shadow-warm-hover bg-white/60">
              <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                <Cpu size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-text-primary text-lg">AI Automation</h3>
              <p className="text-sm text-text-secondary font-medium">LangChain, LLMs, Agents</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 border border-white/40 shadow-warm hover:shadow-warm-hover bg-white/60">
              <div className="p-3 bg-accent/30 rounded-full text-yellow-600">
                <Database size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-text-primary text-lg">Database</h3>
              <p className="text-sm text-text-secondary font-medium">Postgres, Redis, Mongo</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 border border-white/40 shadow-warm hover:shadow-warm-hover bg-white/60">
              <div className="p-3 bg-slate-100 rounded-full text-slate-600">
                <Code size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-text-primary text-lg">Clean Code</h3>
              <p className="text-sm text-text-secondary font-medium">TypeScript, Testing, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
