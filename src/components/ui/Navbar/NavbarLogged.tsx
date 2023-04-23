"use client";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Tooltip,
  Divider,
} from "@mui/material";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Next
import Link from "next/link";

// Images
import Image from "next/image";
import logoPic from "../../../assets/logo.png";

interface Props {
  handleOpen: () => void;
}

const NavbarLogged = ({ handleOpen }: Props) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#dfe6e9",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/home">
            <Image src={logoPic} width={180} alt="CapitalSabor-welcome" />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Tooltip title="Ver carrito">
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ mr: 1 }}
          />

          <Link href="/">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e67e22",
                width: "160px",
              }}
              size="small"
            >
              Cerrar sesión
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarLogged;
