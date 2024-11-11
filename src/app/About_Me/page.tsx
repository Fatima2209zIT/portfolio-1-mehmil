"use client";
import Me2 from "@/app/public/me2.jpeg";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Pie chart data for each skill
  const skillsData = [
    {
      label: 'Next.js',
      data: [80, 20],
      color: '#A280AE',
      percentage: 80,
    },
    {
      label: 'TypeScript',
      data: [70, 30],
      color: '#FF9AA2',
      percentage: 70,
    },
    {
      label: 'HTML',
      data: [90, 10],
      color: '#E2F0CB',
      percentage: 90,
    },
    {
      label: 'CSS',
      data: [95, 5],
      color: '#B5EAD7',
      percentage: 95,
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-black text-white overflow-auto">
      <div className="text-center mb-20">
        <h1 className="font-sans font-bold underline decoration-sky-500 text-white mt-4 text-3xl sm:text-2xl">
          ABOUT ME
        </h1>
      </div>
      <div className="text-center mt-2">
        <a
          href="mailto:your-email@gmail.com"
          className="bg-blue-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-600"
        >
          Hire Me
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-x-8 w-full z-10 px-4">
        {/* About Me Section */}
        <div className="font-sans text-lg max-w-md mx-auto" data-aos="fade-right">
          <p>
            I am a versatile professional, combining my expertise as a teacher, front-end developer, programmer, and graphic designer.
            Currently, I work as a teacher at AL MUFLIHUN, sharing my knowledge and passion for technology.
            I am also learning AI and IT from GIAIC, striving to stay at the forefront of technological advancements.
            My skills in web development and graphic design allow me to create visually appealing, interactive websites with a creative touch.
          </p>
        </div>

        {/* Profile Image with Animation */}
        <div className="relative w-auto overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
          <img
            src={Me2.src}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full shadow-lg transform transition duration-500 ease-in-out hover:scale-110 animate-bounce-slow mt-4 md:mt-0"
          />
        </div>
        <div className="font-sans text-lg max-w-md mx-auto" data-aos="fade-right">
          <p>
            I am a dedicated front-end developer and graphic designer with a passion for blending aesthetics and functionality in my work.
            I specialize in building dynamic, user-friendly websites using modern technologies like Next.js, TypeScript, and Tailwind CSS. With a 
            background in teaching and programming, I bring creativity, problem-solving skills, and a love for continuous learning to every 
            project. Currently, I’m exploring the field of AI to broaden my skill set and stay updated on the latest tech trends. Whether
            developing websites or designing, I strive to create impactful digital experiences.
          </p>
        </div>
      </div>

      {/* Skills Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 w-full px-10">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h3 className="text-xl font-semibold text-center mb-4">{skill.label}</h3>
            {/* Increase pie chart size by adjusting the wrapper div */}
            <div className="relative" style={{ width: '260px', height: '260px' }}>
              <Pie
                data={{
                  labels: [skill.label, 'Remaining'],
                  datasets: [{
                    data: skill.data,
                    backgroundColor: [skill.color, '#1E1E1E'],
                    borderWidth: 1,
                  }],
                }}
                className="mx-auto"
              />
            </div>
            <p className="text-center mt-4 text-gray-300">{skill.label} - {skill.percentage}%</p>
            <p className="text-gray-400 mt-2 text-sm text-center">
              {`Proficient in ${skill.label}, bringing creativity and structure to projects with solid experience in this technology.`}
            </p>
          </div>
        ))}
      </div>

      {/* Styles for Slow Bounce Animation */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;















