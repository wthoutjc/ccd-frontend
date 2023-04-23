// Components
import { FoodCard } from "@/components";
import { IFood } from "@/interfaces/food/food";

interface Props {
  recentsData: IFood[];
}

const FoodRecents = ({ recentsData }: Props) => {
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
