import "@/styles/styles.scss";
import "animate.css";

// Font
import { rakkasFont } from "@/components";

// Components
import { Header, Providers, Notifications } from "@/components";

export const metadata = {
  title: "CapitalSabor",
  description: "Consorcio de Comidas a Domicilio",
};

// Interfaces
interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={rakkasFont.className}>
        <Providers>
          <Notifications />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
