"use client";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";

// Services
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Interfaces
import { IContextTable } from "@/interfaces";

interface Props {
  title: string;
  numSelected: number;
  selected: string;
  // to: string;
  context: IContextTable;
}

const TableToolbar = ({ title, numSelected, selected, context }: Props) => {
  const handleCart = () => {};

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: "#cd6133",
        p: 1,
        color: "#fff",
      }}
    >
      {numSelected > 0 ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            p: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" fontSize={14} fontWeight={600}>
            {numSelected === 1
              ? "1 seleccionado"
              : `${numSelected} seleccionados`}
          </Typography>
          {numSelected === 1 && (
            <Box
              sx={{
                display: "flex",
              }}
            >
              {context.buy && (
                <Tooltip title="Añadir al carrito">
                  <IconButton
                    size="small"
                    onClick={handleCart}
                    sx={{
                      color: "#fff",
                    }}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          )}
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            p: 1.8,
          }}
        >
          <Typography variant="body2" fontSize={14} fontWeight={600}>
            {title}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TableToolbar;
