export interface IUser {
  id: number;
  name: string;
  email: string;
  role: "Administrator" | "Restaurant" | "Client" | null;
}
