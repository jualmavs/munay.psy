/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      colors: {
        m: {
          bg:     '#05050A',
          bg1:    '#0A0A14',
          bg2:    '#0F0F1E',
          card:   '#12121F',
          purple: '#8B5CF6',
          blue:   '#3B82F6',
          cyan:   '#06B6D4',
          pink:   '#EC4899',
          gold:   '#F59E0B',
          text:   '#F8F5FF',
          muted:  '#94A3B8',
        },
      },
      backgroundImage: {
        iridescent: 'linear-gradient(135deg,#8B5CF6 0%,#3B82F6 35%,#06B6D4 60%,#EC4899 100%)',
      },
      animation: {
        float:  'float 6s ease-in-out infinite',
        glow:   'glow 3s ease-in-out infinite',
        spin1:  'spin 20s linear infinite',
        spin2:  'spin 30s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(139,92,246,0.4)' },
          '50%':     { boxShadow: '0 0 50px rgba(59,130,246,0.7)' },
        },
      },
    },
  },
  plugins: [],
};
