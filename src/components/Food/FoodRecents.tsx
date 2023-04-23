// Components
import { FoodCard } from "@/components";
import { IFood } from "@/interfaces/food/food";

async function getData() {
  const res = await fetch(
    `${process.env.API_URL}/home/recents-data`
  );
  return (await res.json()) as IFood[];
}

const FoodRecents = async () => {
  const recentsData = await getData();

  return (
    <section
      id="recientes"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h4 style={{ paddingLeft: "1rem" }}>Recientes</h4>
      <div
        style={{
          display: "flex",
        }}
      >
        {recentsData.map((foodCard, i) => (
          <FoodCard key={i} {...foodCard} />
        ))}
      </div>
    </section>
  );
};

export default FoodRecents;
