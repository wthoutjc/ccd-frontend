import "../styles/styles.scss";

// Components
import { Navbar } from "../components";

export const metadata = {
  title: "CCD",
  description: "Consorcio de Comidas a Domicilio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
