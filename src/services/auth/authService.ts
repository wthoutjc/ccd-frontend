import { api } from "../../utils";
import { JWT } from "next-auth/jwt";

interface Props {
  username: string;
  password: string;
}

const authService = async ({ username, password }: Props) => {
  const response = await api.post(
    `/api/login`,
    JSON.stringify({
      username,
      password,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status !== 200) return null;
  return response.data;
};

const logoutService = async () => {
  const response = await api.delete(`/api/logout`);
  if (response.status !== 200) return null;
  return response.data;
};

export { authService, logoutService };
