"use client";
import React from "react";

const projects = [
  {
    name: "Abayiestic",
    description: "A dynamic website for showcasing abayas with a clean design and responsive layout.",
    link: "https://www.linkedin.com/posts/mehmil-zeeshan-b340832b5_assignment-1-completed-im-excited-activity-7260247753883086848--Bdo?utm_source=share&utm_medium=member_desktop",
    imgSrc: "/abayiestic.png", // Add an image path for your project
  },
  {
    name: "Travel Website",
    description: "A travel website built using HTML, CSS, and JavaScript to explore destinations.",
    link: "https://www.linkedin.com/posts/mehmil-zeeshan-b340832b5_exciting-news-im-thrilled-to-share-activity-7237506755692290048-JwT6?utm_source=share&utm_medium=member_desktop",
    imgSrc: "/travel.png", // Add an image path for your project
  },
  {
    name: "Cute Greeting Cards",
    description: "A collection of adorable greeting cards designed with personalized messages and interactive features.",
    link: "https://make-your-cute-greeting-card.vercel.app/",
    imgSrc: "/cute.png", // Add an image path for your project
  },
  {
    name: "Login Page",
    description: "A stylish and responsive login page with a user-friendly interface.",
    link: "https://www.linkedin.com/posts/mehmil-zeeshan-b340832b5_asalam-alikum-i-have-made-a-login-form-using-activity-7236237167461621760-Jafi?utm_source=share&utm_medium=member_desktop",
    imgSrc: "/login.png", // Add an image path for your project
  },
  {
    name: "Figma Design",
    description: "A detailed and user-centered design prototype made using Figma for a web application.",
    link: "https://www.linkedin.com/posts/mehmil-zeeshan-b340832b5_webdevelopment-nextjs-frontend-activity-7260186511940153344-zDtz?utm_source=share&utm_medium=member_desktop",
    imgSrc: "/figma.png", // Add an image path for your project
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-center text-4xl font-bold mb-10">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.imgSrc}
              alt={project.name}
              className="w-full h-40 sm:h-48 lg:h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 text-white py-2 px-4 rounded-full inline-block mt-4 hover:bg-sky-600"
              >
                View Project
              </a>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

