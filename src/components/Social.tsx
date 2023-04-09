import Link from "next/link";
import React from "react";
import { hoverVariant } from "./Animations/scaleHover";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

export default function Social() {
  return (
    <ul className="text-xl gap-10 hidden md:flex">
      <Link href="/">
        <motion.img
          whileHover={hoverVariant}
          className="h-7 w-7"
          src="/facebook.svg"
          alt=""
        />
      </Link>
      <Link href="about">
        <motion.div whileHover={hoverVariant}>
          <BsGithub className="h-7 w-7" />
        </motion.div>
      </Link>
      <Link href="projects">
        <motion.img
          whileHover={hoverVariant}
          className="h-7 w-7"
          src="/linkedin.svg"
          alt=""
        />
      </Link>
    </ul>
  );
}
