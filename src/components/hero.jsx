const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white flex flex-col justify-center items-center text-center px-4">
      <p className="text-2xl">Hello, I'm</p>
      <h1 className="text-6xl font-bold mt-2">Harish <span className="text-blue-300">Sharma</span></h1>
      <h2 className="text-3xl mt-3 font-semibold">Frontend Developer</h2>
      <p className="max-w-xl mt-6 text-gray-200">
        I Made this  beautiful, responsive web experiences with React.
        Passionate about clean code, user experience, and bringing creative ideas to life.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="border-2 border-white hover:bg-white hover:text-blue-800 px-6 py-2 rounded-full text-white font-medium">Explore My Work?</a>
        <a href="#contact" className="border-2 border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-800 transition"> Contact Me</a>
      </div>
      <div className="mt-16 text-2xl animate-bounce">!</div>
    </section>
  );
};

export default Home;
