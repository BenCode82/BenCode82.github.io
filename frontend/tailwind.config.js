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
      },

    },
  },
  plugins: [],
}
