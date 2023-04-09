import { Navbar } from "@/components";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AnimatePresence mode="wait">
        <motion.div
        // viewport={{ once: true }}
        // key={router.route}
        // initial="initialState"
        // animate="animateState"
        // exit="exitState"
        // transition={{
        //   duration: 0.75,
        // }}
        // variants={{
        //   initialState: {
        //     opacity: 0,
        //     // clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        //   },
        //   animateState: {
        //     opacity: 1,
        //     // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        //   },
        //   exitState: {},
        // }}
        >
          <Navbar />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
