// Components
import { RestaurantGraphics, FoodRecents, FoodFeature } from "@/components";

// Interface
import { IFood, ITable } from "@/interfaces";

interface Props {
  featureData: ITable;
  recentsData: IFood[];
}

const Restaurant = ({ featureData, recentsData }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        overflow: "hidden",
        backgroundColor: "#dfe6e9",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "1rem",
          overflow: "auto",
        }}
      >
        <section
          id="graphics"
          style={{
            padding: "1rem",
            backgroundColor: "white",
            borderRadius: "0.5rem",
            boxShadow: "0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2)",
          }}
        >
          <RestaurantGraphics />
        </section>
        <FoodFeature featureData={featureData} />
      </div>
      <div
        style={{
          width: "100%",
          padding: "1rem",
        }}
      >
        <FoodRecents recentsData={recentsData} title={"Más vendidos"} />
        <FoodRecents recentsData={recentsData} title={"Mejor calificados"} />
        <FoodRecents recentsData={recentsData} title={"Tendencia"} />
      </div>
    </div>
  );
};

export default Restaurant;
