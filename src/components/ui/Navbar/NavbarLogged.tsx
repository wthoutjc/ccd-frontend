"use client";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Tooltip,
  Divider,
  Badge,
} from "@mui/material";
import { useRouter } from "next/navigation";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Next
import Link from "next/link";

// Images
import Image from "next/image";
import logoPic from "@/assets/logo.png";

// Redux
import { useAppSelector, useAppDispatch } from "@/hooks";
import { openCart, logout, setUser } from "@/reducers";

interface Props {
  handleOpen: () => void;
}

const NavbarLogged = ({ handleOpen }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { products } = useAppSelector((state) => state.cart);

  const handleOpenCart = () => {
    dispatch(openCart());
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(
      setUser({
        email: "",
        id: 0,
        name: "",
        role: null,
      })
    );
    return router.push("/login");
  };

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
            alignItems: "center",
          }}
        >
          <Tooltip title="Ver carrito" sx={{ mr: 1 }}>
            <IconButton onClick={handleOpenCart}>
              <Badge badgeContent={products.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ mr: 1 }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e67e22",
              width: "160px",
            }}
            size="small"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarLogged;
