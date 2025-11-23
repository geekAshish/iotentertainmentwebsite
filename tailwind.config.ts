/** @type {import('tailwindcss').Config} */
module.exports = {

  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        // 1. The "Floating" Animation: Moves the element up and down gently
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // 2. The "Glowing" Animation: Pulses the shadow to create a glow
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 40px 10px rgba(59, 130, 246, 0.5)', // Blue glow
            opacity: '0.6',
          },
          '50%': {
            boxShadow: '0 0 80px 20px rgba(59, 130, 246, 0.8)', // More intense blue glow
            opacity: '0.9',
          },
        },
      },
      animation: {
        // Combine the animations. "float" is slower, "pulse-glow" is a bit faster.
        'float-glow': 'float 6s ease-in-out infinite, pulse-glow 4s ease-in-out infinite',
      },
    },
  },

  plugins: [],
};