'use client';

import React, { useState, type PropsWithChildren } from 'react';
import { AppContext } from '@/context/app.context';

import Footer from '@/components/footer';
import { Navbar } from '@/components/navbar';

const Layout = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState<string | undefined>(undefined);
  return (
    <AppContext.Provider value={{ activeNav: active, setActiveNav: setActive }}>
      <div className="relative flex flex-col">
        <Navbar />
        <main className="bg-background mx-auto w-full grow text-clip">
          <div className="min-h-screen pb-8">
            {/* <Preload>{children}</Preload> */}
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
