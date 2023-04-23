import styles from "./signup.module.scss";

// Client Components
import { SignUp } from "../../components";

// Images
import Image from "next/image";
import pizzaPic from "../../assets/pizza.png";

export const metadata = {
  title: "Bienvenid@ - CapitalSabor",
  description: "¡Bienvenid@ al Consorcio de Comidas a Domicilio!",
};

const SignUpPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginInfo}>
        <Image src={pizzaPic} width={380} alt="CapitalSabor-welcome" />
      </div>
      <div className={styles.loginClient}>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
