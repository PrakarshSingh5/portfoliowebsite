import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Skills } from './components/Skills/Skills';
import { About } from './components/About/About';
import { Education } from './components/Education/Education'
import { Work } from './components/Projects/projects'
import { Footer } from './components/Footer/Footer'
import { Contact } from './components/Contact/Contact'
// import { Testimonials } from './components/Testimonials/testimonials';
import LeetCodeProfile from './components/ProblemSolving/Problem'
import './App.css'
import BlurBlob from './BlurBlob'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-tahiti-dark">
          <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/testimonials" element={<Testimonials />} /> */}
            <Route path="/projects" element={<Work />} />
            <Route path ="/problems" element={<LeetCodeProfile/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
