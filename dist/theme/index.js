import { createContext } from "react";
class themeControls {
    theme;
    setTheme(theme) {
        this.theme = theme;
    }
}
const themeControlsObj = new themeControls();
export const ThemeContext = createContext(themeControlsObj);
export function createMuiNextTheme({ theme }) {
    themeControlsObj.setTheme(theme);
}
