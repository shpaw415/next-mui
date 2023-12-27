import { Theme } from "@mui/material";
import { createContext } from "react";

class themeControls {
  public theme: Theme | undefined;

  setTheme(theme: Theme) {
    this.theme = theme;
  }
}
const themeControlsObj = new themeControls();
export const ThemeContext = createContext(themeControlsObj);

export function createMuiNextTheme({ theme }: { theme: Theme }) {
  themeControlsObj.setTheme(theme);
}
