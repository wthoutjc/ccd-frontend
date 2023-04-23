"use client";
import { Box, AppBar, Toolbar } from "@mui/material";

const NavbarSkeleton = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Cargando...
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarSkeleton;
