import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "rtl-blue": "var(--color-blue)",
      },
    },
    fontSize: {
      xs: ['10px', '1rem'],
      sm: ['12px', '1rem'],
      base: ['14px', '1.25rem'],
      lg: ['18px', '1.25rem'],
      xl: ['20px', '1.25rem'],
    }
  },
  plugins: [],
} satisfies Config;
