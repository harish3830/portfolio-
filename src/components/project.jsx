import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
const Projects = () => {
  const projects = [
    { title: "Task Manager", desc: "A React app to manage tasks.", img :p1 },
    {
      title: "E-commerce Site",
      desc: "A shopping platform with cart and checkout.",
      img: p2,
    },
    {
      title: "Photo Gallery",
      desc: "Image grid with modal and animation.", img:p3
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
          >  <img 
            src={p.img} 
            alt={p.title}
            className="rounded-2xl hover:shadow-xl transition " 
            />
            <h3 className="text-xl font-semibold mb-2 hover:text-blue-300 transition">{p.title}</h3>
            <p>{p.desc}</p>
            <button className="border-2 border-blue-600 text-white bg-blue-500 p-2 px-4  mt-2 rounded-full font-medium hover:bg-white hover:text-blue-800 hover:shadow-2xl transition">Live Demo</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
