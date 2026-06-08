import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        accent: "#2563eb",
        moss: "#2f7d65",
        amber: "#c47a2c",
        paper: "#f7f8fb"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 32, 51, 0.08)",
        card: "0 10px 28px rgba(23, 32, 51, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
