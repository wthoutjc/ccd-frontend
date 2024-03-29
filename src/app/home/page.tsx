// Components
import { FoodRecents, FoodFeature } from "@/components";

// Interfaces
import { IFood, ITable } from "@/interfaces";

async function getRecentFood() {
  const res = await fetch(`${process.env.API_URL}/home/recents-data`);
  const data = await res.json();
  return data as IFood[];
}

async function getFeatureFood() {
  const res = await fetch(`${process.env.API_URL}/home/feature-data`);
  const data = await res.json();
  return data as ITable;
}

const HomePage = async () => {
  const recentsData = await getRecentFood();
  const featureData = await getFeatureFood();

  return (
    <main
      style={{
        backgroundColor: "#dfe6e9",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <FoodRecents recentsData={recentsData} />
      <FoodFeature featureData={featureData} />
    </main>
  );
};

export default HomePage;
