/** @type {import('tailwindcss').Config} */
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
            dark: "#610819",
            darker: "#33040d",
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
        },
      },
      fontFamily: {
        bignoodle: ["BigNoodleTitling"],
        bignoodleoblique: ["BigNoodleTitlingOblique"],
        robotocondensed: ["RobotoCondensed"],
        robotocondenseditalic: ["RobotoCondensedItalic"],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border|from|to)-rrc-(bronze|silver|gold|platinum|diamond|master|grandmaster|legendary|top5)/,
    },
  ],
};
