const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-bg-base)',
        surface: 'var(--color-bg-surface)',
        elevated: 'var(--color-bg-elevated)',
        forest: 'var(--color-forest)',
        'forest-light': 'var(--color-forest-light)',
        fog: 'var(--color-fog)',
        'fog-muted': 'var(--color-fog-muted)',
        'fog-subtle': 'var(--color-fog-subtle)',
        border: 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
      },
      letterSpacing: {
        wide: '0.04em',
        wider: '0.12em',
        widest: '0.2em',
      },
      lineHeight: {
        tight: '1.05',
      },
    },
  },
  plugins: [],
}

export default config
