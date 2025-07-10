const SimpleIndex = () => {
  console.log("SimpleIndex component is rendering");
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="bg-slate-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Mudasar MD</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mudasar MD
          </h1>
          <p className="text-2xl text-slate-300 mb-8">Full Stack Developer</p>
          <p className="text-lg text-slate-400 mb-8">
            Specialized in React.js, Node.js, Web3, and Blockchain Technologies
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/portfolio" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold">
              View Full Portfolio
            </a>
            <a href="#contact" className="border border-blue-600 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Quick About */}
      <div id="about" className="py-16 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I build scalable applications using React.js, Node.js, and emerging technologies like Web3 and blockchain.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-slate-300 mb-8">Ready to work together? Let's build something amazing!</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:contact@mudasarmd.com" className="text-blue-400 hover:text-blue-300">
              Email
            </a>
            <a href="https://linkedin.com/in/mudasarmd" className="text-blue-400 hover:text-blue-300">
              LinkedIn
            </a>
            <a href="https://github.com/mudasarmd" className="text-blue-400 hover:text-blue-300">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleIndex;