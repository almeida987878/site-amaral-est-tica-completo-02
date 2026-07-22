import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFFFF",
        offwhite: "#FAF8F6",
        beige: "#F5EEE8",
        rosegold: "#C89B82",
        "rosegold-dark": "#9D6F59",
        espresso: "#45362F",
        charcoal: "#3A3A3A",
        stone: "#6F6A66",
        gold: "#B89A65",
        "gold-light": "#D1B37A",
        "gold-mid": "#C6A46A",
        "gold-deep": "#AE8F57",
        ink: "#181614",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
      borderRadius: {
        card: "1.75rem",
        soft: "1.25rem",
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(24, 22, 20, 0.25)",
        card: "0 12px 40px -18px rgba(69, 54, 47, 0.28)",
      },
      transitionDuration: {
        350: "350ms",
        450: "450ms",
        600: "600ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.55" },
          "80%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.6" },
          "50%": { transform: "translateY(-14px) scale(1.15)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.2, 0.6, 0.4, 1) infinite",
        float: "float 6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
