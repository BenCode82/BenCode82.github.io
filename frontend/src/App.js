// import React, { useState, useEffect, useRef } from 'react';
// import * as THREE from "three";

// import p5 from 'p5';
// import TOPOLOGY from 'vanta/dist/vanta.topology.min';
// import CELLS from "vanta/dist/vanta.cells.min";


// function ProjectCard({ title, description, link, hashtags, isDarkMode }) {
//   const hashtagArray = hashtags.split(' ').filter(tag => tag.startsWith('#'));

//   return (
//     <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
//       <div className="p-4 text-right mb-10">
//         <h3 className="text-[#afaba8] font-thin text-6xl mb-2 hover:-translate-x-2 transition-transform duration-1000 linear">
//           {title}
//         </h3>
//         <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
//           {description}
//         </p>
//         <div className="mt-2 flex gap-2 justify-end">
//           {hashtagArray.map((tag, index) => (
//             <span
//               key={index}
//               className={`
//                 text-sm italic rounded-lg px-2 py-1
//                 ${isDarkMode ?
//                   'text-white border border-white border-opacity-20' :
//                   'text-black border border-black border-opacity-20'
//                 }
//               `}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </a>
//   );
// }

// function App() {
//   const [activeTab, setActiveTab] = useState("accueil");
//   const [key, setKey] = useState(activeTab);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const vantaRef = useRef(null);
//   const vantaEffect = useRef(null);

//   // Gestion du thème
//   const toggleTheme = () => {
//     const newMode = !isDarkMode;
//     setIsDarkMode(newMode);
//     localStorage.setItem('theme', newMode ? 'dark' : 'light');
//     document.documentElement.classList.toggle('dark', newMode);
//   };

//   const toggleLanguage = () => {

//   };

//   // Initialisation du thème au chargement
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDarkMode(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   // Vanta.js
//   useEffect(() => {
//     setKey(activeTab);
//   }, [activeTab]);

//   const getCssVar = (varName) =>
//     getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

//   useEffect(() => {
//     if (!vantaEffect.current && vantaRef.current && isDarkMode) {
//       vantaEffect.current = CELLS({
//         el: vantaRef.current,
//         THREE: THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         color1: 0x28e5e5,
//         color2: 0x6f1919,
//         size: 0.2,
//         speed: 2.0,
//         zoom: 50,
//       });
//     } else if (!vantaEffect.current && vantaRef.current  && !isDarkMode) {
//       vantaEffect.current = TOPOLOGY({
//         el: vantaRef.current,
//         THREE: THREE,
//         p5: p5, // Ajout crucial de p5
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.00,
//         minWidth: 200.00,
//         scale: 1.00,
//         scaleMobile: 1.00,
//         color: 0x131617, // Couleur comme dans l'exemple
//         backgroundColor: 0xffffff, // Fond blanc comme dans l'exemple

//         zoom: 0.5,
//       });
//     }

//     return () => {
//       if (vantaEffect.current) {
//         vantaEffect.current.destroy();
//         vantaEffect.current = null;
//       }
//     };
//   }, [isDarkMode]); // Déclencheur : changement de isDarkMode

//   return (
//     <main className={`font-poppins min-h-screen ${isDarkMode ? 'bg-neutral-900' : 'bg-white'} flex flex-col justify-center px-4 py-20 -z-10`}>

//       <div
//         ref={vantaRef}
//         className={`absolute inset-[50px] w-auto h-auto ${isDarkMode ? 'opacity-40' : 'opacity-15'} z-0`}
//       />


//       <div className={`absolute inset-[50px] w-auto h-auto flex flex-col lg:flex-row justify-between gap-12 shadow-xl border ${isDarkMode ? 'border-white' : 'border-black'} opacity-90 z-10 pt-5`}>

//         {/* Colonne gauche */}
//         <div className="w-1/2 p-16 flex flex-col gap-6">
//           <div className="transform -translate-x-full animate-slideInFromLeft">
//             <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} opacity-0 animate-scintillement`}>
//               Benjamin Montet
//             </h1>
//             <p className={`mt-6 text-xl ${isDarkMode ? 'text-white' : 'text-black'} font-semibold italic`}>
//               – Développeur Web Fullstack Junior -
//             </p>
//           </div>

//           <div
//             key={key}
//             className="h-[0.5px] bg-gray-400/30 w-0 animate-[width-expand_0.5s_linear_0.9s_forwards]"
//           />

//           <nav className="opacity-0 flex flex-col justify-start gap-6 mt-28 transform translate-y-full animate-slideInFromDown">
//             {["accueil", "projets", "contact"].map((tab) => (
  //               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`
//                   text-left text-xl font-bold
//                   transition-all duration-1000 ease-in-out
//                   ${
  //                     activeTab === tab
  //                       ? "text-gray-500 translate-x-2"
  //                       : isDarkMode
  //                         ? "text-white hover:text-gray-700 hover:translate-x-2"
  //                         : "text-black hover:text-gray-300 hover:translate-x-2"
  //                   }
  //                 `}
  //               >
  //                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
  //               </button>
  //             ))}
  //           </nav>
  //         </div>

  //         <div
  //           key={key}
  //           className="h-0 w-[0.5px] bg-gray-400/30 animate-[height-expand_0.5s_linear_0.5s_forwards]"
  //         />

//         {/* Colonne droite */}
//         <div className="w-1/2 p-10 flex overflow-x-hidden">

//           <div
//             key={key} // Re-trigger l'animation à chaque changement de activeTab
//             className="flex flex-col justify-center transform translate-x-full opacity-0 animate-slideInFromRight"
//           >
//             {activeTab === "accueil" && (

//               <div className="gap-6 flex flex-col">
//                 <p className={`
//                   text-base flex justify-start mb-14 ml-14 italic leading-relaxed
//                   ${isDarkMode ? 'text-white' : 'text-black'}
//                 `}>
//                   En reconversion professionnelle, j'ai évolué dans le domaine des
//                   sciences tout au long de mon parcours professionnel.
//                   <br /><br />
//                   Passionné par Python, la résolution de problèmes complexes et
//                   l'optimisation du code.
//                   <br /><br />
//                   Je suis à la recherche d'une expérience professionnelle enrichissante.
//                 </p>

//                 <div flex className="flex justify-end">
//                   <a
//                     href="/CV Benjamin Montet.pdf"
//                     className="text-2xl w-fit border border-gray-300 hover:border-gray-400 text-gray-400 px-6 py-3 rounded-2xl font-semibold shadow"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Voir mon CV
//                   </a>
//                 </div>

//               </div>

//             )}

//             {activeTab === "projets" && (

//               <div className="flex flex-col justify-between w-full h-full">
//                 <h2 className={`text-sm italic mb-16 justify-end ${isDarkMode ? 'text-white' : 'text-black'}`}>
//                   Voici mes premiers projets de code 'en solo' pour aborder différentes technos.<br /><br />
//                   J'ai surtout été guidé par l'envie d'apprendre en m'amusant et en écoutant les envies de mon fils ❤️ ...
//                 </h2>

//                 <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
//                   <div className="ml-auto max-w-base">
//                     <ProjectCard
//                       title="PSG Infos"
//                       description="Mars.2025 / Fil d’actualités dynamique sur le PSG"
//                       link="https://benjaminmontet.me/psginfos/"
//                       hashtags="#React #Django #Responsive"
//                       isDarkMode={isDarkMode}
//                     />
//                     <ProjectCard
//                       title="Snake"
//                       description="Fev.2025 / Jeu 'Snake'"
//                       link="https://benjaminmontet.me/snake/"
//                       hashtags="#JavaScript  #Game"
//                       isDarkMode={isDarkMode}
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "contact" && (
  //               <div className="flex justify-center lg:justify-end gap-4 flex-wrap">
  //                 <i className={`fas fa-envelope text-xl mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}></i>
  //                 <p className={`text-2xl flex justify-end mb-14 ${isDarkMode ? 'text-white' : 'text-black'}`}>
  //                   benjamin.montet.dev@gmail.com
  //                 </p>

  //                 <div className="flex justify-end">
  //                   <a
  //                     href="https://www.linkedin.com/in/benjamin-montet-1a2141317/"
  //                     className={`text-2xl w-fit hover:border-gray-700 ${isDarkMode ? 'text-white' : 'text-black'}`}
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                   >
  //                     www.linkedin.com/benjamin.montet
  //                   </a>
  //                 </div>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>

  //       {/* Footer gauche */}
  //       <div className={`absolute bottom-4 right-4 text-sm ${isDarkMode ? 'text-white opacity-60' : 'text-black opacity-80'} `}>
  //         © Benjamin Montet
  //       </div>

  //       {/* Header droit - Toggle lague */}
  //       <div className="absolute top-4 right-4 text-sm opacity-90">
  //         <button
  //           onClick={toggleLanguage}
  //           className={`flex items-center gap-2 ${isDarkMode ? 'text-black' : 'text-white'}`}
  //         >
  //           <span className={!isDarkMode ? "text-black" : "text-gray-500"}>
  //             Français /
  //           </span>
  //           <span className={isDarkMode ? "text-white" : "text-gray-500"}>
  //             English
  //           </span>
  //         </button>
  //       </div>

  //       {/* Footer droit - Toggle thème */}
  //       <div className="absolute bottom-[6rem] -left-[1.25rem] text-sm transform -rotate-90 opacity-90">
  //         <button
  //           onClick={toggleTheme}
  //           className={`flex items-center gap-2 ${isDarkMode ? 'text-black' : 'text-white'}`}
  //         >
  //           <span className={!isDarkMode ? "text-black" : "text-gray-500"}>
  //             Jour {isDarkMode ? '□' : '■'}
  //           </span>
//           <span className={isDarkMode ? "text-white" : "text-gray-500"}>
//             Nuit {isDarkMode ? '■' : '□'}
//           </span>
//         </button>
//       </div>
//     </main>
//   );
// }
// export default App;


import React, { useState, useEffect, useRef } from 'react';
import * as THREE from "three";
import p5 from 'p5';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import CELLS from "vanta/dist/vanta.cells.min";

function ProjectCard({ title, description, link, hashtags, isDarkMode }) {
  const hashtagArray = hashtags.split(' ').filter(tag => tag.startsWith('#'));

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
      <div className="p-4 text-right mb-10">
        <h3 className="text-[#afaba8] font-thin text-4xl md:text-6xl mb-2 hover:-translate-x-2 transition-transform duration-1000 linear">
          {title}
        </h3>
        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {description}
        </p>
        <div className="mt-2 flex gap-2 justify-end flex-wrap">
          {hashtagArray.map((tag, index) => (
            <span
              key={index}
              className={`
                text-xs md:text-sm italic rounded-lg px-2 py-1
                ${isDarkMode ?
                  'text-white border border-white border-opacity-20' :
                  'text-black border border-black border-opacity-20'
                }
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("accueil");
  const [key, setKey] = useState(activeTab);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  // Gestion du thème
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  const toggleLanguage = () => {
    // Fonctionnalité à implémenter
  };

  // Initialisation du thème au chargement
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Vanta.js
  useEffect(() => {
    setKey(activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current && isDarkMode) {
      vantaEffect.current = CELLS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        color1: 0x28e5e5,
        color2: 0x6f1919,
        size: 0.2,
        speed: 2.0,
        zoom: 50,
      });
    } else if (!vantaEffect.current && vantaRef.current && !isDarkMode) {
      vantaEffect.current = TOPOLOGY({
        el: vantaRef.current,
        THREE: THREE,
        p5: p5,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x131617,
        backgroundColor: 0xffffff,
        zoom: 0.5,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [isDarkMode]);

  return (
    <main className={`min-h-screen font-poppins ${isDarkMode ? 'bg-neutral-900' : 'bg-white'} flex flex-col justify-center px-20 py-20 md:px-20 md:py-20-z-10`}>

      <div
        ref={vantaRef}
        className={`absolute inset-[40px] md:inset-[50px] w-auto h-auto ${isDarkMode ? 'opacity-40' : 'opacity-15'} z-0`}
      />

      <div className={`absolute inset-[40px] md:inset-[50px] w-auto h-auto flex flex-col lg:flex-row justify-between gap-6 md:gap-12 opacity-90 z-10 pt-5 shadow-xl border `}>

        {/* Colonne gauche */}
        <div className="absolute w-auto h-fit lg:w-1/2 p-6 md:p-16 flex flex-col gap-2 md:gap-6 ">
          <div className="transform -translate-x-full animate-slideInFromLeft">
            <h1 className={`text-2xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} opacity-0 animate-scintillement`}>
              Benjamin Montet
            </h1>
            <p className={`mt-3 md:mt-6 text-xs md:text-2xl ${isDarkMode ? 'text-white' : 'text-black'} font-semibold italic`}>
              – Développeur Web Fullstack Junior -
            </p>
          </div>

          <div
            key={key}
            className="h-[0.5px] bg-gray-400/30 w-0 animate-[width-expand_0.5s_linear_0.9s_forwards]"
          />

          <nav className="opacity-0 flex flex-col justify-start gap-2 md:gap-6 mt-10 md:mt-20 transform translate-y-full animate-slideInFromDown">
            {["accueil", "projets", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  text-left text-sm md:text-2xl font-bold
                  transition-all duration-1000 ease-in-out
                  ${
                    activeTab === tab
                      ? "text-gray-500 translate-x-2"
                      : isDarkMode
                        ? "text-white hover:text-gray-700 hover:translate-x-2"
                        : "text-black hover:text-gray-300 hover:translate-x-2"
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
          className="h-0 w-[0.5px] sm:hidden md:block bg-gray-400/30 animate-[height-expand_0.5s_linear_0.5s_forwards]"
        />

        {/* Colonne droite */}
        <div className="relative w-auto h-full lg:w-1/2 p-2 md:p-16 flex gap-2 md:gap-6 overflow-x-hidden">

          <div
            key={key}
            className="flex flex-col justify-center transform translate-x-full opacity-0 animate-slideInFromRight"
          >
            {activeTab === "accueil" && (
              <div className="gap-3 md:gap-6 flex flex-col">
                <p className={`
                  text-xs md:text-base flex justify-start mb-5 md:mb-16 ml-7 md:ml-14 italic leading-relaxed
                  ${isDarkMode ? 'text-white' : 'text-black'}
                `}>
                  En reconversion professionnelle, j'ai évolué dans le domaine des
                  sciences tout au long de mon parcours professionnel.
                  <br /><br />
                  Passionné par Python, la résolution de problèmes complexes et
                  l'optimisation du code.
                  <br /><br />
                  Je suis à la recherche d'une expérience professionnelle enrichissante.
                </p>

                <div className="flex justify-end">
                  <a
                    href="/CV Benjamin Montet.pdf"
                    className="text-lg md:text-2xl w-fit border border-gray-300 hover:border-gray-400 text-gray-400 px-4 md:px-6 md:py-3 rounded-2xl font-semibold shadow"
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
                <h2 className={`text-xs md:text-sm italic mb-8 md:mb-16 justify-end ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Voici mes premiers projets de code 'en solo' pour aborder différentes technos.<br /><br />
                  J'ai surtout été guidé par l'envie d'apprendre en m'amusant et en écoutant les envies de mon fils ❤️ ...
                </h2>

                <div className="grid gap-3 md:gap-6 sm:grid-cols-1 lg:grid-cols-1">
                  <div className="ml-auto max-w-base">
                    <ProjectCard
                      title="PSG Infos"
                      description="Mars.2025 / Fil d'actualités dynamique sur le PSG"
                      link="https://benjaminmontet.me/psginfos/"
                      hashtags="#React #Django #Responsive #API #OpenAI"
                      isDarkMode={isDarkMode}
                    />
                    <ProjectCard
                      title="Snake"
                      description="Fev.2025 / Jeu 'Snake'"
                      link="https://benjaminmontet.me/snake/"
                      hashtags="#JavaScript #Game"
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              // flex justify-center lg:justify-end gap-4 "
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 md:gap-4">
                <div className="flex items-center">
                  <i className={`fas fa-envelope text-sm md:text-xl mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}></i>
                  <p className={`text-sm md:text-2xl w-fit ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    benjamin.montet.dev@gmail.com
                  </p>
                </div>

                <div className="flex items-center">
                  <i className={`fab fa-linkedin text-sm md:text-xl mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}></i>
                  <a
                    href="https://www.linkedin.com/in/benjamin-montet-1a2141317/"
                    className={`text-sm md:text-2xl w-fit hover:border-gray-700 ${isDarkMode ? 'text-white' : 'text-black'}`}
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

      {/* Header droit - Toggle langue */}
      <div className="absolute top-4 right-4 text-xs md:text-sm opacity-90">
        <button
          onClick={toggleLanguage}
          className={`flex items-center gap-2 ${isDarkMode ? 'text-black' : 'text-white'}`}
        >
          <span className={!isDarkMode ? "text-black" : "text-gray-500"}>
            Français /
          </span>
          <span className={isDarkMode ? "text-white" : "text-gray-500"}>
            English
          </span>
        </button>
      </div>

      {/* Footer gauche */}
      <div className={`absolute bottom-4 right-4 text-xs md:text-sm ${isDarkMode ? 'text-white opacity-60' : 'text-black opacity-80'}`}>
        © Benjamin Montet
      </div>

      {/* Footer droit - Toggle thème */}
      <div className="absolute bottom-[4rem] md:bottom-[6rem] -left-[1rem] md:-left-[1.25rem] text-xs md:text-sm transform -rotate-90 opacity-90">
        <button
          onClick={toggleTheme}
          className={`flex items-center gap-1 md:gap-2 ${isDarkMode ? 'text-black' : 'text-white'}`}
        >
          <span className={!isDarkMode ? "text-black" : "text-gray-500"}>
            Jour {isDarkMode ? '□' : '■'}
          </span>
          <span className={isDarkMode ? "text-white" : "text-gray-500"}>
            Nuit {isDarkMode ? '■' : '□'}
          </span>
        </button>
      </div>
    </main>
  );
}

export default App;
