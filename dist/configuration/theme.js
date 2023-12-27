import { createTheme } from "@mui/material";
import { createContext, useContext } from "react";
export const _themeContext = createContext({ theme: createTheme() });
export function setTheme(theme) {
    const themeContext = useContext(_themeContext);
    themeContext.theme = theme;
}
export default setTheme;
