/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '40px', 
      },
        colors: {
          cGreen: '#319D38',
          cDarkGreen: '#25762A',
          cLGreen: '#D2FDE6',
          
          cYellow: '#FBC756',
          cPink: '#FFF3F2',
          vdark: '#113714',
        
      },
    },
  },
  plugins: [],
};
