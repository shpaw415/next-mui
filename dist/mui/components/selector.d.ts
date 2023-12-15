interface SelectorProps {
    width?: string | number;
    items: Array<string>;
    labelColor?: string;
    label: string;
    id: string;
    name: string;
    color?: "primary" | "secondary";
    onchange?: (value: string) => void;
    error?: boolean;
    value?: string;
    registerkeys?: {
        primary: string;
        secondary: string;
    };
}
export interface SelectorRegister {
    [key: string]: {
        setValue: (value: string) => void;
        setError: (value: boolean) => void;
    };
}
export declare function Selector({ width, items, labelColor, label, id, onchange, color, name, value, registerkeys, }: SelectorProps): import("react/jsx-runtime").JSX.Element;
export declare function RandomString(length: number): string;
export {};
