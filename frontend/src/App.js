import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Benjamin – Développeur Web Fullstack
        </h1>
        <p className="text-xl text-gray-600">
          Je crée des applications modernes et efficaces, comme <span className="font-medium text-indigo-600">psg_infos</span>.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 px-6 py-3 rounded-2xl text-sm font-semibold shadow"
          >
            Me contacter
          </a>
          <a
            href="/CV_Benjamin.pdf"  // remplace ça par ton vrai lien
            className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 px-6 py-3 rounded-2xl text-sm font-semibold shadow"
            download
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
