import { literal } from 'astro:schema';

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", "[data-theme='dark']"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-fill"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-text-base"),
          card: withOpacity("--color-card"),
          "card-muted": withOpacity("--color-card-muted"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-border"),
          fill: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },
      fontFamily: {
        body:["Noto Sans TC", "sans-serif"],
        mono: ["Fira Mono", "monospace"],
      },

      typography: {
        DEFAULT: {
          css: {
            pre: {
              color: false,
            },
            code: {
              color: false,
            },
            h1: {
              fontSize: '2rem',
              lineHeight: '2rem',
            },
            h2: {
              fontSize: '1.5rem',
              lineHeight: '1.5rem',
            },
            h3: {
              fontSize: '1.25rem',
              lineHeight: '1.25rem',
              // fontStyle: "normal",
            },
            h4: {
              fontSize: '1.15rem',
              // lineHeight: '1.75rem',
            },
            h5: {
              fontSize: '1.05rem',
              lineHeight: '1.05rem',
            },
            h6: {
              fontSize: '1rem',
              lineHeight: '1rem',
              fontStyle: "italic",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
