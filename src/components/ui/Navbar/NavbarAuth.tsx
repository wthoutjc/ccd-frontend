"use client";
import { Box, AppBar, Toolbar, Button } from "@mui/material";

// Sass
import Link from "next/link";

// Images
import Image from "next/image";
import logoPic from "@/assets/logo.png";

const NavbarLanding = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#dfe6e9",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
            }}
          >
            <Link href="/">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#e67e22",
                }}
              >
                Volver
              </Button>
            </Link>
          </Box>
          <Link href="/">
            <Image src={logoPic} width={180} alt="CapitalSabor-welcome" />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarLanding;
