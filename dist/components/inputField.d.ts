import { InputLabelProps, OutlinedInputProps, TextFieldProps, TextFieldVariants, Theme } from "@mui/material";
import { registerKey } from "..";
interface SearchFieldsProps {
    placeholder: string;
    onchange: (value: string) => void;
}
export declare function SearchField({ placeholder, onchange }: SearchFieldsProps): import("react/jsx-runtime").JSX.Element;
export interface InputFieldRegister {
    set: ({ error, value }: {
        error: boolean;
        value: string;
    }) => void;
    reset: () => void;
}
export declare function InputField<Variant extends TextFieldVariants>(props: {
    variant?: Variant;
    registerkeys?: registerKey;
    theme?: Theme;
} & Omit<TextFieldProps, "variant">): import("react/jsx-runtime").JSX.Element;
export declare function PasswordField({ label, labelProps, inputProps, registerkeys, }: {
    label?: string;
    labelProps?: InputLabelProps;
    inputProps?: OutlinedInputProps;
    registerkeys?: registerKey;
}): import("react/jsx-runtime").JSX.Element;
export {};
