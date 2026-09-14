/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      container: {
        center: true,
        padding: '1rem',
      },
      extend: {
        colors: {
          background: { DEFAULT: 'var(--background)' },
          foreground: { DEFAULT: 'var(--foreground)' },
          primary: {
            DEFAULT: 'var(--primary)',
            foreground: 'var(--primary-foreground)',
          },
          accent: {
            DEFAULT: 'var(--accent)',
            foreground: 'var(--accent-foreground)',
          },
          secondary: {
            DEFAULT: 'var(--secondary)',
            foreground: 'var(--secondary-foreground)',
          },
          muted: {
            DEFAULT: 'var(--muted)',
            foreground: 'var(--muted-foreground)',
          },
          card: {
            DEFAULT: 'var(--card)',
            foreground: 'var(--card-foreground)',
          },
          border: { DEFAULT: 'var(--border)' },
          input: { DEFAULT: 'var(--input)' },
          ring: { DEFAULT: 'var(--ring)' },
        },
        borderRadius: {
          DEFAULT: 'var(--radius)',
          sm: 'calc(var(--radius) - 2px)',
          md: 'var(--radius)',
          lg: 'calc(var(--radius) + 4px)',
        },
        fontFamily: {
          sans: ['var(--font-sans)', 'sans-serif'],
          display: ['var(--font-sans)', 'sans-serif'],
        },
        animation: {
          'beam-drop': 'beam-drop 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          'animation-in': 'animationIn 0.8s ease-out both',
          'spin-slow': 'spin 3s linear infinite',
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  };