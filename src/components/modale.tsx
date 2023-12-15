import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useMemo, useState } from "react";
import { MuiForm, muiformhook } from "../form/MuiForm";
import { useRegister } from "../register/register";

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

export interface ModaleRegister {
  [key: string]: ModaleControls;
}

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
  const [content, setContent] = useState<dialogContent>({
    title: "",
    text: "",
  });
  const dialogObj = useMemo(() => new ModaleControls(setOpen, setContent), []);
  useRegister(
    registerkeys
      ? {
          [registerkeys.primary]: {
            [registerkeys.secondary]: dialogObj,
          },
        }
      : undefined
  );

  if (!content.buttons) {
    content.buttons = [
      <Button
        key={"accept"}
        type="submit"
        onSubmit={() => {
          content.onsubmit ? content.onsubmit() : null;
        }}
      >
        Accept
      </Button>,
      <Button key={"cancel"} onClick={() => setOpen(false)}>
        Cancel
      </Button>,
    ];
  }

  return (
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
}
