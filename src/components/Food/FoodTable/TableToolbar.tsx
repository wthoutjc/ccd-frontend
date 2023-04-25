"use client";
import { Box, Typography } from "@mui/material";

// Interfaces
import { IContextTable, IFood } from "@/interfaces";
import { AddToCart } from "@/components/Cart";

interface Props {
  title: string;
  numSelected: number;
  food: IFood | null;
  context: IContextTable;
}

const TableToolbar = ({ title, numSelected, food, context }: Props) => {
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
              {context.buy && food && <AddToCart {...food} />}
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
