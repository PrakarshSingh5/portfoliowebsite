import React, { useEffect, useState } from 'react';
import { getTestimonials, postTestimonial } from '../../api/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
    avatarUrl: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
    };
    fetchData();
  }, []);

  const next = () => {
    if (testimonials.length > 0) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prev = () => {
    if (testimonials.length > 0) {
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTestimonial = await postTestimonial(formData);
    const updatedTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updatedTestimonials);
    setFormData({ name: '', role: '', message: '', avatarUrl: '' });
    setShowForm(false);
    setIndex(updatedTestimonials.length - 1); // fix: updated length
  };

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center pt-24 px-2 md:px-[7vw] lg:px-[20vw] bg-[#f6f6f6] min-h-screen"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Trust is built with<br />consistency</h2>
      </div>

      <button
        className="mb-10 px-8 py-3 rounded-full bg-gradient-to-r from-green-400 via-yellow-300 to-yellow-400 text-black font-semibold text-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 border-none outline-none focus:ring-2 focus:ring-yellow-300"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Cancel" : "Leave a Testimonial"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-300 mb-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-black"
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Your Role (e.g., Developer, Client)"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-black"
          />
          <input
            type="text"
            name="avatarUrl"
            placeholder="Avatar Image URL (optional)"
            value={formData.avatarUrl}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-black"
          />
          <textarea
            name="message"
            placeholder="Your Testimonial"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-black"
            required
          />
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            style={{
              background: 'linear-gradient(90deg, gray, black)',
            }}
          >
            Submit
          </button>
        </form>
      )}

      {testimonials.length > 0 ? (
        <div className="relative flex flex-col items-center w-full max-w-2xl">
          {/* Layered cards */}
          <div className="hidden sm:block absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[220px] rounded-3xl bg-yellow-300 z-0" style={{maxWidth:'90%'}}></div>
          <div className="hidden sm:block absolute top-3 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[220px] rounded-3xl bg-green-300 z-0" style={{maxWidth:'94%'}}></div>
          {/* Main testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col sm:flex-row items-center w-full max-w-full sm:max-w-2xl bg-black rounded-3xl shadow-xl px-4 sm:px-8 py-6 sm:py-8"
              style={{}}
            >
              {/* Avatar or colored circle */}
              <div className="flex flex-col items-center justify-center mb-4 sm:mb-0 sm:mr-8">
                {testimonials[index].avatarUrl ? (
                  <img
                    src={testimonials[index].avatarUrl}
                    alt={testimonials[index].name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-yellow-300 flex items-center justify-center text-black font-bold text-lg">
                    {testimonials[index].name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              {/* Testimonial text */}
              <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
                <p className="text-white text-base sm:text-lg mb-4 leading-relaxed break-words">
                  {testimonials[index].message}
                </p>
                <p className="text-gray-300 text-sm font-medium">
                  {testimonials[index].name}
                  {testimonials[index].role && (
                    <span className="ml-2 text-gray-400">{testimonials[index].role}</span>
                  )}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex gap-6 mt-12 z-20">
            <button
              onClick={prev}
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-2xl sm:text-3xl transition"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-2xl sm:text-3xl transition"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mt-6">No testimonials yet.</p>
      )}
    </section>
  );
};
