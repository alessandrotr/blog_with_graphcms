module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
      },
      backgroundColor: {
        primaryLight: "var(--color-primary-light)",
        primaryLightOpacity: "var(--color-primary-light-opacity)",
        secondaryLight: "var(--color-secondary-light)",

        primaryDark: "var(--color-primary-dark)",
        primaryDarkOpacity: "var(--color-primary-dark-opacity)",
        secondaryDark: "var(--color-secondary-dark)",

        colorItems: "var(--color-items)",
        colorItems2: "var(--color-items-2)",
      },
      textColor: (theme) => theme("colors"),
      textColor: {
        primaryLight: "var(--color-primary-light)",
        secondaryLight: "var(--color-secondary-light)",

        primaryDark: "var(--color-primary-dark)",
        secondaryDark: "var(--color-secondary-dark)",

        colorItems: "var(--color-items)",
        colorItems2: "var(--color-items-2)",
      },
      borderColor: (theme) => theme("colors"),
      borderColor: {
        primaryLight: "var(--color-primary-light)",
        secondaryLight: "var(--color-secondary-light)",

        primaryDark: "var(--color-primary-dark)",
        secondaryDark: "var(--color-secondary-dark)",

        colorItems: "var(--color-items)",
        colorItems2: "var(--color-items-2)",
      },
      keyframes: {
        roll: {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "rotate(385deg)" },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1) scale(1.1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },
      animation: {
        roll: "roll 1s ease-in-out",
        zoom: "zoom 1s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
