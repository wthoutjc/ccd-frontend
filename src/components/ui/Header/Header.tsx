"use client";
import { useState } from "react";

// Components
import { Navbar, Sidebar } from "@/components";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar handleOpen={() => setOpen(!open)} />
      <Sidebar open={open} handleOpen={() => setOpen(!open)} />
    </>
  );
};

export default Header;
