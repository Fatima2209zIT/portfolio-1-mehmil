"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Me1 from "./public/me1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const words = ["FRONT-END DEVELOPER", "WEB DESIGNER", "PROGRAMMER", "TEACHER"];

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-black text-white overflow-hidden">
      {/* Color-Changing Circles */}
      <div className="colorChangeCircle top-10 left-10"></div>
      <div className="colorChangeCircle bottom-20 right-10"></div>
      <div className="colorChangeCircle bottom-10 left-1/2 transform -translate-x-1/2"></div>
      <div className="colorChangeCircle top-32 right-32"></div>
      <div className="colorChangeCircle bottom-40 left-20"></div>
      <div className="colorChangeCircle top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Main Container */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-8 p-6 sm:p-0">
        {/* Profile Image */}
        <div className="bounceImage mb-6 sm:mb-0">
          <Image src={Me1} alt="Profile Picture" />
        </div>

        {/* Text Container */}
        <div className="text-center sm:text-left">
          <h1 className="font-sans font-bold text-3xl sm:text-4xl">
            HI THIS IS MEHMIL/FATIMA,<br />
            WELCOME TO MY PORTFOLIO
          </h1>

          {/* Typewriter effect for words */}
          <div className="mt-4 text-2xl sm:text-3xl font-bold font-sans overflow-hidden whitespace-nowrap border-r-2 border-white max-w-[30ch] animate-typewriter">
            I AM {words[currentWordIndex]}
          </div>

          {/* About Section */}
          <p className="mt-4 text-lg max-w-md mx-auto sm:mx-0">
            I'm passionate about creating engaging and interactive web experiences. With a strong background in front-end development, I specialize in building responsive and visually appealing websites that leave a lasting impression.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center sm:justify-start space-x-6 mt-6">
            <a href="https://www.linkedin.com/in/mehmil-zeeshan-b340832b5" target="_blank" rel="noopener noreferrer" className="text-white transition-transform hover:scale-110 hover:brightness-125">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/mehmil2209z" target="_blank" rel="noopener noreferrer" className="text-white transition-transform hover:scale-110 hover:brightness-125">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.me/+923323882360" target="_blank" rel="noopener noreferrer" className="text-white transition-transform hover:scale-110 hover:brightness-125">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="/cv.png" download="My_CV" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
              Download CV
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .colorChangeCircle {
          position: absolute;
          width: 6rem;
          height: 6rem;
          background-color: pink;
          border-radius: 50%;
          opacity: 0.6;
          animation: colorChange 6s ease-in-out infinite;
        }

        .bounceImage {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: hidden;
          animation: slowBounce 3s infinite;
        }

        @keyframes colorChange {
          30% { background-color: #A280AE }     
          35% { background-color: #FF9AA2 }    
          40% { background-color: #E2F0CB }      
          45% { background-color: #B5EAD7 }   
          70% { background-color: #EE7EA0 }     
        }

        @keyframes slowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15%); }
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 8px rgba(255, 255, 255, 0.8); }
          50% { text-shadow: 0 0 16px rgba(255, 255, 255, 1); }
        }

        /* Media Queries for Mobile and Tablet Responsiveness */
        @media screen and (max-width: 640px) {
          .text-center {
            text-align: center;
          }

          .font-sans {
            font-size: 1.25rem;
          }

          .bounceImage {
            width: 120px;
            height: 120px;
          }

          .text-2xl {
            font-size: 1.5rem;
          }

          .max-w-md {
            max-width: 100%;
          }

          .colorChangeCircle {
            width: 4rem;
            height: 4rem;
          }
        }

        @media screen and (max-width: 768px) {
          .text-3xl {
            font-size: 2rem;
          }

          .sm:text-4xl {
            font-size: 2.5rem;
          }

          .p-6 {
            padding: 1.5rem;
          }

          .sm:space-x-8 {
            margin-left: 0;
            margin-right: 0;
          }

          .space-x-6 {
            gap: 1rem;
          }
        }

        @media screen and (min-width: 769px) {
          .flex-col {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;


