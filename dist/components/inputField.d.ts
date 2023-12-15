import { TextFieldProps, TextFieldVariants } from "@mui/material";
import { RefObject } from "react";
interface SearchFieldsProps {
    placeholder: string;
    onchange: (value: string) => void;
}
export declare function SearchField({ placeholder, onchange }: SearchFieldsProps): import("react/jsx-runtime").JSX.Element;
export interface InputFieldRegister {
    [key: string]: {
        set: ({ error, value }: {
            error: boolean;
            value: string;
        }) => void;
    };
}
export declare function InputField<Variant extends TextFieldVariants>(props: {
    variant?: Variant;
    registerkeys?: {
        primary: string;
        secondary: string;
    };
} & Omit<TextFieldProps, "variant">): import("react/jsx-runtime").JSX.Element;
type childProps = {
    name: string;
    required?: boolean;
    label?: string;
    error?: boolean;
    ref: RefObject<null>;
};
export declare const PasswordField: import("react").ForwardRefExoticComponent<Omit<childProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
