import { tv } from 'tailwind-variants';

export const container = tv({
  base: 'mx-auto w-full',
  variants: {
    size: {
      default: 'max-w-[1536px] px-4 md:px-6',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export const title = tv({
  base: 'block text-center font-mono ',
  variants: {
    color: {
      white: 'text-white',
    },
    size: {
      lg: 'text-4xl !leading-[160%] lg:text-6xl 2xl:text-[84px]',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export const heading = tv({
  base: '',
  variants: {
    variant: {
      56: 'text-[56px] leading-[67.2px]',
      48: 'text-5xl',
      40: 'text-[40px]',
      32: 'text-[32px] leading-[130%]',
      24: 'text-2xl',
      20: 'text-xl',
    },
    weight: {
      700: 'font-bold',
      500: 'font-medium',
      400: 'font-normal',
    },
  },
  defaultVariants: {
    variant: 32,
    weight: 500,
  },
});

export const body = tv({
  base: '',
  variants: {
    variant: {
      18: 'text-lg leading-[150%]',
      16: 'text-base',
      14: 'text-sm',
      12: 'text-xs',
      10: 'text-[10px]',
    },
  },
  defaultVariants: {},
});
