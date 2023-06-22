module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.svg"],
    layers: ["components"],
    options: {
      safelist: ["hidden"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.primary"),
              "&:hover": {
                color: theme("colors.green"),
              },
            },
            "a code": {
              color: theme("colors.primary"),
            },
            "a strong": {
              color: theme("colors.primary"),
            },
            code: {
              color: theme("colors.primary"),
            },
            pre: {
              backgroundColor: theme("colors.primary"),
            },
            blockquote: {
              color: theme("colors.primary"),
              fontSize: "24px",
            },
          },
        },
      }),
      colors: {
        primary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-primary), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-primary), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-primary))`;
        },
        secondary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-secondary), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-secondary), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--color-secondary))`;
        },
        green: {
          DEFAULT: "#588157",
          light: "#A3B18A",
          medium: "#486757",
          dark: "#3A5A40",
          success: "#29BC2F",
        },
        gray: {
          light: "#BEBBB2",
          light2: "#ECECEC",
          light3: "#F6F6F6",
          light4: "#D9D9D9",
          DEFAULT: "#CFCDC4",
        },
        orangeTropezon: "#9e572d",
        blueTropezon: "#161b23",
        red: {
          error: "#F25454",
        },
        state: {
          info: "#2F80ED",
          success: "#27AE60",
          warning: "#E2B93B",
          error: "#EB5757",
        },
      },
      fontFamily: {
        heading: "Playfair Display, sans-serif",
        body: "Raleway, sans-serif",
        numbers: "Open Sans, sans-serif",
        hoeflerTextBold: "hoeflertext-bold, sans-serif",
        hoeflerText: "hoeflertext, sans-serif",
        hoeflerTextReg: "hoeflertextregm sans-serif",
        hoeflerTextBlack: "hoeflertext-black, sans-serif",
        hoeflerTextBlackItalic: "hoeflertext-black-italic, sans-serif",
        hoeflerTextItalic: "hoeflertext-italic, sans-serif",
        tradeGothicLt: "tradegothic-lt, sans-serif",
        tradeGothicLtBold: "tradegothic-lt-bold, sans-serif",
        tradeGothicLtBold2: "tradegothic-lt-bold-2, sans-serif",
        tradeGothicLtBold2Oblique: "tradegothic-lt-bold-2-oblique, sans-serif",
        tradeGothicLtBoldCondensed20:
          "tradegothic-lt-bold-condensed-20, sans-serif",
        tradeGothicLtBoldCondensed20Oblique:
          "tradegothic-lt-bold-condensed-20-oblique, sans-serif",
        tradeGothicLtBoldExtended: "tradegothic-lt-bold-extended, sans-serif",
        tradeGothicLtBoldOblique: "tradegothic-lt-bold-oblique, sans-serif",
        tradeGothicLtBoldCondensed18:
          "tradegothic-lt-bold-condensed-18, sans-serif",
        tradeGothicLtBoldCondensed18Oblique:
          "tradegothic-lt-bold-condensed-18-oblique, sans-serif",
        tradeGothicLtBoldExtended: "tradegothic-lt-extended, sans-serif",
        tradeGothicLtLight: "tradegothic-lt-light, sans-serif",
        tradeGothicLtLightOblique: "tradegothic-lt-light-oblique, sans-serif",
        tradeGothicLtOblique: "tradegothic-lt-oblique, sans-serif",
      },
      container: {
        center: true,
        padding: "1.25rem",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.5rem",
        14: "4rem",
        15: "5rem",
      },
      dropShadow: {
        "light-1": "0px 4px 10px rgba(218, 215, 205, 0.14)",
      },
      width: {
        tour: "360px",
      },
      height: {
        tour: "520px",
      },
      scale: {
        60: ".60",
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ["hover"],
      visibility: ["group-hover"],
      scale: ["group-hover"],
      height: ["group-hover"],
      borderWidth: ["last"],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    require("@tailwindcss/typography"),
  ],
};
