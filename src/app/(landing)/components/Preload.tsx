'use client';

import React, { useEffect, useState, type PropsWithChildren } from 'react';
import Image from 'next/image';

const sources: string[] = [];

function loadAll() {
  const promises = sources.map((source) => {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.src = `/images/${source}`;
      img.onload = () => resolve(true);
    });
  });

  return Promise.allSettled(promises);
}
const Preload = ({ children }: PropsWithChildren) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await loadAll();
      setLoaded(true);
      setTimeout(() => {
        setLoaded(true);
      }, 30000);
    })();
  }, []);

  if (loaded) return <>{children}</>;
  return (
    <div className="bg-background fixed inset-0 z-[999999] flex min-h-screen items-center justify-center">
      <Image
        className="pointer-events-none animate-pulse"
        src="/images/logo-icon.svg"
        alt=""
        width={150}
        height={150}
      />
    </div>
  );
};

export default Preload;
