"use client";
// Components
import { NavbarLanding, NavbarLogged } from "@/components";

// Redux
import { useAppSelector } from "@/hooks";

interface Props {
  handleOpen: () => void;
}

const Navbar = ({ handleOpen }: Props) => {
  const { logged } = useAppSelector((state) => state.auth);

  if (logged) return <NavbarLogged handleOpen={handleOpen} />;
  else return <NavbarLanding handleOpen={handleOpen} />;
};

export default Navbar;
