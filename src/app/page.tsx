import { FoodCard } from "@/components";

// Images
import Image from "next/image";
import hamburguerPic from "../assets/hamburguesa.png";
import chickenPic from "../assets/pollo.png";
import hamburguerXLPic from "../assets/hamburguesaXL.png";
import foodPic from "../assets/food.png";

export const metadata = {
  title: "Bienvenid@ - CCD",
  description: "¡Bienvenid@ al Consorcio de Comidas a Domicilio!",
};

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#dfe6e9",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <section
        id="welcome"
        style={{
          display: "flex",
          padding: "1rem",
          justifyContent: "space-between",
          height: "55%",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              marginBottom: "1rem",
            }}
          >
            Ordena tu comida favorita
          </h1>
          <p
            style={{
              marginBottom: "1rem",
            }}
          >
            Nuestra deliciosa comida esta espereando por ti, siempre estamos
            cerca para ti con comida fresca
          </p>
          <div>
            <button
              style={{
                backgroundColor: "#e67e22",
                color: "white",
                padding: "0.5rem",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Explorar comida
            </button>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={foodPic} width={650} alt="food-welcome" />
        </div>
      </section>
      <section
        id="platos-populares"
        style={{
          padding: "1rem",
        }}
      >
        <div>
          <h2
            style={{
              marginLeft: "1rem",
            }}
          >
            Platos populares
          </h2>
          <div
            style={{
              display: "flex",
            }}
          >
            {[
              {
                name: "Hamburguesa de Carne",
                price: 12.99,
                description:
                  "Lorem i psum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                image: hamburguerPic,
              },
              {
                name: "Pollo grande frito",
                price: 12.99,
                description:
                  "Lorem i psum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                image: chickenPic,
              },
              {
                name: "Hamburguesa",
                price: 12.99,
                description:
                  "Lorem i psum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                image: chickenPic,
              },
              {
                name: "Hamburguesa XL",
                price: 12.99,
                description:
                  "Lorem i psum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                image: hamburguerXLPic,
              },
            ].map((foodCard, i) => (
              <FoodCard key={i} {...foodCard} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
