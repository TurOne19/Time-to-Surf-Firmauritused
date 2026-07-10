import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C2630",
        "ink-2": "#123641",
        sand: "#EFE3CB",
        "sand-2": "#E4D3AC",
        gold: "#D9A94E",
        "gold-2": "#C4924A",
        dusk: "#C97066",
        foam: "#6E9C90",
        ivory: "#F7F1E3",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        label: ["var(--font-label)", "sans-serif"],
      },
      letterSpacing: {
        wideish: "0.08em",
        widest2: "0.24em",
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
