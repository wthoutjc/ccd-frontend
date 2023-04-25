// Next - Image
import Image from "next/image";

// Components
import { AddToCart } from "@/components";

// Interfaces
import { IFood } from "@/interfaces";

const FoodCard = (food: IFood) => {
  const { name, price, description, image } = food;

  return (
    <div
      style={{
        display: "flex",
        overflow: "hidden",
        padding: "1rem",
        backgroundColor: "#fff",
        borderRadius: "0.5rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        margin: "0.8rem",
        minWidth: 300,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 2,
          padding: "0.5rem",
        }}
      >
        <Image src={image} width={130} alt="CapitalSabor-welcome" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 400,
            textAlign: "center",
            margin: "0.5rem",
          }}
        >
          {description}
        </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>{price}</p>
          <AddToCart {...food} />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
