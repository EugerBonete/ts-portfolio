import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import NavItems from "./NavItems";
import Social from "../Social";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
  const Sidebar = () => {
    return <aside id="sidebar"></aside>;
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="w-full py-4  flex items-center px-4 md:px-0 justify-between md:justify-around"
    >
      <HiMenuAlt2
        className="block md:hidden text-2xl cursor-pointer"
        onClick={() => {
          const sidebar = document.getElementById("sidebar");
          console.log(sidebar);
        }}
      />
      <NavItems />
      <Social />
      <ThemeToggle />
    </motion.nav>
  );
}
