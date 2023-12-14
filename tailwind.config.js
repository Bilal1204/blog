/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '3/10': '30%',
        '2/10': '20%',
        '7/10': '70%',
      },
      gridTemplateColumns: {
        // Defines a 2-column layout where the first column takes up 30% of the width and the second column takes up the remaining 70%
        '[3,7]': '3fr 7fr',
      },
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       width: {
//         '3/10': '30%',
//       }
//     }
//   },
//   variants: {},
//   plugins: [],
// }