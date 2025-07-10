import { useState } from 'react';

const Index = () => {
  console.log("Index component is rendering");
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <nav className="bg-gray-800 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Mudasar MD</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              M
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mudasar MD
          </h1>
          <p className="text-2xl text-gray-300 mb-4">Full Stack Developer</p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Specialized in React.js, Node.js, Web3, and Blockchain Technologies. 
            Building scalable applications with modern technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold transition-colors">
              Get In Touch
            </a>
            <a href="#projects" className="border border-blue-600 hover:bg-blue-600 px-8 py-3 rounded-lg text-white font-semibold transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                My journey in software development has equipped me with a comprehensive skill set 
                that spans both frontend and backend development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I specialize in creating scalable, user-friendly applications using cutting-edge 
                technologies like React.js, Node.js, and emerging Web3 technologies. I'm always 
                eager to learn and implement new technologies to solve complex problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Frontend Development</h3>
                <p className="text-gray-300">React.js, TypeScript, Tailwind CSS, Next.js</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Backend Development</h3>
                <p className="text-gray-300">Node.js, Express.js, PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Web3 & Blockchain</h3>
                <p className="text-gray-300">Ethereum, Smart Contracts, DeFi, NFTs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React.js & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Redux & Context API</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Node.js & Express.js</li>
                <li>PostgreSQL & MongoDB</li>
                <li>REST & GraphQL APIs</li>
                <li>Authentication & Security</li>
                <li>Server Deployment</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Web3 & Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Ethereum & Smart Contracts</li>
                <li>Web3.js & Ethers.js</li>
                <li>Git & GitHub</li>
                <li>Docker & AWS</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">E-Commerce Platform</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Full-Stack E-Commerce</h3>
                <p className="text-gray-300 mb-4">Complete e-commerce solution with React.js frontend and Node.js backend</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">MongoDB</span>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300">View Project →</a>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">DeFi Dashboard</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Web3 DeFi Dashboard</h3>
                <p className="text-gray-300 mb-4">Decentralized finance dashboard with Web3 integration</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-yellow-600 text-white px-2 py-1 rounded text-sm">Web3.js</span>
                  <span className="bg-indigo-600 text-white px-2 py-1 rounded text-sm">Ethereum</span>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300">View Project →</a>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Task Manager</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Management Tool</h3>
                <p className="text-gray-300 mb-4">Collaborative project management with real-time updates</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">PostgreSQL</span>
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">Socket.io</span>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-blue-400">Freelance Full Stack Developer</h3>
                <span className="text-gray-400 text-lg">Jan 2024 - Present</span>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                Working as a freelance developer, creating custom web applications and blockchain solutions for various clients.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Developed 15+ full-stack applications using React.js and Node.js</li>
                <li>• Implemented Web3 integrations for DeFi and NFT projects</li>
                <li>• Collaborated with international clients on complex projects</li>
                <li>• Maintained 98% client satisfaction rate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack developer, Web3 specialist, or technical consultant, 
                I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    @
                  </div>
                  <span className="text-gray-300">mudasar.md.dev@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <span className="text-gray-300">Pakistan</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    💼
                  </div>
                  <span className="text-gray-300">Available for freelance projects</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea rows="4" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 Mudasar MD. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://github.com/mudasarmd" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/mudasarmd" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:mudasar.md.dev@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;