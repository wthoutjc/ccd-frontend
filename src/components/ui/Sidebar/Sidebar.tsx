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

// Images
import Image from "next/image";
import logoPic from "@/assets/logo.png";

// Icons
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

// Redux
import { useAppSelector } from "@/hooks";
import ListAuth from "./ListAuth";
import ListNoAuth from "./ListNoAuth";

interface Props {
  open: boolean;
  handleOpen: () => void;
}

const Sidebar = ({ open, handleOpen }: Props) => {
  const { logged, user } = useAppSelector((state) => state.auth);
  const { role } = user;

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
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#dfe6e9",
          height: "100%",
          color: "#2d3436",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ ml: 2 }}>
            <Link href="/" passHref onClick={toggleDrawer()} as={"/"}>
              <Image src={logoPic} width={180} alt="CapitalSabor-welcome" />
            </Link>
          </Box>
        </Toolbar>
        {logged && <ListAuth role={role} />}
        {!logged && <ListNoAuth />}
      </AppBar>
    </SwipeableDrawer>
  );
};

export default Sidebar;
