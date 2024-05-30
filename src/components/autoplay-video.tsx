'use client';

import React, { forwardRef, useCallback, useEffect, useRef, type ComponentProps, type ElementRef } from 'react';
import { useMergedRef } from '@mantine/hooks';

const AutoPlayVideo = forwardRef<HTMLVideoElement, ComponentProps<'video'>>(({ src, ...props }, videoRef) => {
  const appRef = useRef<ElementRef<'video'>>(null);

  const ref = useMergedRef(videoRef, appRef);

  const attemptPlay = useCallback(() => {
    if (!appRef?.current) return;
    appRef?.current.play().catch((error) => {
      console.error('Error attempting to play', error);
    });
  }, [appRef]);

  useEffect(() => {
    attemptPlay();
  }, [attemptPlay]);

  return (
    <video ref={ref} playsInline autoPlay loop muted {...props}>
      <source src={src} type="video/mp4" />
    </video>
  );
});

export default AutoPlayVideo;
