/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A8151C",
          secondary: "#00cff2",
          accent: "#cf0000",
          neutral: "#040705",
          "base-100": "#FFFFFF",
          info: "#00e2ff",
          success: "#60a300",
          warning: "#df9a00",
          error: "#ff3d77",
        },
      },
    ],
  },
};
