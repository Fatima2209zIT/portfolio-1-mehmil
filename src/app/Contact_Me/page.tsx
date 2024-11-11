"use client";
import React from "react";

const ContactMe = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* "Contact Me" Heading */}
      <h1 className="absolute top-12 text-center text-3xl font-bold text-white mb-8 sm:text-4xl z-10">
        Contact Me
      </h1>

      {/* Circles for Background Decoration */}
      <div className="absolute top-10 left-10 animate-moveAndChange sm:w-12 sm:h-12 w-16 h-16">
        <div className="circle w-full h-full rounded-full bg-sky-500"></div>
      </div>
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 animate-moveAndChange delay-75 sm:w-8 sm:h-8 w-10 h-10">
        <div className="circle w-full h-full rounded-full bg-green-400"></div>
      </div>
      <div className="absolute bottom-10 left-1/4 transform -translate-x-1/4 animate-moveAndChange delay-150 sm:w-6 sm:h-6 w-8 h-8">
        <div className="circle w-full h-full rounded-full bg-red-500"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 animate-moveAndChange delay-200 sm:w-10 sm:h-10 w-12 h-12">
        <div className="circle w-full h-full rounded-full bg-yellow-500"></div>
      </div>
      {/* Additional Circles */}
      <div className="absolute top-1/4 left-1/4 animate-moveAndChange delay-250 sm:w-10 sm:h-10 w-14 h-14">
        <div className="circle w-full h-full rounded-full bg-purple-600"></div>
      </div>
      <div className="absolute bottom-20 right-1/2 animate-moveAndChange delay-300 sm:w-12 sm:h-12 w-18 h-18">
        <div className="circle w-full h-full rounded-full bg-pink-500"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 animate-moveAndChange delay-350 sm:w-14 sm:h-14 w-20 h-20">
        <div className="circle w-full h-full rounded-full bg-teal-400"></div>
      </div>

      {/* Contact Form */}
      <form
        action="mailto:mehmilzeeshan125@gmail.com"
        method="POST"
        encType="text/plain"
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full z-10 sm:max-w-md sm:w-full"
      >
        <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <label className="block text-white text-sm font-medium mb-2" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Styling for circles */}
      <style jsx>{`
        .circle {
          position: absolute;
          opacity: 0.6;
          animation: moveAndChange 8s infinite alternate;
        }
        @keyframes moveAndChange {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(-30px, -40px) scale(1.1);
            background-color: #f59e0b;
            opacity: 0.7;
          }
          50% {
            transform: translate(30px, 30px) scale(0.9);
            background-color: #3b82f6;
            opacity: 0.5;
          }
          75% {
            transform: translate(-20px, 20px) scale(1.2);
            background-color: #ec4899;
            opacity: 0.8;
          }
          100% {
            transform: translate(0, 0) scale(1);
            background-color: #10b981;
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactMe;


