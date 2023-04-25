// Interfaces
import { IFood, ITable } from "@/interfaces";

// Components
import { Restaurant } from "@/components";

export const metadata = {
  title: "Restaurantes - CapitalSabor",
  description: "¡Bienvenid@ al Consorcio de Comidas a Domicilio!",
};

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

const RestaurantPage = async () => {
  const recentsData = await getRecentFood();
  const featureData = await getFeatureFood();

  return <Restaurant featureData={featureData} recentsData={recentsData} />;
};

export default RestaurantPage;
