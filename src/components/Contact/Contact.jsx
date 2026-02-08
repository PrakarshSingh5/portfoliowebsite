import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary tracking-tight">Let's <span className="text-primary">Connect</span></h2>
              <p className="text-text-secondary text-lg mb-10 leading-relaxed font-light">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-white/80 rounded-full text-primary shadow-warm border border-white/50 group-hover:scale-110 transition-transform">
                  <Mail size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold tracking-wide text-lg">Email</h4>
                  <p className="text-text-secondary font-medium">prakarshsingh1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-white/80 rounded-full text-primary shadow-warm border border-white/50 group-hover:scale-110 transition-transform">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold tracking-wide text-lg">Location</h4>
                  <p className="text-text-secondary font-medium">India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-text-primary font-bold mb-6 tracking-wide text-lg">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/PrakarshSingh5" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/80 rounded-full text-text-secondary hover:text-primary hover:-translate-y-1 transition-all shadow-warm border border-white/50 hover:shadow-warm-hover">
                  <Github size={22} strokeWidth={1.5} />
                </a>
                <a href="https://www.linkedin.com/in/prakarshsinghdev/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/80 rounded-full text-text-secondary hover:text-primary hover:-translate-y-1 transition-all shadow-warm border border-white/50 hover:shadow-warm-hover">
                  <Linkedin size={22} strokeWidth={1.5} />
                </a>
                <a href="https://x.com/prakarshsingh_" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/80 rounded-full text-text-secondary hover:text-primary hover:-translate-y-1 transition-all shadow-warm border border-white/50 hover:shadow-warm-hover">
                  <Twitter size={22} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/60 shadow-warm bg-white/60">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-text-primary mb-2 tracking-wide">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/50 border border-white/40 rounded-xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-text-secondary/50 font-medium"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-2 tracking-wide">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/50 border border-white/40 rounded-xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-text-secondary/50 font-medium"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-text-primary mb-2 tracking-wide">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-white/50 border border-white/40 rounded-xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none placeholder:text-text-secondary/50 font-medium"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-hover transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30 tracking-wide"
              >
                Send Message <Send size={18} strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
