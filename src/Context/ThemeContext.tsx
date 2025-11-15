import { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeContextType {
  isLight: boolean;
  handleChangeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLight, setIsLight] = useState<boolean>(true);

  const handleChangeTheme = () => {
    setIsLight(!isLight);
  };
  return (
    <ThemeContext.Provider value={{ isLight, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("context is not setted");
  }
  return context;
};
