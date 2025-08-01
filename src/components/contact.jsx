import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log("Service id:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template id:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

    e.preventDefault();

    emailjs
    
      .sendForm(
        
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("hi");
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-gray-50 text-gray-800 px-6 py-16" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always open to discussing new opportunities, creative projects,
            or just having a chat about technology and design. Feel free to
            reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white shadow rounded">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">harish.hks2000@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white shadow rounded">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded">
                <FaPhone />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold">+91 9508033830</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white shadow rounded">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">Indore, Bhawarkua</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
            <div className="flex gap-4 text-xl">
              <a
                href="https://instagram.com"
                className="text-gray-700 hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-700 hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com"
                className="text-gray-700 hover:text-black"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow rounded p-6 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded hover:scale-105 transition"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
