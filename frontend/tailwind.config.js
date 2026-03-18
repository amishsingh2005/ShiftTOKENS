/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0E1A",
        card: "#111C30",
        "card-light": "#162038",
        accent: {
          blue: "#00B4FF",
          green: "#00C853",
          red: "#E74C3C",
          gold: "#F39C12",
          cyan: "#00F5FF",
        },
        text: {
          light: "#D0D8E8",
          muted: "#8A9BB5",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 180, 255, 0.3)',
        'glow-green': '0 0 20px rgba(0, 200, 83, 0.3)',
        'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.3)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
