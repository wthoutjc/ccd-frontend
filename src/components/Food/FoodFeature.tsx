// Components
import { FoodTable } from "@/components";

// Interfaces
import { ITable } from "../../interfaces";

interface Props {
  featureData: ITable;
}

const FoodFeature = ({ featureData }: Props) => {
  return (
    <section
      id="destacados"
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem",
      }}
    >
      <h4 style={{ paddingLeft: "1rem" }}>Productos destacados</h4>
      <div
        style={{
          display: "flex",
          padding: "1rem",
        }}
      >
        <FoodTable {...featureData} />
      </div>
    </section>
  );
};

export default FoodFeature;
