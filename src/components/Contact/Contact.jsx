import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi';

export const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nu0atgq",
        "template_d6fv09w",
        form.current,
        "L5BbELlTmpvAi2YsB"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-2 py-8 md:py-16 bg-white overflow-x-hidden"
    >
      <ToastContainer />
      {/* Heading */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-start">
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-bold text-gray-900 leading-none mb-8 ml-2 md:ml-0">Let's get</h1>
      </div>
      {/* Form */}
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-[80%] lg:w-[70%] flex flex-col gap-6"
        >
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-col gap-6 flex-1">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="w-full bg-white border-none rounded-md px-6 py-4 text-lg text-gray-900 placeholder-gray-500 shadow focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="E-mail"
                required
                className="w-full bg-white border-none rounded-md px-6 py-4 text-lg text-gray-900 placeholder-gray-500 shadow focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <textarea
                name="message"
                placeholder="Message"
                rows="2"
                required
                className="w-full h-full min-h-[112px] bg-white border-none rounded-md px-6 py-4 text-lg text-gray-900 placeholder-gray-500 shadow resize-none focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#18212A] text-white font-semibold text-lg py-4 rounded-md shadow hover:bg-[#222c38] transition"
          >
            Send message
          </button>
        </form>
        {/* Social Media Section */}
        <div className="w-full md:w-[80%] lg:w-[70%] mt-10 flex flex-col items-start">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our social media</h3>
          <div className="flex flex-wrap gap-8 text-lg text-gray-900">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Linkedin</a>
            <a href="mailto:hello@rerter.com" className="underline hover:text-black">hello@rerter.com</a>
            <a href="#" className="underline hover:text-black">Schedule a call</a>
          </div>
        </div>
      </div>
      {/* Connected - right bottom below form */}
      <div className="w-full max-w-[1200px] mx-auto flex justify-end mt-8 md:mt-16">
        <span className="text-[clamp(2.5rem,8vw,7rem)] font-bold text-gray-900 opacity-90 select-none pointer-events-none pr-2 md:pr-0" style={{lineHeight:1}}>connected</span>
      </div>
    </section>
  );
}
