/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    boxShadow:{
      'inset-vertical': `inset 0.75rem -0.25rem 1rem -1rem rgba(0, 0, 0, 0.5),
                            inset -0.75rem -0.25rem 1rem -1rem rgba(0, 0, 0, 0.5)`,
      'inset-horizontal': `inset 0.75rem -0.25rem 1rem -0.75rem rgba(0, 0, 0, 0.5), 
                            inset -0.75rem -0.25rem 1rem -0.75rem rgba(0, 0, 0, 0.5)`,
    },
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  important: "#rsf",
}

