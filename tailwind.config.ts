import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: "500px",
        xs: "375px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        orange: "#EF761D",
        blue: "#6A9ABE",
        yellow: "#FFCA48",
        black:"#000000",
        white: "#FFFFFF",
        brown: "#D0BCA7",
        dark_brown: "#B8A695",
        pink: "#FEB5AA",
        light_rose: "#F9ECE5",
      },
      fontFamily: {
        brandon_bold: ["Brandon Bold", "sans-serif"],
        poynter_bold: ["Poynter Bold", "sans-serif"],
        cervo_medium_neue: ["Cervo Medium Neue","sans-serif"],
        sentinel_book: ["Sentinel Book","sans-serif"],
        bon_viviant: ["Bon Vivant", "sans-serif"],
      },
      fontSize: {
        70: ["4.4rem", "4.4rem"], //70px
        "mobile_md": [".7rem", ".7rem"]
      },
      rotate: {
        '30': '30deg',
      }
    },
  },
  plugins: [],
}
export default config
