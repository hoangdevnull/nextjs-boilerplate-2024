import { createSafeContext } from '@/lib/create-safe-context';

type AppContextProps = {
  activeNav?: string;
  setActiveNav: (id: string) => void;
};

export const [AppContextProvider, useAppContext] = createSafeContext<AppContextProps>(
  'AppContextProvider component was not found in tree'
);
