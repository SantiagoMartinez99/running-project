module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          fontFamily: '"JetBrains Mono", monospace',
          primary: "#025259",
          secondary: "#007172",
          accent: "#F29325",
          neutral: "#D94F04",
          background: "#FFFF",
        },
      },
      "light",
    ],
  },
};
