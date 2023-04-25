"use client";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";

// Redux
import { useAppSelector, useAppDispatch } from "@/hooks";
import { closeCart } from "@/reducers";

// Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

// Image
import Image from "next/image";
import logoPic from "@/assets/logo.png";

// Components
import { CartItem } from "@/components";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { products, open } = useAppSelector((state) => state.cart);

  const handleClose = () => {
    dispatch(closeCart());
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        p: 2,
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#cd6133",
          color: "white",
        }}
      >
        <ShoppingCartIcon fontSize="large" />
        <Typography variant="h3" fontWeight={600} sx={{ ml: 2, mr: 3 }}>
          Carrito
        </Typography>
        <Image src={logoPic} width={180} alt="capital-sabor" />
      </DialogTitle>
      <Divider variant="middle" />
      <Box sx={{ p: 2 }}>
        {products.map((product) => (
          <CartItem key={product.name} {...product} />
        ))}
      </Box>
      <Divider variant="middle" />
      <Box
        sx={{
          p: 1,
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          Total: $ {products.reduce((acc, curr) => acc + curr.price, 0)}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box
        sx={{
          p: 1,
        }}
      >
        <Button
          variant="contained"
          color="success"
          fullWidth
          startIcon={<PointOfSaleIcon />}
        >
          Efectuar pago
        </Button>
      </Box>
    </Dialog>
  );
};

export default Cart;
