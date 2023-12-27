import { BackdropProps, Backdrop as Bd, CircularProgress } from "@mui/material";
import { useState } from "react";
import { createregisterKeys, registerKey, useRegister } from "..";

export interface BackDropRegister {
  open: (value: boolean) => void;
  setProps: (val: Omit<BackdropProps, "open">) => void;
}

export function BackDrop(
  props: { registerkeys?: registerKey } & Omit<BackdropProps, "open">
) {
  const [data, setData] = useState({
    open: false,
    props: {} as Omit<BackdropProps, "open">,
  });
  useRegister(
    createregisterKeys<BackDropRegister>({
      keys: {
        primary: props.registerkeys?.primary,
        secondary: props.registerkeys?.secondary,
      },
      registerOptions: {
        open: (val: boolean) => {
          setData((current) => {
            return {
              ...current,
              open: val,
            };
          });
        },
        setProps: (val) => {
          setData((current) => {
            return {
              ...current,
              props: val,
            };
          });
        },
      },
    })
  );
  return (
    <Bd open={data.open} {...props} {...data.props}>
      <CircularProgress color="inherit" />
    </Bd>
  );
}
