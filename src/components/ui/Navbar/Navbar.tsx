"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Components
import { NavbarLanding, NavbarAuth, NavbarSkeleton } from "../../../components";

interface Props {
  handleOpen: () => void;
}

type NavbarContext = "landing" | "login" | "signup";

const Navbar = ({ handleOpen }: Props) => {
  const pathname = usePathname();

  const [context, setContext] = useState<NavbarContext>("landing");

  useEffect(() => {
    switch (pathname) {
      case "/login":
        setContext("login");
        break;
      case "/signup":
        setContext("signup");
        break;
      default:
        setContext("landing");
        break;
    }
  }, [pathname]);

  switch (context) {
    case "login":
      return <NavbarAuth />;
    case "signup":
      return <NavbarAuth />;
    case "landing":
      return <NavbarLanding handleOpen={handleOpen} />;
    default:
      return <NavbarSkeleton />;
  }
};

export default Navbar;
