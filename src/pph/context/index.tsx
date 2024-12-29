import { ReactNode, createContext } from "react";

// Create a context
export const ThemeContext = createContext({ a: "ASAS", b: "sdsd" });

interface Props {
  children: ReactNode;
}
export const ThemeProvider = (props: Props) => {
  const { children } = props;
  const theme = { a: "ASAS", b: "sdsd" };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to consume the context value
// export const useTheme = () => {
//   return useContext(ThemeContext);
// };
