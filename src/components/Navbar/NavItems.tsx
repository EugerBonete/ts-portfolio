import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type NavTextProps = {
  text: string;
  route: string;
  children: ReactNode;
};

export default function NavItems() {
  const router = useRouter();

  const UnderLine = () => {
    return (
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white" />
    );
  };

  const NavText = ({ text, children, route }: NavTextProps): JSX.Element => {
    return (
      <motion.p
        className={`${
          router.route === route && "border-b-2 border-black dark:border-white"
        } group transition duration-300`}
      >
        {text}
        {children}
      </motion.p>
    );
  };

  return (
    <ul className="text-xl gap-10 hidden md:flex">
      <Link href="/">
        <NavText route="/" text="Home">
          {router.route !== "/" && <UnderLine />}
        </NavText>
      </Link>
      <Link href="about">
        <NavText route="/about" text="About">
          {router.route !== "/about" && <UnderLine />}
        </NavText>
      </Link>
      <Link href="projects">
        <NavText route="/projects" text="Projects">
          {router.route !== "/projects" && <UnderLine />}
        </NavText>
      </Link>
    </ul>
  );
}
