"use client";
import { IconButton, Tooltip } from "@mui/material";

// Interfaces
import { IFood } from "@/interfaces";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Redux
import { useAppDispatch } from "@/hooks";
import { addProduct } from "@/reducers";

const AddToCart = (food: IFood) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(food));
  };

  return (
    <Tooltip title="Añadir al carrito">
      <IconButton
        sx={{
          backgroundColor: "#e67e22",
          color: "white",
          "&:hover": {
            backgroundColor: "#e67a11",
          },
        }}
        size="small"
        onClick={handleAddProduct}
      >
        <AddIcon fontSize={"small"} />
      </IconButton>
    </Tooltip>
  );
};

export default AddToCart;
