import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { hoverVariant } from "../Animations/scaleHover";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isOn, setIsOn] = useState<boolean>(false);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`w-24 h-11 flex items-center ${
        currentTheme === "dark"
          ? " justify-end bg-gradient-to-tl from-purple-900 via-indigo-900 to-pink-500"
          : " justify-start bg-gradient-to-tr from-yellow-500 to-pink-500"
      } rounded-3xl
 px-2 cursor-pointer`}
      data-isOn={isOn}
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      <motion.div
        whileHover={hoverVariant}
        className="w-8 h-8 p-1 bg-white rounded-full flex items-center justify-center"
        layout
        transition={spring}
      >
        <Image
          width={35}
          height={35}
          src={
            currentTheme === "dark"
              ? "/sunny-filled-loop-to-moon-filled-loop-transition.svg"
              : "/moon-filled-to-sunny-filled-loop-transition.svg"
          }
          alt="sun icon"
        />
      </motion.div>
    </div>
  );
}
