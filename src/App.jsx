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
        {/* Subtle Background Pattern */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

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
