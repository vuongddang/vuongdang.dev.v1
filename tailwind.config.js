const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Biko', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'twitter-blue': '#1da1f2',
        'linkedin-blue': '#0077b5',
      },
      opacity: {
        90: '.9',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui')],
}
