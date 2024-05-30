'use client';

import React, { useState, type PropsWithChildren } from 'react';
import { AppContextProvider } from '@/context/app.context';

import Footer from '@/components/footer';
import { Navbar } from '@/components/navbar';

const Layout = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState<string | undefined>(undefined);
  return (
    <AppContextProvider value={{ activeNav: active, setActiveNav: setActive }}>
      <div className="relative flex flex-col">
        <Navbar />
        <main className="bg-background mx-auto w-full grow text-clip">
          <div className="min-h-screen pb-8">{children}</div>
        </main>
        <Footer />
      </div>
    </AppContextProvider>
  );
};

export default Layout;
