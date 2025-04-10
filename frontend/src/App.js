import React from 'react';

// Navbar
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Benjamin.dev</h1>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#about" className="hover:text-indigo-600 transition">À propos</a></li>
          <li><a href="#projects" className="hover:text-indigo-600 transition">Projets</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// Carte projet
function ProjectCard({ title, description, image, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl bg-white">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
}

// App principale
function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="about" className="min-h-screen bg-gray-100 flex items-center justify-center px-4 pt-20">
        <div className="max-w-1xl text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Benjamin – Développeur Web Fullstack
          </h1>
          <p className="text-xl text-gray-600">
            Je crée des applications modernes et efficaces.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow">
              Voir mes projets
            </a>
            <a href="#contact" className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 px-6 py-3 rounded-2xl text-sm font-semibold shadow">
              Me contacter
            </a>
            <a href="/CV_Benjamin.pdf" className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 px-6 py-3 rounded-2xl text-sm font-semibold shadow" target="_blank" rel="noopener noreferrer">
              Voir mon CV
            </a>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projects" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Mes projets</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="PSG Infos"
              description="Fil d’actualités dynamique sur le PSG (React + API Django)"
              image="./frontend/public/psginfos.jpg"
              link="https://benjaminmontet.me/psginfos/"
            />

            <ProjectCard
              title="Snake"
              description="Jeu codé en Javascript"
              image="./frontend/public/snake.jpg"
              link="https://benjaminmontet.me/snake/"
            />

          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="bg-gray-100 py-10 text-center">
        <h3 className="text-xl font-semibold mb-4">Un projet ? Un job ?</h3>
        <p className="text-gray-600 mb-2">📧 benjamin.montet.dev@gmail.com</p>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Benjamin Montet</p>
      </footer>
    </>
  );
}

export default App;
