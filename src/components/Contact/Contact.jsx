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
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-text-primary tracking-tight">Let's <span className="text-slate-400">Connect</span></h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed font-light">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-white rounded-full text-slate-600 shadow-soft">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-text-primary font-medium tracking-wide">Email</h4>
                  <p className="text-text-secondary font-light">prakarsh.singh@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="p-4 bg-white rounded-full text-slate-600 shadow-soft">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-text-primary font-medium tracking-wide">Location</h4>
                  <p className="text-text-secondary font-light">India</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="text-text-primary font-medium mb-6 tracking-wide">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/PrakarshSingh5" className="p-4 bg-white rounded-full text-slate-500 hover:text-slate-800 hover:-translate-y-1 transition-all shadow-soft hover:shadow-lg">
                  <Github size={20} strokeWidth={1.5} />
                </a>
                <a href="https://www.linkedin.com/in/prakarshsinghdev/" className="p-4 bg-white rounded-full text-slate-500 hover:text-slate-800 hover:-translate-y-1 transition-all shadow-soft hover:shadow-lg">
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
                <a href="https://x.com/prakarshsingh_" className="p-4 bg-white rounded-full text-slate-500 hover:text-slate-800 hover:-translate-y-1 transition-all shadow-soft hover:shadow-lg">
                  <Twitter size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10 rounded-3xl border-none shadow-card bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2 tracking-wide">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all placeholder:text-slate-300 font-light"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2 tracking-wide">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all placeholder:text-slate-300 font-light"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2 tracking-wide">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all resize-none placeholder:text-slate-300 font-light"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-slate-800 text-white font-medium py-4 rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-200 tracking-wide"
              >
                Send Message <Send size={18} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
