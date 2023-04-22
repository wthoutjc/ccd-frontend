"use client";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  SwipeableDrawer,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Button,
} from "@mui/material";

// Icons
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
type Anchor = "top" | "left" | "bottom" | "right";

interface Props {
  open: boolean;
  handleOpen: () => void;
}

const Sidebar = ({ open, handleOpen }: Props) => {
  const toggleDrawer =
    () => async (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      handleOpen();
    };

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={open}
      onClose={toggleDrawer()}
      onOpen={toggleDrawer()}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ ml: 2 }}>
            <Link href={"/"} passHref onClick={toggleDrawer()} as={"/"}>
              CCD
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </SwipeableDrawer>
  );
};

export default Sidebar;
