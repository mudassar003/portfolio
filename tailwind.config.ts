import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "SF Mono", "Consolas", "Liberation Mono", "Menlo", "monospace"],
      },
      letterSpacing: {
        "tighter": "-0.02em",
        "tight": "-0.01em",
      },
    },
  },
  plugins: [],
} satisfies Config;