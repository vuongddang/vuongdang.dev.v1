const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/layouts/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      // colors: {
      //   gray: colors.gray,
      // },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.blue.700'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.green.500'),
              },
            },

            h1: {
              color: theme('colors.gray.300'),
            },
            h2: {
              color: theme('colors.gray.300'),
            },
            h3: {
              color: theme('colors.gray.300'),
            },
            h4: {
              color: theme('colors.gray.300'),
            },
            h5: {
              color: theme('colors.gray.300'),
            },
            h6: {
              color: theme('colors.gray.300'),
            },

            strong: {
              color: theme('colors.gray.300'),
            },

            code: {
              color: theme('colors.gray.300'),
            },

            figcaption: {
              color: theme('colors.gray.500'),
            },
          },
        },
      }),
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
