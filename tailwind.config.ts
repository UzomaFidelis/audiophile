import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-hero-mobile": "url('/images/home/mobile/image-hero.jpg')",
        "home-hero-tablet": "url('/images/home/tablet/image-hero.jpg')",
        "home-hero-desktop": "url('/images/home/desktop/image-hero.jpg')",
      },
      fontSize: {
        regular: "0.93rem",
      },
      fontFamily: {
        manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        backcolor: "#fafafa",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        accentMain: "#d87d4a",
        accentLight: "#fbaf85",
        gray: "#f1f1f1",
        lightGray: "#d3d3d3",
        white: "#fff",
        black: "#191919",
        text: "rgba(0,0,0,0.5)",
        textLight: "rgba(255,255,255,0.5)",
        divider: "rgba(255,255,255,0.1)",
        placeholder: "rgba(0,0,0,.4)",
        inputBorder: "#CFCFCF",
        inputError: "#CD2C2C",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionProperty: {
        width: "width",
        height: "max-height",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(0.5)", opacity: "1" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
      },
      animation: {
        ripple: "ripple 0.5s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
