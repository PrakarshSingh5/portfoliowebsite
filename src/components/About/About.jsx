import React from 'react';
import { Code, Server, Database, Cpu } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-text-primary tracking-tight">About <span className="text-slate-400">Me</span></h2>
          <div className="w-16 h-0.5 bg-slate-300"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-text-secondary text-lg leading-relaxed font-light">
            <p>
              Hello! I'm <span className="text-text-primary font-medium">Prakarsh Singh</span>, a passionate Backend Developer and AI Automation Engineer.
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

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform border-none shadow-soft hover:shadow-card bg-white">
              <div className="p-4 bg-slate-50 rounded-2xl text-slate-600">
                <Server size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-medium text-text-primary text-lg">Backend Dev</h3>
              <p className="text-sm text-text-secondary font-light">Node.js, Go, Microservices</p>
            </div>
            <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform border-none shadow-soft hover:shadow-card bg-white">
              <div className="p-4 bg-slate-50 rounded-2xl text-slate-600">
                <Cpu size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-medium text-text-primary text-lg">AI Automation</h3>
              <p className="text-sm text-text-secondary font-light">LangChain, LLMs, Agents</p>
            </div>
            <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform border-none shadow-soft hover:shadow-card bg-white">
              <div className="p-4 bg-slate-50 rounded-2xl text-slate-600">
                <Database size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-medium text-text-primary text-lg">Database</h3>
              <p className="text-sm text-text-secondary font-light">Postgres, Redis, Mongo</p>
            </div>
            <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform border-none shadow-soft hover:shadow-card bg-white">
              <div className="p-4 bg-slate-50 rounded-2xl text-slate-600">
                <Code size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-medium text-text-primary text-lg">Clean Code</h3>
              <p className="text-sm text-text-secondary font-light">TypeScript, Testing, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
