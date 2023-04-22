"use client";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

// Sass
import Link from "next/link";

const NavbarLanding = () => {
  return (
    <Box>
      <AppBar position="static">
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
                <Button variant="contained" color="success">
                  Volver
                </Button>
              </Link>
            </Box>
            <Link href="/">
              <Typography variant="h6">
                CCD
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarLanding;
