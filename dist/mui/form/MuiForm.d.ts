import { SxProps, Theme } from "@mui/material";
import { JSX } from "react";
export default function MuiForm({ children, muiformHook, sx, }: {
    children: JSX.Element | Array<JSX.Element | undefined>;
    muiformHook?: muiformhook;
    sx?: SxProps<Theme>;
}): import("react/jsx-runtime").JSX.Element;
export declare function useMuiForm({ ruleset, onSuccess, serverAction, }: {
    ruleset: ruleStructure;
    onSuccess?: muiformhook["onSuccess"];
    serverAction?: muiformhook["serverAction"];
}): muiformhook;
export interface muiformhook {
    set: (name: {
        [key: string]: boolean;
    }) => void;
    reset: () => void;
    status: (name: string) => boolean;
    ruleset: ruleStructure;
    onSuccess?: (data: {
        [key: string]: string;
    }, setError: (names: Array<string>) => void) => Promise<void>;
    serverAction?: ({ data, setError, }: {
        data: {
            [key: string]: string;
        };
        setError: (names: Array<string>) => void;
    }) => Promise<void>;
}
export interface ruleStructure {
    [key: string]: ruleCallback["callback"];
}
interface ruleCallback {
    callback: (value: string, formData: FormData, setError: (names: Array<string>) => void) => boolean;
}
export {};
