import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

interface AddUtilitiesOptions {
  [key: string]: {
    [key: string]: string;
  };
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#65C9FB",
        "light-brown": "#FFFFC9",
        "dark-brown": "#B66756",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({
      addUtilities,
    }: {
      addUtilities: (options: AddUtilitiesOptions) => void;
    }) {
      addUtilities({
        ".maskImage": {
          maskImage: "linear-gradient(#FFFFFF 70%, transparent)",
        },
      });
    },
  ],
};
export default config;


