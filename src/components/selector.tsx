import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  ThemeProvider,
} from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { useRegister } from "../register/register";
import { ThemeContext, createregisterKeys } from "..";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

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
  setValue: (value: string) => void;
  setError: (value: boolean) => void;
}

export function Selector({
  width,
  items,
  labelColor,
  label,
  id,
  onchange,
  color,
  name,
  value,
  registerkeys,
}: SelectorProps) {
  const [currentVal, setCurrentVal] = useState<string>(value || "");
  const [error, setError] = useState(false);
  const theme = useContext(ThemeContext);
  useRegister(
    createregisterKeys<SelectorRegister>({
      keys: {
        primary: registerkeys?.primary,
        secondary: registerkeys?.secondary,
      },
      registerOptions: {
        setValue: setCurrentVal,
        setError: setError,
      },
    })
  );

  const MenuProps = useMemo(() => {
    return {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: width || 300,
        },
      },
    };
  }, [width]);

  const component = (
    <Box>
      <FormControl sx={{ m: 1, width: width || 300 }}>
        <InputLabel id={id} sx={{ color: labelColor || "white" }} color={color}>
          {label}
        </InputLabel>
        <Select
          labelId={id}
          input={<OutlinedInput label="Page" />}
          MenuProps={MenuProps}
          value={currentVal}
          onChange={(val) => {
            setCurrentVal(val.target.value);
            onchange && onchange(val.target.value);
          }}
          error={error}
          name={name}
          color={color}
        >
          {items.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
  return theme.theme ? (
    <ThemeProvider theme={theme.theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

export function RandomString(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
