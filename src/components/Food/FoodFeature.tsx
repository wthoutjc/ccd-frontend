// Components
import { FoodTable } from "@/components";

// Interfaces
import { ITable } from "../../interfaces";

async function getData() {
  const res = await fetch(
    `${process.env.API_URL}/home/feature-data`
  );
  return (await res.json()) as ITable;
}

const FoodFeature = async () => {
  const data = await getData();

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
        <FoodTable {...data} />
      </div>
    </section>
  );
};

export default FoodFeature;
