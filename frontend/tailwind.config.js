/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      animation: {
        slideInFromRight: 'slideInFromRight 1.5s ease-out 0.5s forwards', // Définir le délai de 1 seconde
        scintillement: 'scintillement 3s ease-out 0s forwards', // Définir le délai de 1 seconde
      },

      keyframes: {
        slideInFromRight: {
          '0%': {
            transform: 'translateX(100%)', // Commence à droite (hors de l'écran)
            opacity: '0', // Début invisible
          },
          '100%': {
            transform: 'translateX(0)', // Se déplace à sa position normale
            opacity: '1', // Devient visible
          },
        },

        scintillement: {
          '0%': {
            opacity: '0.1',
            color: '#dbd17b', // Rouge au début (ou utilisez une couleur Tailwind comme 'text-red-500')
          },
          '50%': {
            opacity: '0.45',
            color: '#154458', // Jaune à mi-chemin
          },
          '100%': {
            opacity: '1',
            color: '#0c4b58', // Vert à la fin
          },
        },

      },

    },
  },
  plugins: [],
}
