import {
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  TextField,
  TextFieldProps,
  TextFieldVariants,
  alpha,
  styled,
} from "@mui/material";
import { useRegister } from "../register/register";
import { RefObject, forwardRef, useState } from "react";
import {
  Visibility,
  VisibilityOff,
  Search as SearchIcon,
} from "@mui/icons-material";

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
  [key: string]: {
    set: ({ error, value }: { error: boolean; value: string }) => void;
  };
}

export function InputField<Variant extends TextFieldVariants>(
  props: {
    variant?: Variant;
    registerkeys?: {
      primary: string;
      secondary: string;
    };
  } & Omit<TextFieldProps, "variant">
) {
  const [state, setState] = useState({
    error: false,
    value: "",
  });
  useRegister(
    props.registerkeys
      ? {
          [props.registerkeys.primary]: {
            [props.registerkeys.secondary]: {
              set: setState,
            },
          } as InputFieldRegister,
        }
      : undefined
  );
  return <TextField {...props} error={state.error}></TextField>;
}

type childProps = {
  name: string;
  required?: boolean;
  label?: string;
  error?: boolean;
  ref: RefObject<null>;
};

export const PasswordField = forwardRef<HTMLDivElement, childProps>(
  (props, ref) => {
    const [password, setPassword] = useState<"password" | "text">("password");
    const labelColor = props.error ? "#f44336" : "inherit";
    return (
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          sx={{ color: labelColor }}
        >
          {props.label || ""}
        </InputLabel>
        <OutlinedInput
          sx={{ borderColor: "blue", color: "inherit" }}
          {...props}
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
  }
);

PasswordField.displayName = "PasswordField";
