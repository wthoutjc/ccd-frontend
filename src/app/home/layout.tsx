// Components
import { Cart } from "@/components";

export const metadata = {
  title: "Pide Ahora - CapitalSabor",
  description: "¡Bienvenid@ al Consorcio de Comidas a Domicilio!",
};

// Interfaces
interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <Cart />
      {children}
    </>
  );
}
