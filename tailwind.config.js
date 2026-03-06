/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: '#FF6B6B',
        pink2: '#FF8E8E',
        yellow: '#FFD93D',
        yellow2: '#FFE87A',
        green: '#6BCB77',
        green2: '#9EE8A7',
        blue: '#4D96FF',
        blue2: '#85B8FF',
        purple: '#C77DFF',
        orange: '#FF9F43',
        bg: '#FFFCF5',
        dark: '#1E1E2E',
        mid: '#5A5A7A',
        light: '#F4F1FF',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Baloo 2', 'cursive'],
      },
      borderRadius: {
        'sm': '14px',
        'md': '22px',
        'lg': '32px',
        'xl': '48px',
      },
      boxShadow: {
        'sm': '0 2px 12px rgba(0,0,0,.06)',
        'md': '0 6px 28px rgba(0,0,0,.10)',
        'lg': '0 14px 48px rgba(0,0,0,.13)',
      },
      animation: {
        'blob-float': 'blobFloat 8s ease-in-out infinite',
        'sticker-float': 'stickerFloat 4s ease-in-out infinite',
        'wobble': 'wobble 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        blobFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translateY(-25px) scale(1.08) rotate(5deg)' },
          '66%': { transform: 'translateY(15px) scale(0.94) rotate(-3deg)' },
        },
        stickerFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(12deg)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}
