/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#0B0B0B",
        secondarybg: "#111111",
        surface: "#111111",
        accent: "#F07A52",
        accentHover: "#FF8A65",
        muted: "#9C9C9C",
        body: "#EAEAEA",
        heading: "#EAEAEA",
        bordercol: "rgba(255, 255, 255, 0.12)",
        gridcol: "rgba(240, 122, 82, 0.08)",
        activeborder: "#F07A52",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "Helvetica Neue", "sans-serif"],
        mono: ["IBM Plex Mono", "Roboto Mono", "Geist Mono", "monospace"],
      },
      boxShadow: {
        none: "none",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": { opacity: "1" },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": { opacity: "0.8" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        }
      },
      animation: {
        flicker: "flicker 2s infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
