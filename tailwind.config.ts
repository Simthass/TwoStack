import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter:   ["var(--font-inter)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;