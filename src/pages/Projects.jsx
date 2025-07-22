import React from "react";
import greendenImg from "../assets/projects/greenden.png";
import portfolioImg from "../assets/projects/my-portfolio.png";
import bookbazarImg from "../assets/projects/bookbazar.png";

const projects = [
  {
    id: 1,
    title: "GreenDen",
    image: greendenImg,
    description: "An ecommerce website for gardening plants and tools.",
    liveLink: "https://kavitha0802.github.io/greenden-tailwind/",
    codeLink: "https://kavitha0802.github.io/greenden-tailwind/"
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: portfolioImg,
    description: "My personal portfolio built with React and Tailwind CSS.",
    liveLink: "https://your-portfolio-live-link.com",
    codeLink: "https://github.com/your-username/my-portfolio"
  },
  {
    id: 3,
    title: "BookBazar",
    image: bookbazarImg,
    description: "Online bookstore with dynamic product listing and cart features.",
    liveLink: "https://bookbazar-e-commerce-1wny.vercel.app/",
    codeLink: "https://github.com/kavitha0802/Bookbazar-E-commerce"
  }
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
