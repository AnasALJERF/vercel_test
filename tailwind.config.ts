import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        8: "0.08",
        12: "0.12",
        15: "0.15",
        85: "0.85",
      },
      colors: {
        // Core brand — "Honey & Walnut"
        espresso: "#15100A", // deepest surface, near-black brown
        walnut: "#241B12",   // primary dark surface
        bark: "#3A2C1E",     // raised dark surface / cards
        honey: "#C79A3C",    // primary accent — honey gold
        amber: "#E4BC6B",    // bright highlight
        bone: "#EFE8DA",     // primary light text / light surface
        parchment: "#F6F1E7",// lightest surface
        taupe: "#9A8A74",    // muted secondary text
        clay: "#7A5C3A",     // secondary warm tone
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "El Messiri", "Tahoma", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.4rem, 5.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.9rem, 4vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        eyebrow: "0.32em",
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(199,154,60,0.45)",
        lift: "0 30px 60px -30px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "honey-grad": "linear-gradient(135deg, #E4BC6B 0%, #C79A3C 45%, #7A5C3A 100%)",
        "walnut-veil": "radial-gradient(120% 90% at 50% 0%, rgba(199,154,60,0.10) 0%, rgba(21,16,10,0) 55%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
