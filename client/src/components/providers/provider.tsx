import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme-provider";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};
