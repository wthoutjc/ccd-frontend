"use client";
import { Box, AppBar, Toolbar } from "@mui/material";

const NavbarSkeleton = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default NavbarSkeleton;
