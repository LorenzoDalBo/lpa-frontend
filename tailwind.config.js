/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'bluesatc1': '#002e80',
      'bluesatc2': '#0044a2',
      'bluesatc3': '#035bbf',
      'bluesatc4': '#0070e0',
      'gray': '#6b7280',
      'gray3': '#4b5563',
      'gray2': '#d1d5db',
      'zinco': '#52525b',
      'zinco2': '#71717a',
      'zinco3': '#a1a1aa',
      'green' : '#86efac',
      'greensatc' : '#166534',
      'greensatc2': '#16a34a',
      'greensatc3': '#15803d',
      'lime' : '#65a30d',
      'lime2' : '#a3e635',
      'red' : '#dc2626',
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
              'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          }, 
      },
    },
  },
},
  plugins: [],
}
