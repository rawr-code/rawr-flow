import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        editor: {
          node: {
            border: '#c2c2c2',
            bg: '#ffffff',
            text: '#383838',
          },
          bg: '#f5f6f7',
        },
      },
    },
  },
  plugins: [],
}
export default config
