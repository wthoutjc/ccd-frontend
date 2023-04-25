import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

// Next Auth
import { signIn } from "next-auth/react";

interface LoginProps {
  username: string;
  password: string;
}

/**
 * @description Este hook administra el estado de la autenticación - administra el estado status
 * @returns {boolean} status
 */

const useAuth = () => {
  const router = useRouter();

  const [status, setStatus] = useState({
    error: false,
    message: "",
  });

  const LogIn = useCallback(
    async ({ username, password }: LoginProps) => {
      setStatus({ error: false, message: "" });

      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res) {
        if (res.ok) return router.push("/");
        setStatus({
          error: true,
          message: "Usuario o contraseña incorrectos",
        });
      }
    },
    [router]
  );

  return {
    status,
    LogIn,
  };
};

export { useAuth };
