/// <reference types="react" />
import { Theme } from "@mui/material";
declare class themeControls {
    theme: Theme | undefined;
    setTheme(theme: Theme): void;
}
export declare const ThemeContext: import("react").Context<themeControls>;
export declare function createMuiNextTheme({ theme }: {
    theme: Theme;
}): void;
export {};
