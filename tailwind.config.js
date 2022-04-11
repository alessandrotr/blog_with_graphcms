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
      },
      textColor: (theme) => theme("colors"),
      textColor: {
        primaryLight: "var(--color-primary-light)",
        secondaryLight: "var(--color-secondary-light)",

        primaryDark: "var(--color-primary-dark)",
        secondaryDark: "var(--color-secondary-dark)",

        colorItems: "var(--color-items)",
      },
      borderColor: (theme) => theme("colors"),
      borderColor: {
        primaryLight: "var(--color-primary-light)",
        secondaryLight: "var(--color-secondary-light)",

        primaryDark: "var(--color-primary-dark)",
        secondaryDark: "var(--color-secondary-dark)",

        colorItems: "var(--color-items)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
