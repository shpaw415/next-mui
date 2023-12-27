import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ThemeProvider,
} from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { MuiForm, muiformhook } from "../form/MuiForm";
import { useRegister } from "../register/register";
import { ThemeContext, createregisterKeys } from "..";

interface dialogContent {
  title: string;
  text?: string;
  inputFields?: JSX.Element;
  formHook?: muiformhook;
  buttons?: Array<JSX.Element>;
  onsubmit?: Function;
}
export class ModaleControls {
  private setOpen: Function;
  private setContent: Function;

  constructor(setOpen: Function, setContent: Function) {
    this.setOpen = setOpen;
    this.setContent = setContent;
  }
  open() {
    this.setOpen(true);
  }
  close() {
    this.setOpen(false);
  }
  create(props: dialogContent) {
    this.setContent(props);
    return this;
  }
}

export type ModaleRegister = ModaleControls;

/**
 *
 * @see ModaleRegister
 */
export function Modale({
  registerkeys,
}: {
  registerkeys?: { primary: string; secondary: string };
}) {
  const [open, setOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const [content, setContent] = useState<dialogContent>({
    title: "",
    text: "",
  });
  const dialogObj = useMemo(() => new ModaleControls(setOpen, setContent), []);
  useRegister(
    createregisterKeys<ModaleRegister>({
      keys: {
        primary: registerkeys?.primary,
        secondary: registerkeys?.secondary,
      },
      registerOptions: dialogObj,
    })
  );

  if (!content.buttons) {
    content.buttons = [
      <Button
        key={"accept"}
        type="submit"
        variant="contained"
        onSubmit={() => {
          content.onsubmit ? content.onsubmit() : null;
        }}
      >
        Accept
      </Button>,
      <Button key={"cancel"} onClick={() => setOpen(false)} variant="contained">
        Cancel
      </Button>,
    ];
  }

  const componant = (
    <Dialog open={open}>
      <DialogTitle>{content.title}</DialogTitle>
      <MuiForm muiformHook={content.formHook}>
        <DialogContent>
          {content.text && (
            <DialogContentText>{content.text}</DialogContentText>
          )}
          {content.inputFields && content.inputFields}
        </DialogContent>
        {content.buttons && <DialogActions>{content.buttons}</DialogActions>}
      </MuiForm>
    </Dialog>
  );

  return theme.theme ? (
    <ThemeProvider theme={theme.theme}>{componant}</ThemeProvider>
  ) : (
    componant
  );
}
