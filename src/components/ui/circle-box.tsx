import React from 'react';

import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'md' | 'lg';
}
const CircleBox = ({ className, size, children, ...props }: Props) => {
  return (
    <div
      className={cn(className, 'bg-secondary-0150 relative aspect-square rounded-full border-2 ', {
        'min-w-[84px] w-[84px] h-[84px] min-h-[84px] p-3 border-secondary-02100': size === 'md',
        'min-w-[120px] w-[120px] h-[120px] min-h-[120px] p-[9px] border-primary-0515': size === 'lg',
      })}
      {...props}
    >
      {size === 'md' ? (
        <>
          <div className="inset-x-center border-secondary-02100 absolute h-full border-r-2"></div>
          <div className="shadow-circle-box bg-gradient-5 relative z-[2] flex aspect-square h-full w-full items-center justify-center rounded-full">
            {children}
          </div>
        </>
      ) : (
        <div className="bg-secondary-02100 aspect-square h-full w-full rounded-full p-2">
          <div className="shadow-circle-box bg-gradient-5 flex aspect-square h-full w-full items-center justify-center rounded-full">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default CircleBox;
