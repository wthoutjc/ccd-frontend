// Skeleton Components
import { TableSkeleton, FoodCardSkeleton } from "@/components";

const LoadingHomePage = () => {
  return (
    <main
      style={{
        backgroundColor: "#dfe6e9",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          {[1, 2, 3, 4].map((_, i) => (
            <FoodCardSkeleton key={i} />
          ))}
        </div>
      </section>
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
          }}
        >
          <TableSkeleton />
        </div>
      </section>
    </main>
  );
};

export default LoadingHomePage;
