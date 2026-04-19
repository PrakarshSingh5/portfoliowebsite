import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-background min-h-screen text-text-primary overflow-x-hidden">
      <Navbar />

      <main className="relative">
        {/* Dark Ambient Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-15%] left-[-5%] w-[600px] h-[600px] bg-primary/15 rounded-full filter blur-[120px] animate-blob"></div>
          <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full filter blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[25%] w-[700px] h-[700px] bg-accent/8 rounded-full filter blur-[140px] animate-blob animation-delay-4000"></div>
        </div>

        {/* Subtle grid overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 grid-overlay opacity-60"></div>

        <div className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
