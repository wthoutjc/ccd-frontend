import styles from "./login.module.scss";

// Client Components
import { Login } from "../../components";

export const metadata = {
  title: "Bienvenid@ - CCD",
  description: "¡Bienvenid@ al Consorcio de Comidas a Domicilio!",
};

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginInfo}>Contenido informativo</div>
      <div className={styles.loginClient}>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
