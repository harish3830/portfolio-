import React from "react";
import { FaCode, FaPaintBrush, FaBolt, FaGlobe, FaDatabase } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const skills = [
  {
    title: "Basics",
    icon: <FaCode className="text-3xl text-white" />,
    desc: "JavaScript, HTML5, CSS3",
    bg: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-3xl text-white" />,
    desc: "Figma",
    bg: "bg-gradient-to-br from-pink-500 to-purple-500",
  },
  {
    title: "Libraries",
    icon: <FaBolt className="text-3xl text-white" />,
    desc: "React,Tailwind",
    bg: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    title: "Version Control",
    icon: <FaGlobe className="text-3xl text-white" />,
    desc: "Git,Github",
    bg: "bg-gradient-to-br from-green-400 to-teal-500",
  },
  {
    title: "Deployment",
    icon: <FaDatabase className="text-3xl text-white" />,
    desc: "Vercel,Netlify,Git",
    bg: "bg-gradient-to-br from-purple-500 to-indigo-600",
  },
  {
    title: "Database",
    icon: <FaMobileAlt className="text-3xl text-white" />,
    desc: "MYSQl,MONGODB",
    bg: "bg-gradient-to-br from-pink-400 to-pink-600",
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-gray-800 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto mb-10 text-lg">
        I am a self-taught frontend developer with a strong interest in crafting engaging user experiences. 
        I specialize in building responsive, interactive websites using React, Tailwind CSS, and modern JavaScript tools.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition duration-300">
            <div className={`w-12 h-12 flex items-center justify-center rounded-md mb-4 ${item.bg}`}>
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
