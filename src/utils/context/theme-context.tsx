import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/Theme';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const LIGHT = 'light';
export const DARK = 'dark';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: LIGHT,
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(LIGHT);
  const toggleTheme = () => {
    setTheme(theme => (theme === LIGHT ? DARK : LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider
        theme={theme === LIGHT ? lightTheme : darkTheme}
      >
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
