// Components
import { FoodCard } from "@/components";
import { IFood } from "@/interfaces/food/food";

interface Props {
  recentsData: IFood[];
  title?: string;
}

const FoodRecents = ({ recentsData, title = "Recientes" }: Props) => {
  return (
    <section
      id="recientes"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <h4 style={{ paddingLeft: "1rem" }}>{title}</h4>
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
