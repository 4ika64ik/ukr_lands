module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            h1: {
              fontFamily: 'Merriweather, serif',
              fontWeight: '700',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              fontSize: '1.1em', // додаємо розмір шрифту
            },
            h4: {
              fontFamily: 'Merriweather, serif',
              fontWeight: '700',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              fontSize: '1.1em', // додаємо розмір шрифту
            },
            blockquote: {
              borderLeftColor: '#ff4500',
              paddingLeft: '1em',
              fontStyle: 'italic',
              fontSize: '1.1em', // додаємо розмір шрифту
            },
            'blockquote p': {
              margin: 0,
            },
            p: {
              marginTop: '1em',
              marginBottom: '1em',
              fontFamily: 'Arial, sans-serif',
              fontSize: '1.1em', // додаємо розмір шрифту
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5em',
              marginTop: '1em',
              marginBottom: '1em',
              fontSize: '1.1em', // додаємо розмір шрифту
            },
            'ul li': {
              marginBottom: '0.5em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
