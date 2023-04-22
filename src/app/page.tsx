export const metadata = {
  title: "Bienvenid@ - CCD",
  description: "¡Bienvenid@ al Consorcio de Comidas a Domicilio!",
};

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "green",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: 70,
        }}
      >
        Consorcio de Comidas a Domicilio
      </h1>
    </div>
  );
}
