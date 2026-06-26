/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: {
          950: "#05070d",
          900: "#070a13",
          800: "#0c1019",
        },
        indigo: {
          glow: "#6366f1",
        },
        cyanGlow: "#22d3ee",
        amberGlow: "#f59e0b",
      },
      boxShadow: {
        "glass-sm": "0 1px 0 0 rgba(255,255,255,0.06) inset",
      },
    },
  },
  plugins: [],
}
