/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)', 
          },
          '50%': {
            transform: 'translateY(0)', 
          },
        },
      },
      animation: {
        'bounce': 'bounce 9s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
