/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
      },
      gray: {
        50: "#f9fafb",
        100: "#f4f5f7",
        200: "#e5e7eb",
        300: "#d2d6dc",
      },
    },
    extend: {
      width: {
        128: "32rem",
        256: "64rem",
        "r1/2": "50vw",
      },
      height: {
        128: "32rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};
