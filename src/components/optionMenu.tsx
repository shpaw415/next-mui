import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

interface OptionMenuPros {
  items: Array<OptionMenuItem>;
  id: string;
  anchorEl: Element;
  width?: string | number;
  open: boolean;
  handleClose: (value: unknown) => void;
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
}: OptionMenuPros) {
  return (
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
    >
      {items.map((item) => (
        <MenuItem
          sx={{ width: width }}
          onClick={() => {
            item.callback();
            handleClose(null);
          }}
          key={item.text}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
          {item.racourcis && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ overflowX: "auto", ml: 2 }}
            >
              ⌘{item.racourcis}
            </Typography>
          )}
        </MenuItem>
      ))}
    </Menu>
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

  const handleClose = () => setanchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        variant="contained"
        sx={{ height: "70%", bgcolor: "primary.light", ...sxButton }}
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
}
