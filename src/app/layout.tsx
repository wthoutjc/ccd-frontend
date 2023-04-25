import "@/styles/styles.scss";

// Font
import { rakkasFont } from "@/components";

// Components
import { Header, Providers } from "@/components";

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
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
