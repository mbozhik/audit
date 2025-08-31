const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SuisseIntl', 'ui-sans-serif', 'system-ui', '-apple-system', 'Roboto', 'sans-serif'],
      },
      colors: {
        custom: {
          yellow: '#ffe914',
        },
      },
    },
    screens: {
      xl: {max: '1780px'},
      sm: {max: '500px'},
    },
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
  ],
}
