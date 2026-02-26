import React from "react";
import greendenImg from "../assets/projects/greenden.png";
import portfolioImg from "../assets/projects/my-portfolio.png";
import bookbazarImg from "../assets/projects/bookbazar.png";
import taskmanagerImg from "../assets/projects/taskmanager.png";
import applecloneImg from "../assets/projects/appleclone.png";
import nostraImg from "../assets/projects/nostra.png";


const projects = [
  {
    id: 1,
    title: "BookBazar",
    image: bookbazarImg,
    description: "A MERN stack e-commerce bookstore with MongoDB integration, Express & Node.js APIs, and a React frontend featuring dynamic product listing and cart management.",
    liveLink: "https://bookbazar-e-commerce-1wny.vercel.app/",
    codeLink: "https://github.com/kavitha0802/Bookbazar-E-commerce"
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: portfolioImg,
    description: "A responsive personal portfolio website built using React and Tailwind CSS to showcase projects, skills, and contact details with a clean and modern UI design.",
    liveLink: "https://portfolio-alpha-one-25.vercel.app/",
    codeLink: "https://github.com/kavitha0802/Portfolio"
  },
  {
    id: 3,
    title: "GreenDen",
    image: greendenImg,
    description: "A frontend e-commerce website for gardening plants and tools featuring product listings, category sections, and a responsive shopping interface built using React.",
    liveLink: "https://kavitha0802.github.io/greenden-tailwind/",
    codeLink: "https://github.com/kavitha0802/greenden-tailwind"
  },
  {
    id: 4,
    title: "Task Manager",
    image: taskmanagerImg,
    description: "A frontend task management application that allows users to add, edit, and delete tasks dynamically using React state management and component-based architecture.",
    liveLink: "https://task-manager-topaz-five.vercel.app/",
    codeLink: "https://github.com/kavitha0802/Task-Manager"
  },
   {
    id: 5,
    title: "Apple Clone",
    image: applecloneImg,
    description: "A responsive frontend clone of the Apple website created to practice advanced layout structuring, modern UI design, and responsive web development techniques.",
    liveLink: "https://apple-clone-rouge-three.vercel.app/",
    codeLink: "https://github.com/kavitha0802/Apple-Clone"
  },
   {
    id: 6,
    title: "Nostra",
    image: nostraImg,
    description: "A fashion-based e-commerce frontend website featuring product showcases, image sliders, and a clean responsive layout for an engaging user experience.",
    liveLink: "https://kavitha0802.github.io/Nostra-Ecommerce/",
    codeLink: "https://github.com/kavitha0802/Nostra-Ecommerce"
  },
];

const Projects = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-12 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, image, description, liveLink, codeLink }) => (
          <div key={id} className="shadow-md border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
              <p className="text-gray-600 text-sm mb-4">{description}</p>
              <div className="flex justify-between">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1 rounded-md text-sm hover:scale-105 transition"
                >
                  Live
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-r from-gray-700 to-black px-3 py-1 rounded-md text-sm hover:scale-105 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
