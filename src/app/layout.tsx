import "../styles/styles.scss";

// Font
import { rakkasFont } from "../components";

// Components
import { Header } from "../components";

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
      <body className={rakkasFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
