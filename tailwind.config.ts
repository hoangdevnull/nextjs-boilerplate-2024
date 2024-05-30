/* eslint-disable global-require */
import { nextui } from '@nextui-org/theme';
import { withTV } from 'tailwind-variants/dist/transformer';
import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      minHeight: {
        layout: 'calc(100vh - 96px)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      backgroundImage: {},
      boxShadow: {},
      dropShadow: {},
      borderRadius: {
        4: '4px',
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      borderWidth: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              '50': '#eef6ff',
              '100': '#d9e9ff',
              '200': '#bcdaff',
              '300': '#8ec3ff',
              '400': '#59a1ff',
              '500': '#337cfe',
              '600': '#1053f3',
              '700': '#1546e0',
              '800': '#183ab5',
              '900': '#19368f',
              DEFAULT: '#1053f3',
              foreground: '#d9e9ff',
            },
            foreground: {
              '50': '#eef6ff',
              '100': '#d9e9ff',
              '200': '#bcdaff',
              '300': '#8ec3ff',
              '400': '#59a1ff',
              '500': '#337cfe',
              '600': '#1053f3',
              '700': '#1546e0',
              '800': '#183ab5',
              '900': '#19368f',
              DEFAULT: '#142357',
              foreground: '#eef6ff',
            },
            background: {
              '50': '#f1f8ff',
              '100': '#dbecfe',
              '200': '#bfdffe',
              '300': '#93ccfd',
              '400': '#60affa',
              '500': '#3b8ef6',
              '600': '#256feb',
              '700': '#1d5ad8',
              '800': '#1e49af',
              '900': '#1e418a',
              DEFAULT: '#F1F8FF',
            },
          },
          layout: {
            radius: {
              small: '4px', // rounded-small
              medium: '8px', // rounded-medium
              large: '16px', // rounded-large
            },
          },
        },
      },
      defaultTheme: 'light',
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.inset-center': {
          top: '50%',
          left: '50%',
          '@apply absolute -translate-x-1/2 -translate-y-1/2': {},
        },
        '.inset-y-center': {
          top: '50%',
          '@apply absolute -translate-y-1/2': {},
        },
        '.inset-x-center': {
          left: '50%',
          '@apply absolute -translate-x-1/2': {},
        },
      });
    }),
    require('tailwindcss-animate'),
    require('tailwindcss-gradient-border'),
  ],
};

export default withTV(config);
