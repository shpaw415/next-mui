import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer as Drawer_,
  Divider,
  ThemeProvider,
} from "@mui/material";
import { ThemeContext, createregisterKeys, registerKey, useRegister } from "..";
import { useContext, useState } from "react";

interface _list {
  text: string;
  icon?: JSX.Element;
  data?: unknown;
  divider?: boolean;
  callback?: (data: unknown) => void;
}

export interface DrawerRegister {
  setOpen: (value: boolean) => void;
}

export function Drawer({
  registerKeys,
  list,
}: {
  registerKeys?: registerKey;
  list: Array<_list>;
}) {
  const [open, setOpen] = useState(false);
  const theme = useContext(ThemeContext);
  useRegister(
    createregisterKeys<DrawerRegister>({
      keys: {
        primary: registerKeys?.primary,
        secondary: registerKeys?.secondary,
      },
      registerOptions: {
        setOpen: setOpen,
      },
    })
  );
  const listFormated = list.map((ul) => {
    return (
      <Box key={ul.text}>
        <ListItem
          disablePadding
          onClick={() => {
            setOpen(false);
            ul.callback && ul.callback(ul.data);
          }}
        >
          <ListItemButton>
            {ul.icon && <ListItemIcon>{ul.icon}</ListItemIcon>}
            <ListItemText primary={ul.text} />
          </ListItemButton>
        </ListItem>
        {ul.divider && <Divider />}
      </Box>
    );
  });

  const component = (
    <div>
      <>
        <Drawer_
          anchor="left"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Box
            role="presentation"
            sx={{ width: 250 }}
            onClick={() => {
              setOpen(false);
            }}
            onKeyDown={() => {
              setOpen(false);
            }}
          >
            {listFormated}
          </Box>
        </Drawer_>
      </>
    </div>
  );

  return theme.theme ? (
    <ThemeProvider theme={theme.theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}
