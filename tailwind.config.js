/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss";

module.exports = {
  content: [
    "./src/routes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        rrc: {
          blue: {
            DEFAULT: "#092668",
            light: "#194ab9",
            lighter: "#3364d6",
            dark: "#071b48",
            darker: "#030d24",
            darkest: "#020a1c",
          },
          red: {
            DEFAULT: "#fa012d",
            light: "#f93c5d",
            dark: "#cf1334",
            darker: "#610819",
            darkest: "#33040d",
          },
          bronze: "#9b643c",
          silver: "#949494",
          gold: "#ffed38",
          platinum: "#c4c4c4",
          diamond: "#a1c3ff",
          master: "#ffd23a",
          grandmaster: "#fff8d2",
          legendary: "#fc8c24",
          top5: "#29cfff",
          damage: "#fffc31",
        },
      },
      fontFamily: {
        bignoodle: ["BigNoodleTitling"],
        bignoodleoblique: ["BigNoodleTitlingOblique"],
        robotocondensed: ["RobotoCondensed"],
        robotocondenseditalic: ["RobotoCondensedItalic"],
        lithosproblack: ["LithosProBlack"],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border|from|to)-rrc-(bronze|silver|gold|platinum|diamond|master|grandmaster|legendary|top5)/,
    },
  ],
};
