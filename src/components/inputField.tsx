import {
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  InputLabelProps,
  OutlinedInput,
  OutlinedInputProps,
  TextField,
  TextFieldProps,
  TextFieldVariants,
  Theme,
  ThemeProvider,
  alpha,
  styled,
} from "@mui/material";
import { useRegister } from "../register/register";
import { RefObject, useContext, useState } from "react";
import {
  Visibility,
  VisibilityOff,
  Search as SearchIcon,
} from "@mui/icons-material";
import { createregisterKeys, registerKey } from "..";
import { ThemeContext } from "../theme";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

interface SearchFieldsProps {
  placeholder: string;
  onchange: (value: string) => void;
}

export function SearchField({ placeholder, onchange }: SearchFieldsProps) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder || "Search…"}
        inputProps={{ "aria-label": "search" }}
        onInput={(event) =>
          onchange((event.currentTarget as HTMLInputElement)?.value)
        }
      />
    </Search>
  );
}

export interface InputFieldRegister {
  set: ({ error, value }: { error: boolean; value: string }) => void;
  reset: () => void;
}

export function InputField<Variant extends TextFieldVariants>(
  props: {
    variant?: Variant;
    registerkeys?: registerKey;
    theme?: Theme;
  } & Omit<TextFieldProps, "variant">
) {
  const theme = useContext(ThemeContext);
  const [state, setState] = useState({
    error: false,
    value: undefined as undefined | string,
  });
  useRegister(
    createregisterKeys<InputFieldRegister>({
      keys: {
        primary: props.registerkeys?.primary,
        secondary: props.registerkeys?.secondary,
      },
      registerOptions: {
        set: setState,
        reset: () => {
          setState((current) => {
            return { ...current, value: "" };
          });
          setTimeout(() => {
            setState((current) => {
              return {
                ...current,
                value: undefined,
              };
            });
          }, 100);
        },
      },
    })
  );
  return theme.theme ? (
    <ThemeProvider theme={theme.theme}>
      <TextField {...state} {...props}></TextField>
    </ThemeProvider>
  ) : (
    <TextField {...state} {...props}></TextField>
  );
}

interface PasswordFieldRegister {
  clearValue: () => void;
}

export function PasswordField({
  label,
  labelProps,
  inputProps,
  registerkeys,
}: {
  label?: string;
  labelProps?: InputLabelProps;
  inputProps?: OutlinedInputProps;
  registerkeys?: registerKey;
}) {
  const [value, setValue] = useState<"" | undefined>(undefined);
  useRegister(
    createregisterKeys<PasswordFieldRegister>({
      keys: {
        primary: registerkeys?.primary,
        secondary: registerkeys?.secondary,
      },
      registerOptions: {
        clearValue: () => {
          setValue("");
          setTimeout(() => setValue(undefined), 100);
        },
      },
    })
  );
  const [password, setPassword] = useState<"password" | "text">("password");
  const theme = useContext(ThemeContext);
  const component = (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password" {...labelProps}>
        {label || ""}
      </InputLabel>
      <OutlinedInput
        value={value}
        {...inputProps}
        type={password == "text" ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() =>
                setPassword(password == "text" ? "password" : "text")
              }
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
            >
              {password == "password" ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
  return theme.theme ? (
    <ThemeProvider theme={theme.theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}
