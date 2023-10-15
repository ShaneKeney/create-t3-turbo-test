const colors = require("tailwindcss/colors");

/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@acme/tailwind-config")],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Works as expected
        // e.g. bg-brandPrimary vs. dark:bg-brandPrimaryDark
        brandPrimary: "#1DE083",

        background: colors.gray[100],
        backgroundDark: colors.slate[900],
      },
    },
  },
};
