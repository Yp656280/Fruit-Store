/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-focus-shadow":
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        "custom-shadow": " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        "custom-green-shadow": "0 0 0 .25rem rgba(129,196,8,.25)",
        "custom-shadow33333":
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        "header-shadow": " 0 .5rem 1rem rgba(0,0,0,.15) ",
        "focus-shadow": "0 0 55px rgba(0, 0, 0, 0.4)",
      },
      textColor: {
        "custom-green": {
          500: "#93ca30",
          700: "#81c408",
          900: "#45595b ",
        },
        "custom-orange": {
          500: "#f9b635",
        },
        "coustom-grey": {
          500: "#97a9a8",

          600: "#4b5758",
          700: "#757d87",
          900: "#747d88",
        },
      },
      backgroundColor: {
        "custom-orange": {
          500: "#f9b635",
        },

        "custom-green": {
          500: "#93ca30",
        },
        "custom-grey": {
          500: "#f5f6f8",
          600: "#45595a",
        },
      },
      borderColor: {
        "custom-orange": {
          500: "#f9b635",
        },
        "custom-grey": {
          500: "#f5f6f8",
          600: "#45595a",
          700: "#ced4da",
        },
        "custom-green": {
          500: "#93ca30",
          600: "#c0e284",
        },
      },
      accentColor: {
        "custom-green": {
          500: "#81c408",
        },
      },
      height: {
        108: "550px",
        110: "750px",
        115: "450px",
        120: "300px",
        105: "35rem",
        "73rem": "73rem",
        "75rem": "75rem",
        "150rem": "150rem",
        "75vh": "75vh",
        "9%": "9%",
        "100rem": "100rem",
        "105rem": "105rem",
        "200px": "200px",
        "35rem": "35rem",
        "50rem": " 50rem",
        "70vh": "70vh",
        "100vh": "100vh",
        "250px": "250px",
        "22%": "22%",
        "90rem": "90rem",
        "30rem": "30rem",
        "68rem": "68rem",
        "23%": "23%",
        "40rem": "40rem",
        "90%": "90%",
        "60%": "60%",
        "70%": "70%",
        "25rem": "25rem",
      },
      width: {
        120: "300px",
        110: "45%",
        105: "35rem",
        "30rem": "30rem",
        "25rem": "25rem",
        "15rem": "15rem",
        "20rem": "20rem",
        "22rem": "22rem",
        "85%": "85%",
        "22%": "22%",

        "35rem": "35rem",
        "40rem": "40rem",
        "18rem": "18rem",
        "50rem": "50rem",
        "650px": "750px",
        "25rem": "25rem",

        "300px": "300px",
        "80%": "80%",
        "90%": "90%",
        "87%": "87%",
        "55%": "55%",
        "45%": "45%",
        "30%": "30%",
        "70%": "70%",
      },
      screens: {
        phone: "450px",
        536: "536px",
        970: "970px",
        900: "900px",
      },
      lineHeight: {
        15: "5rem",
      },
    },
  },
  plugins: [],
};
