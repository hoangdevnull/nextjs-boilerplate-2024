'use client';

import { useButton, type ButtonProps } from '@nextui-org/button';
import { Ripple } from '@nextui-org/ripple';
import { Spinner } from '@nextui-org/spinner';
import { forwardRef } from '@nextui-org/system';

import { cn } from '@/lib/utils';

interface Props extends ButtonProps {}

const StyledButton = forwardRef<'button', Props>((props, ref) => {
  const { variant = 'solid', fullWidth = false, color = 'primary', radius = 'sm', size = 'lg', ...etc } = props;

  const {
    Component,
    domRef,
    children,
    styles,
    spinnerSize,
    spinner = <Spinner color="current" size={spinnerSize} />,
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly,
  } = useButton({ variant, size, fullWidth, radius, color, ...etc, ref });

  return (
    <Component
      ref={domRef}
      className={cn(styles, 'font-normal hover:opacity-100 data-[hover=true]:opacity-100', {
        'text-base leading-[150%] px-6 h-12': size === 'lg',
        'text-sm': size === 'md',
        'bg-primary-600 text-white': variant === 'solid' && color === 'primary',
        'bg-white text-primary-700': variant === 'solid' && color === 'default',
        'border hover:border-black/80 hover:text-black/80 border-black text-black':
          variant === 'bordered' && color === 'default',
        '': variant === 'bordered' && color === 'primary',
      })}
      {...getButtonProps()}
    >
      {startContent}
      {isLoading && spinnerPlacement === 'start' && spinner}
      {isLoading && isIconOnly ? null : children}
      {isLoading && spinnerPlacement === 'end' && spinner}
      {endContent}
      {!disableRipple && <Ripple {...getRippleProps()} />}
    </Component>
  );
});

StyledButton.displayName = 'StyledButton';

export { StyledButton };
