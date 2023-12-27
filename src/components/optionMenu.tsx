import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SxProps,
  Theme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useContext, useState } from "react";
import { ThemeContext } from "..";

interface OptionMenuPros {
  items: Array<OptionMenuItem>;
  id: string;
  anchorEl: Element | null;
  width?: string | number;
  open: boolean;
  handleClose: (value: unknown) => void;
  sx?: SxProps<Theme>;
}
interface OptionMenuItem {
  icon: any;
  text: string;
  racourcis?: string;
  callback: Function;
}

export function OptionMenu({
  items,
  id,
  anchorEl,
  open,
  handleClose,
  width,
  sx,
}: OptionMenuPros) {
  const theme = useContext(ThemeContext);
  const component = (
    <Menu
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={() => handleClose(null)}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx={sx}
    >
      {items.map((item) => (
        <MenuItem
          sx={{ width: width, bgcolor: "inherit" }}
          onClick={() => {
            item.callback();
            handleClose(null);
          }}
          key={item.text}
        >
          {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
          <ListItemText>{item.text}</ListItemText>
          {item.racourcis && (
            <Typography variant="body2" sx={{ overflowX: "auto", ml: 2 }}>
              ⌘{item.racourcis}
            </Typography>
          )}
        </MenuItem>
      ))}
    </Menu>
  );

  return theme.theme ? (
    <ThemeProvider theme={theme.theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

interface OptionMenuBtnStruct {
  sxButton?: SxProps<Theme>;
  items: Array<OptionMenuItem>;
  id: string;
  menuWidth?: number | string;
  btnText: string;
}

export function OptionMenuBtn({
  sxButton,
  items,
  id,
  menuWidth,
  btnText,
}: OptionMenuBtnStruct) {
  const [anchorEl, setanchorEl] = useState<null | Element>(null);
  const theme = useContext(ThemeContext);
  const handleClose = () => setanchorEl(null);
  const open = Boolean(anchorEl);

  const component = (
    <>
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        variant="contained"
        sx={{ height: "70%", ...sxButton }}
        aria-controls={open ? id : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => setanchorEl(event.currentTarget as any)}
      >
        {btnText}
      </Button>
      <OptionMenu
        items={items}
        id={id}
        anchorEl={anchorEl as Element}
        width={menuWidth}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
  return theme.theme ? (
    <ThemeProvider theme={theme.theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}
