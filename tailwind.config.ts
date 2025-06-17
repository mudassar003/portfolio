import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Extra small devices
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["JetBrains Mono", "SF Mono", "Monaco", "Cascadia Code", "Roboto Mono", "Consolas", "Courier New", "monospace"],
        heading: ["JetBrains Mono", "SF Mono", "Monaco", "Cascadia Code", "Roboto Mono", "Consolas", "Courier New", "monospace"],
        mono: ["JetBrains Mono", "SF Mono", "Monaco", "Cascadia Code", "Roboto Mono", "Consolas", "Courier New", "monospace"],
      },
      letterSpacing: {
        "tighter": "-0.02em",
        "tight": "-0.01em",
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;