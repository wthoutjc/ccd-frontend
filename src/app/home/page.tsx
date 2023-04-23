// Components
import { FoodRecents, FoodFeature } from "@/components";

const HomePage = () => {
  return (
    <main
      style={{
        backgroundColor: "#dfe6e9",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* @ts-expect-error Async Server Component */}
      <FoodRecents />
      {/* @ts-expect-error Async Server Component */}
      <FoodFeature />
    </main>
  );
};

export default HomePage;
