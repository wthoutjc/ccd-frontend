"use client";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

// Next
import Link from "next/link";

// Images
import Image from "next/image";
import logoPic from "@/assets/logo.png";

interface Props {
  handleOpen: () => void;
}

const NavbarLanding = ({ handleOpen }: Props) => {
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
          <Link href="/">
            <Image src={logoPic} width={180} alt="CapitalSabor-welcome" />
          </Link>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href="login">Iniciar sesión</Link>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ mr: 2, ml: 2 }}
            />

            <Link href="signup">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#e67e22",
                }}
              >
                Registrarse
              </Button>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarLanding;
