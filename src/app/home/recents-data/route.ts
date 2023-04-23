import { NextResponse } from "next/server";

// Images
import hamburguerPic from "@/assets/hamburguesa.png";
import chickenPic from "@/assets/pollo.png";
import hamburguerXLPic from "@/assets/hamburguesaXL.png";
import papasPic from "@/assets/papas.png";

export async function GET(request: Request) {
  return NextResponse.json([
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
      name: "Papas fritas",
      price: 12.99,
      description:
        "Lorem i psum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: papasPic,
    },
    {
      name: "Hamburguesa XL",
      price: 12.99,
      description:
        "Lorem i psum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: hamburguerXLPic,
    },
  ]);
}
