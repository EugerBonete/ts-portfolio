import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import NavItems from "./NavItems";
import Social from "../Social";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  function toggleHandler() {
    setToggleSidebar(!toggleSidebar);
  }

  const Sidebar = () => {
    return (
      <motion.aside
        layout
        id="sidebar"
        className={`absolute text-white dark:text-black top-0 ${
          toggleSidebar ? "left-0" : "left-full"
        } w-[33vw] min-w-[18rem] p-4 h-screen z-50 backdrop-blur dark:bg-white/50 bg-black/50 flex justify-start items-center flex-col gap-10`}
      >
        <button className="w-full justify-self-start relative flex justify-end text-3xl flex-1">
          <MdClose onClick={toggleHandler} />
        </button>
        <NavItems sm />
        <Social sm />
      </motion.aside>
    );
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
        onClick={toggleHandler}
      />
      <Sidebar />
      <NavItems />
      <Social />
      <ThemeToggle />
    </motion.nav>
  );
}
