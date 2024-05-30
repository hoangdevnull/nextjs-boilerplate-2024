import { createContext, useContext } from 'react';

type AppContextProps = {
  activeNav?: string;
  setActiveNav: (id: string) => void;
};

export const AppContext = createContext<AppContextProps | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within a <Carousel />');
  }

  return context;
}
