"use client";
import { Box, Typography, Card, CardHeader, IconButton } from "@mui/material";

// Next - Image
import Image, { StaticImageData } from "next/image";

// Icons
import AddIcon from "@mui/icons-material/Add";

interface Props {
  name: string;
  price: number;
  description: string;
  image: StaticImageData;
}

const FoodCard = ({ name, price, description, image }: Props) => {
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
        <Image src={image} width={130} alt="ccd-welcome" />
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
        <Typography variant="body1" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          {price}
        </Typography>
        <IconButton
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

export default FoodCard;
