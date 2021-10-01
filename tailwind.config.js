module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        secondary: {
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
        },
        tertiary: {
          100: "var(--color-tertiary-100)",
          200: "var(--color-tertiary-200)",
          300: "var(--color-tertiary-300)",
          400: "var(--color-tertiary-400)",
          500: "var(--color-tertiary-500)",
          600: "var(--color-tertiary-600)",
          700: "var(--color-tertiary-700)",
          800: "var(--color-tertiary-800)",
          900: "var(--color-tertiary-900)",
        },
        quaternary: {
          100: "var(--color-quaternary-100)",
          200: "var(--color-quaternary-200)",
          300: "var(--color-quaternary-300)",
          400: "var(--color-quaternary-400)",
          500: "var(--color-quaternary-500)",
          600: "var(--color-quaternary-600)",
          700: "var(--color-quaternary-700)",
          800: "var(--color-quaternary-800)",
          900: "var(--color-quaternary-900)",
        },
        green: {
          100: "#d0f4f4",
          200: "#a1e9eb",
          300: "#70dde0",
          400: "#3ed2d6",
          500: "#00c7cb",
          600: "#009fa3",
          700: "#00777a",
          800: "#035051",
          900: "#032828",
        },
        lavender: {
          100: "#e4e2f7",
          200: "#c9c5ed",
          300: "#aea8e5",
          400: "#938bdb",
          500: "#786dd3",
          600: "#6058a8",
          700: "#48417f",
          800: "#302c54",
          900: "#18152b",
        },
        purple: {
          100: "#edcef3",
          200: "#da9ce7",
          300: "#c76ada",
          400: "#b534ce",
          500: "#a200c1",
          600: "#81009a",
          700: "#610074",
          800: "#41004d",
          900: "#200227",
        },
        orange: {
          100: "#f8ddd1",
          200: "#f0baa3",
          300: "#ea9875",
          400: "#e27545",
          500: "#da5309",
          600: "#af420a",
          700: "#833209",
          800: "#572108",
          900: "#2b1105",
        },
        critical: {
          400: "var(--color-status-critical-400)",
          500: "var(--color-status-critical-500)"
        }, 
        normal: {
          400: 'var(--color-status-normal-400)',
          500: 'var(--color-status-normal-500)'
        },
        serious: {
          400: 'var(--color-status-serious-400)',
          500: 'var(--color-status-serious-500)'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
