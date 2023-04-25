import { IFood } from "@/interfaces";

export interface ICart {
  products: IFood[];
  open: boolean;
}
