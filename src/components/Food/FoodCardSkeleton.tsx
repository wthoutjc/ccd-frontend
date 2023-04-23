"use client";
import { Box, Skeleton, Card, CardHeader, IconButton } from "@mui/material";

// Icons
import AddIcon from "@mui/icons-material/Add";

const FoodCardSkeleton = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "1rem",
        overflow: "hidden",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          maxHeight: "100px",
          mb: 2,
        }}
      >
        <Skeleton variant="rounded" width={450} height={70} />
      </Box>
      <CardHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"100%"} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"100%"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={"100%"} />
        <IconButton
          disabled
          sx={{
            backgroundColor: "#e67e22",
            color: "white",
            "&:hover": {
              backgroundColor: "#e67a11",
            },
          }}
          size="small"
        >
          <AddIcon fontSize={"small"} />
        </IconButton>
      </Box>
    </Card>
  );
};

export default FoodCardSkeleton;
