import { StaticImageData } from "next/image";

export interface IFood {
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
}
