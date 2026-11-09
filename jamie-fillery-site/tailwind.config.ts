import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0f",
        charcoal: "#151518",
        graphite: "#212125",
        ash: "#8e8e96",
        mist: "#c9c6c0",
        bone: "#f1ece4",
        brass: "#b39a74",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { wider2: "0.22em" },
    },
  },
  plugins: [],
};

export default config;
