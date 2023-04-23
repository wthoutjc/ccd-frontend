import { NextResponse } from "next/server";

// Images
import hamburguerPic from "@/assets/hamburguesa.png";
import chickenPic from "@/assets/pollo.png";
import hamburguerXLPic from "@/assets/hamburguesaXL.png";
import papasPic from "@/assets/papas.png";

export async function GET(request: Request) {
  return NextResponse.json({
    title: "Comida - CapitalSabor",
    columns: ["Producto", "Precio", "Descripción", "Imagen"],
    rows: [
      [
        "Hamburguesa de Carne",
        12.99,
        "Lorem i psum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        hamburguerPic,
      ],
      [
        "Pollo grande frito",
        12.99,
        "Lorem i psum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        chickenPic,
      ],
      [
        "Papas fritas",
        12.99,
        "Lorem i psum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        papasPic,
      ],
      [
        "Hamburguesa XL",
        12.99,
        "Lorem i psum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        hamburguerXLPic,
      ],
    ],
    totalData: 120,
    context: {
      buy: true,
    },
  });
}
