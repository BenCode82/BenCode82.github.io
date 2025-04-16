import React, { useState, useEffect, useRef } from 'react';

import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";


function ProjectCard({ title, description, link, hashtags }) {
  return (
    <a  href={link} target="_blank"
        rel="noopener noreferrer"
        className="w-full"
    >
      <div className="p-4 text-right mb-10">
        <h3 className="text-[#afaba8] font-thin text-6xl mb-2 hover:-translate-x-2 transition-transform duration-1000 linear">{title}</h3>
        <p className="text-white text-sm">{description}</p>
        <p className="mt-2 text-white text-sm italic"
                      // border border-white border-opacity-20 rounded-lg p-1"
        >{hashtags}</p>
      </div>

    </a>
  );
}
{/* <Card.Text data-aos="wave" className="hashtags">
{article.hashtags?.map((tag, index) => (
  <span key={index} className="hashtag">
    {tag}
  </span>
))}
</Card.Text> */}

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
        speed: 2.0,

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
        className=" absolute inset-[50px]
                    w-auto h-auto flex flex-col lg:flex-row
                    justify-between gap-12 shadow-xl
                    border border-white dark:border-black
                    opacity-90 z-10 pt-5">


        {/* Colonne gauche : menu (Hero) */}
        <div className="w-1/2 p-16 flex flex-col gap-6">
          <div className="transform -translate-x-full animate-slideInFromLeft">
            <h1 className="text-5xl font-bold text-white/80 dark:text-black opacity-0 animate-scintillement">
              Benjamin Montet
            </h1>
            <p className="mt-6 text-xl text-white dark:text-black font-semibold italic">
              – Développeur Web Fullstack Junior -
            </p>
          </div>

          <div
            key={key}
            className="h-[0.5px] bg-gray-400/30 w-0 animate-[width-expand_0.5s_linear_0.9s_forwards]"
          ></div>

          <nav className="flex flex-col justify-start gap-6 mt-28 transform translate-y-full animate-slideInFromDown">

          {["accueil", "projets", "contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                text-left text-xl font-bold
                transition-all duration-1000 ease-in-out
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

              <div className="gap-6 flex flex-col">
                <p className="text-base flex justify-start mb-14 ml-14 text-gray-400 text-white italic leading-relaxed">
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

              <div className="flex flex-col justify-between w-full h-full">
                <h2 className="text-white text-sm italic mb-16 justify-end">
                  Voici mes premiers projets de code 'en solo' pour aborder différentes technos.<br></br><br></br>
                  J'ai surtout été guidé par l'envie d'apprendre en m'amusant et en écoutant les envies de mon fils ❤️ ...
                </h2>

                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
                  <div className="ml-auto max-w-base">
                    <ProjectCard
                      title="PSG Infos"
                      description="Fil d’actualités dynamique sur le PSG"
                      link="https://benjaminmontet.me/psginfos/"
                      hashtags="#React #Django #Responsive"
                    />
                    <ProjectCard
                      title="Snake"
                      description="Jeu 'Snake'"
                      link="https://benjaminmontet.me/snake/"
                      hashtags="#JavaScript  #Game"
                    />
                  </div>
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
