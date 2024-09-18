const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        heading: ["Impact", "Haettenschweiler", "Franklin Gothic Bold", "Charcoal", "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        zinc: {
          900: "#18181B", // Explicitly defining zinc-900
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        'golden-sm': '0.618rem',
        'golden-md': '1rem',
        'golden-lg': '1.618rem',
        'golden-xl': '2.618rem',
        'golden-2xl': '4.236rem',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.5)' },
        }
      },
      animation: {
        twinkle: 'twinkle var(--twinkle-duration, 5s) ease-in-out infinite',
      },
      backgroundImage: {
        'dot-pattern': `radial-gradient(circle, currentColor 1px, transparent 1px)`,
      },
      backgroundSize: {
        'dot-pattern': '40px 40px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}