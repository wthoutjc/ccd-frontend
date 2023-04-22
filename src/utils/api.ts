import axios from "axios";

// Next Auth
import { signOut } from "next-auth/react";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_NAME,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error.response);
    if (error.response.status === 401 || error.response.status === 422) {
      await signOut({ redirect: false });
    }
    return Promise.reject(error);
  }
);

export { api };
