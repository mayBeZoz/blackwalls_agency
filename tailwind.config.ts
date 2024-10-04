import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    theme: {
        extend: {
            fontFamily: {
                "disket-mono":"Disket Mono",
                "vcr-osd-mono":"VCR OSD Mono"
            },
        },
        container:{
            center:true
        }
    },
    plugins: [],
};
export default config;
