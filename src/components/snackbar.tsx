import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useState } from "react";
import { createregisterKeys, registerKey, useRegister } from "../register";

export class snackOpt {
  setOpen: Function;
  setData: Function;
  constructor({ setOpen, setData }: { setOpen: Function; setData: Function }) {
    this.setOpen = setOpen;
    this.setData = setData;
  }
  public open() {
    this.setOpen(true);
    return this;
  }
  public close() {
    this.setOpen(false);
    return this;
  }
  public data({ message, type }: { message: string; type: AlertColor }) {
    this.setData({ message: message, type: type });
    return this;
  }
}
export type SnackBarRegister = snackOpt;
/**
 *
 * @see
 * @returns
 */
export function SnackBar({ registerkeys }: { registerkeys?: registerKey }) {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState({ message: "", type: "info" as AlertColor });
  useRegister(
    registerkeys
      ? createregisterKeys<SnackBarRegister>({
          keys: {
            primary: registerkeys.primary,
            secondary: registerkeys.secondary,
          },
          registerOptions: new snackOpt({
            setOpen: setOpen,
            setData: setdata,
          }),
        })
      : undefined
  );

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    event;
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={data.type}>
        {data.message}
      </Alert>
    </Snackbar>
  );
}
