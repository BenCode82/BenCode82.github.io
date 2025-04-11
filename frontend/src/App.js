import React from 'react';

function ProjectCard({ title, description, image, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-full sm:w-80">
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

function App() {
  return (
    <>
      <main className="min-h-screen bg-gray-100 flex flex-col justify-center px-4 py-20">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 rounded-3xl shadow-xl bg-gradient-to-br from-indigo-100 via-white to-indigo-50 p-10">
          {/* Hero */}
          <div className="text-center lg:text-left space-y-6 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Benjamin Montet
            </h1>
            <p className="text-xl text-gray-600">
            – Développeur Web Fullstack -
            </p>
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow"
              >
                Me contacter
              </a>
              <a
                href="/CV_Benjamin.pdf"
                className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 px-6 py-3 rounded-2xl text-sm font-semibold shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir mon CV
              </a>
            </div>
          </div>

          {/* Projets */}
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
            <ProjectCard
              title="PSG Infos"
              description="Fil d’actualités dynamique sur le PSG (React + API Django)"
              image="/psginfos.jpg"
              link="https://benjaminmontet.me/psginfos/"
            />
            <ProjectCard
              title="Snake"
              description="Jeu 'Snake' codé en Javascript"
              image="/snake.jpg"
              link="https://benjaminmontet.me/snake/"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-100 py-10 text-center">
        <h3 className="text-xl font-semibold mb-4">Un projet ? Un job ?</h3>
        <p className="text-gray-600 mb-2">📧 benjamin.montet.dev@gmail.com</p>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Benjamin Montet</p>
      </footer>
    </>
  );
}

export default App;
