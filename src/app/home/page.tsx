// Components
import { FoodRecents, FoodFeature } from "@/components";

// Interfaces
import { IFood, ITable } from "@/interfaces";

async function getRecentFood() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/recents-data`);
  return (await res.json()) as IFood[];
}

async function getFeatureFood() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/feature-data`);
  return (await res.json()) as ITable;
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
      }}
    >
      <FoodRecents recentsData={recentsData} />
      <FoodFeature featureData={featureData} />
    </main>
  );
};

export default HomePage;
