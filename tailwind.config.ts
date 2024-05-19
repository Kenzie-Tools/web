import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      "colors": {
        "primary": {
          "1": "#16BAC5",
          "2": "#5FBFF5",
          "3": "#EFE9F4",
          "4": "#171D1C",
          "5": "#5863F8"
        }
      }
    }
  },

  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")]
} as Config;