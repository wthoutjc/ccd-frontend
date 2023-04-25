"use client";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

// Interfaces
import { IFood } from "@/interfaces";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";

//Image
import Image from "next/image";

// Redux
import { useAppDispatch } from "@/hooks";
import { removeProduct } from "@/reducers";

const CartItem = (food: IFood) => {
  const { name, price, image } = food;
  const dispatch = useAppDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeProduct(food));
  };

  return (
    <Card sx={{ display: "flex", m: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={image} width={60} alt="product-cs" />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {price} $
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Tooltip title="Eliminar">
            <IconButton
              aria-label="previous"
              sx={{
                backgroundColor: "#e74c3c",
                color: "white",
                "&:hover": {
                  backgroundColor: "#c0392b",
                },
                mr: 1,
              }}
              size="small"
              onClick={handleRemoveProduct}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Card>
  );
};

export default CartItem;
