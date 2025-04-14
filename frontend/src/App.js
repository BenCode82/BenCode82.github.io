import React, { useState, useEffect, useRef } from 'react';

import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";

function ProjectCard({ title, description, image, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-full sm:w-80">
      <div
      className="rounded-md overflow-hidden shadow-lg
      transform transition hover:scale-105 hover:shadow-2xl bg-gray-400/30
      border border-white outline outline-20"
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white italic">{description}</p>
        </div>
      </div>
    </a>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("accueil");
  const [key, setKey] = useState(activeTab);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  // Utilisation d'un key unique basé sur activeTab pour redémarrer l'animation
  useEffect(() => {
    setKey(activeTab);
  }, [activeTab]);

  const getCssVar = (varName) =>
    getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

  useEffect(() => {
    const vcolor1 = getCssVar("--vanta-color1");
    const vcolor2 = getCssVar("--vanta-color2");

    if (!vantaEffect.current && vantaRef.current) {

      vantaEffect.current = CELLS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        color1: vcolor1,
        color2: vcolor2,
        size: 0.2,
        speed: 0.0,

        zoom: 50,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);



  return (
    <>
      <main
        className=" font-poppins min-h-screen bg-neutral-900
                    flex flex-col justify-center px-4 py-20 -z-10">

      <div
        ref={vantaRef}
        className=" absolute inset-[50px]
                    w-auto h-auto
                    opacity-40 z-0"></div>

      <div
        // ref={vantaRef}
        className=" absolute inset-[50px]
                    w-auto h-auto flex flex-col lg:flex-row
                    justify-between gap-12 shadow-xl p-10
                    border border-white dark:border-black
                    opacity-90 z-10">


        {/* Colonne gauche : menu (Hero) */}
        <div className="w-1/2 p-10 flex flex-col justify-start gap-6">
          <h1 className="text-5xl font-bold text-white/80 dark:text-black opacity-0 animate-scintillement">
            Benjamin Montet
          </h1>
          <p className="text-xl text-white dark:text-black font-semibold italic">
            – Développeur Web Fullstack Junior -
          </p>

          <div
            key={key}
            className="h-[0.5px] bg-gray-400/30 w-0 animate-[width-expand_0.5s_linear_0.9s_forwards]"
          ></div>

          <nav className="flex flex-col justify-start gap-6 mt-28">

          {["accueil", "projets", "contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                text-left text-xl font-bold
                transition-all duration-300 ease-in-out
                ${
                  activeTab === tab
                    ? "text-gray-500 translate-x-2"
                    : "text-white hover:text-gray-300 hover:translate-x-2"
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}

          </nav>
        </div>

        <div
          key={key}
          className="h-0 w-[0.5px] bg-gray-400/30 animate-[height-expand_0.5s_linear_0.5s_forwards]"
        ></div>

        {/* Colonne droite : contenu dynamique */}
        <div className="w-1/2 p-10 flex overflow-x-hidden">

          <div
            key={key} // Re-trigger l'animation à chaque changement de activeTab
            className="flex flex-col justify-center transform translate-x-full opacity-0 animate-slideInFromRight"
          >
            {activeTab === "accueil" && (

              <div className="gap-6">
                <p className="text-xl flex justify-end mb-14 ml-14 text-gray-400 text-white italic leading-relaxed">
                  En reconversion professionnelle, j'ai évolué dans le domaine des
                  sciences tout au long de mon parcours professionnel.<br></br><br></br>
                  Passionné par Python, la résolution de problèmes complexes et
                  l’optimisation du code.<br></br><br></br>
                  Je suis à la recherche d’une expérience professionnelle enrichissante.
                </p>

                <div flex className="flex justify-end">
                  <a
                    href="/CV_Benjamin.pdf"
                    className="text-2xl w-fit border border-gray-300 hover:border-gray-400 text-white px-6 py-3 rounded-2xl font-semibold shadow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir mon CV
                  </a>
                </div>

              </div>

            )}

            {activeTab === "projets" && (

              <div className="lg:justify-end">
                <h2 className="text-white text-xl font-semibold italic mb-16">
                  Voici mes premiers projets de code 'en solo' pour aborder différentes technos.<br></br><br></br>
                  J'ai surtout été guidé par l'envie d'apprendre en m'amusant et en écoutant les envies de mon fils ❤️ ...
                </h2>
                {/* Ici tu peux réutiliser tes <ProjectCard /> */}
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
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
            )}

            {activeTab === "contact" && (
              <div className="flex justify-center lg:justify-end gap-4 flex-wrap">
                <i class="fas fa-envelope text-white text-xl mr-2"></i>
                <p className="text-2xl flex justify-end mb-14 text-white">benjamin.montet.dev@gmail.com</p>

                <div flex className="flex justify-end">
                  <a
                    href="https://www.linkedin.com/in/benjamin-montet-1a2141317/"
                    className="text-2xl w-fit hover:border-gray-700 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.linkedin.com/benjamin.montet
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>


      </div>

      {/* Footer en bas à gauche */}
      <div className="absolute bottom-4 left-4 text-sm text-white opacity-60">
        © Benjamin Montet
      </div>

    </main>

    </>
  );
}

export default App;
