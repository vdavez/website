/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{md,html}',
    './static/**/*.js',
    './themes/PaperMod/layouts/**/*.html',
    './themes/PaperMod/assets/**/*.js',
    './assets/**/*.{js,css}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Sans', 'system-ui', 'sans-serif'],
        'fira-code': ['Fira Code', 'Monaco', 'monospace'],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.gray.700'),
            lineHeight: '1.7',
            a: {
              color: theme('colors.sky.500'),
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '2px',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.sky.600'),
                backgroundColor: theme('colors.gray.50'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
            },
            h2: {
              fontSize: theme('fontSize.lg'),
              fontWeight: theme('fontWeight.black'),
            },
            h3: {
              fontWeight: theme('fontWeight.bold'),
            },
            code: {
              color: theme('colors.gray.800'),
              backgroundColor: '#eee8d5',
              fontFamily: theme('fontFamily.fira-code').join(', '),
              fontSize: theme('fontSize.sm'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'transparent',
              color: theme('colors.gray.800'),
              fontSize: theme('fontSize.sm'),
              fontFamily: theme('fontFamily.fira-code').join(', '),
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            },
            blockquote: {
              color: theme('colors.gray.700'),
              backgroundColor: theme('colors.sky.50'),
              borderLeftColor: theme('colors.gray.300'),
              borderLeftWidth: '3px',
              paddingLeft: theme('spacing.8'),
              paddingRight: theme('spacing.16'),
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.8'),
              lineHeight: theme('lineHeight.tight'),
              letterSpacing: theme('letterSpacing.tight'),
            },
            'ul, ol': {
              paddingLeft: theme('spacing.4'),
            },
            'ul > li': {
              listStyleType: 'disc',
            },
            'ol > li': {
              listStyleType: 'decimal',
            },
            '.footnotes li': {
              listStyleType: 'decimal',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.sky.400'),
              '&:hover': {
                color: theme('colors.sky.300'),
                backgroundColor: theme('colors.gray.800'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
            },
            pre: {
              color: theme('colors.gray.200'),
            },
            blockquote: {
              color: theme('colors.gray.300'),
              backgroundColor: theme('colors.gray.800'),
              borderLeftColor: theme('colors.gray.600'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
