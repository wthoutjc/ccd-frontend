"use client";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

// Sass
import Link from "next/link";

interface Props {
  handleOpen: () => void;
}

const NavbarLanding = ({ handleOpen }: Props) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
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
              <Typography variant="h6" component="div">
                CCD
              </Typography>
            </Link>

            <Link href="login">
              <Button variant="contained" color="success">
                Iniciar sesión
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarLanding;
