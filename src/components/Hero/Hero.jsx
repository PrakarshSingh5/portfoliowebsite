import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Download, Sparkles, Github, Linkedin, Mail } from 'lucide-react';

const roles = [
  'Backend Engineer',
  'AI Systems Architect',
  'Distributed Systems Dev',
  'LLM & Agentic AI Builder',
];

const StatCard = ({ value, label }) => (
  <div className="flex flex-col items-center px-5 py-3 rounded-xl bg-white/5 border border-white/8 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group cursor-default">
    <span className="text-2xl font-bold font-display text-text-primary group-hover:text-primary transition-colors">{value}</span>
    <span className="text-xs text-text-secondary mt-0.5 font-medium">{label}</span>
  </div>
);

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, 70);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, 35);
    } else {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-20"
    >
      {/* ── Ambient glow layers ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-primary/20 blur-[140px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/15 blur-[140px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none grid-overlay" />

      {/* ── Radial vignette ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #09090B 100%)' }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-20 items-center">

        {/* ══════════════ LEFT CONTENT ══════════════ */}
        <div className="space-y-8 animate-slide-up max-w-2xl">

          {/* Status pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-2 border border-border-light/50 text-sm font-medium text-text-secondary shadow-card group cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to full-time &amp; freelance work
          </div>

          {/* Name */}
          <div>
            <p className="text-text-secondary text-base font-medium mb-2 tracking-widest uppercase text-xs">
              Hey, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #fff 30%, #A78BFA 70%, #6366F1 100%)',
                }}
              >
                Prakarsh
              </span>
              <br />
              <span className="text-text-primary">Singh</span>
            </h1>
          </div>

          {/* Typewriter role */}
          <div className="flex items-center gap-3 h-9">
            <span className="text-xl sm:text-2xl font-mono text-text-secondary font-light">
              {'>'}&nbsp;
            </span>
            <span className="text-xl sm:text-2xl font-mono font-semibold text-primary">
              {displayed}
            </span>
            <span className="inline-block w-0.5 h-6 bg-primary animate-cursor-blink rounded-full" />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl font-light">
            I architect <span className="text-text-primary font-medium">high-performance backends</span> and build{' '}
            <span className="text-text-primary font-medium">AI agents</span> that turn complex data into
            intelligent action — shipping systems that are fast, resilient, and built for scale.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary CTA */}
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
                boxShadow: '0 0 24px rgba(99,102,241,0.35)',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={16} className="opacity-80" />
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-text-primary border border-border-light hover:border-primary/60 hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              Let's Talk
            </a>

            {/* Resume */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-text-secondary border border-border hover:border-border-light hover:text-text-primary transition-all duration-300"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-1">
            <a
              href="https://github.com/PrakarshSingh5"
              target="_blank" rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-surface-2 border border-border hover:border-border-light hover:bg-surface-3 hover:text-text-primary text-text-secondary transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              target="_blank" rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-surface-2 border border-border hover:border-border-light hover:bg-surface-3 hover:text-text-primary text-text-secondary transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#contact"
              aria-label="Email"
              className="p-2.5 rounded-xl bg-surface-2 border border-border hover:border-border-light hover:bg-surface-3 hover:text-text-primary text-text-secondary transition-all duration-200"
            >
              <Mail size={18} />
            </a>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-[80px]" />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 pt-2">
            <StatCard value="3+" label="Years Coding" />
            <StatCard value="15+" label="Projects Built" />
            <StatCard value="5+" label="AI Systems" />
          </div>
        </div>

        {/* ══════════════ RIGHT — Code Window ══════════════ */}
        <div className="hidden lg:block relative animate-fade-in w-[420px] shrink-0">

          {/* Glow behind card */}
          <div className="absolute inset-0 rounded-2xl blur-3xl scale-95"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)' }}
          />

          {/* Code window */}
          <div
            className="relative rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.7)] animate-float"
            style={{ background: 'rgba(14,14,18,0.95)', backdropFilter: 'blur(20px)' }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/8"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] ring-1 ring-black/20" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] ring-1 ring-black/20" />
                <div className="w-3 h-3 rounded-full bg-[#28C840] ring-1 ring-black/20" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs text-text-muted font-mono"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <Terminal size={11} className="text-primary" />
                <span>~/prakarsh/core.py</span>
              </div>
              <div className="w-16" />
            </div>

            {/* Code body */}
            <div className="px-6 py-5 font-mono text-sm leading-[1.9] select-none">
              {/* Line 1 */}
              <div className="flex items-start gap-4">
                <span className="text-text-muted text-right w-4 shrink-0 text-xs mt-0.5">1</span>
                <div>
                  <span className="text-violet-400">class </span>
                  <span className="text-yellow-300">Prakarsh</span>
                  <span className="text-text-secondary">(</span>
                  <span className="text-sky-400">Developer</span>
                  <span className="text-text-secondary">):</span>
                </div>
              </div>
              {/* Line 2 */}
              <div className="flex items-start gap-4">
                <span className="text-text-muted text-right w-4 shrink-0 text-xs mt-0.5">2</span>
                <div className="pl-4">
                  <span className="text-violet-400">def </span>
                  <span className="text-blue-400">__init__</span>
                  <span className="text-text-secondary">(self):</span>
                </div>
              </div>
              {/* Line 3 */}
              <div className="flex items-start gap-4">
                <span className="text-text-muted text-right w-4 shrink-0 text-xs mt-0.5">3</span>
                <div className="pl-8">
                  <span className="text-sky-300">self</span>
                  <span className="text-text-secondary">.</span>
                  <span className="text-text-primary">stack</span>
                  <span className="text-text-secondary"> = </span>
                  <span className="text-text-secondary">[</span>
                  <span className="text-emerald-300">"Go"</span>
                  <span className="text-text-secondary">, </span>
                  <span className="text-emerald-300">"NestJS"</span>
                  <span className="text-text-secondary">, </span>
                  <span className="text-emerald-300">"AI"</span>
                  <span className="text-text-secondary">]</span>
                </div>
              </div>
              {/* Line 4 */}
              <div className="flex items-start gap-4">
                <span className="text-text-muted text-right w-4 shrink-0 text-xs mt-0.5">4</span>
                <div className="pl-8">
                  <span className="text-sky-300">self</span>
                  <span className="text-text-secondary">.</span>
                  <span className="text-text-primary">passion</span>
                  <span className="text-text-secondary"> = </span>
                  <span className="text-emerald-300">"Building at scale"</span>
                </div>
              </div>
              {/* Blank line */}
              <div className="flex items-start gap-4">
                <span className="text-text-muted text-right w-4 shrink-0 text-xs mt-0.5">5</span>
                <div />
              </div>
              {/* Line 6 */}
              <div className="flex items-start gap-4">
                <span className="text-text-muted text-right w-4 shrink-0 text-xs mt-0.5">6</span>
                <div className="pl-4">
                  <span className="text-violet-400">async def </span>
                  <span className="text-blue-400">solve</span>
                  <span className="text-text-secondary">(</span>
                  <span className="text-orange-300">problem</span>
                  <span className="text-text-secondary">):</span>
                </div>
              </div>
              {/* Line 7 */}
              <div className="flex items-start gap-4">
                <span className="text-text-muted text-right w-4 shrink-0 text-xs mt-0.5">7</span>
                <div className="pl-8 flex items-center gap-1">
                  <span className="text-violet-400">return await </span>
                  <span className="text-blue-400">ship</span>
                  <span className="text-text-secondary">(</span>
                  <span className="text-emerald-300">"prod"</span>
                  <span className="text-text-secondary">)</span>
                </div>
              </div>
              {/* Cursor line */}
              <div className="flex items-center gap-4 mt-1">
                <span className="text-text-muted text-right w-4 shrink-0 text-xs">8</span>
                <span className="text-primary text-xs font-light">▍</span>
              </div>
            </div>

            {/* Terminal footer */}
            <div className="px-6 py-3 border-t border-white/8 flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-text-muted font-mono">python core.py — ready</span>
            </div>
          </div>

          {/* Floating badges */}
          <div
            className="absolute -left-10 top-[28%] flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 shadow-card animate-float"
            style={{
              background: 'rgba(14,14,20,0.9)',
              backdropFilter: 'blur(16px)',
              animationDelay: '0.5s',
            }}
          >
            <div className="p-2 rounded-lg"
              style={{ background: 'rgba(99,102,241,0.15)' }}
            >
              <span className="text-lg leading-none">🤖</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-muted font-semibold">Powered by</p>
              <p className="text-sm font-bold text-text-primary">LLMs &amp; AI Agents</p>
            </div>
          </div>

          <div
            className="absolute -right-8 bottom-[22%] flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 shadow-card animate-float"
            style={{
              background: 'rgba(14,14,20,0.9)',
              backdropFilter: 'blur(16px)',
              animationDelay: '1.2s',
            }}
          >
            <div className="p-2 rounded-lg"
              style={{ background: 'rgba(56,189,248,0.12)' }}
            >
              <span className="text-lg leading-none">🌐</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-muted font-semibold">Deployed on</p>
              <p className="text-sm font-bold text-text-primary">Global Cloud</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-50">
        <span className="text-xs text-text-muted font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
};
