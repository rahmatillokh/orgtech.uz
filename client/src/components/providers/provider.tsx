import { BrowserRouter } from "react-router-dom";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
