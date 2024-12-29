import { useContext } from "react";
import { ThemeContext, ThemeProvider } from ".";

const ThemeDisplay = () => {
  // Consume the theme value using the custom hook
  const theme = useContext(ThemeContext);

  return <div>The current theme is: {theme.a}</div>;
};

const ReactUseContext = () => {
  return (
    <ThemeProvider>
      <div>
        <p>Theme Example</p>
        <ThemeDisplay />
      </div>
    </ThemeProvider>
  );
};

export default ReactUseContext;
