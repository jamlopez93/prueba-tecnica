"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AiOutlineArrowUp from "react-icons/ai";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <Link
          className=" cursor-pointer  font-mono self-center text-4xl font-semibold whitespace-nowrap text-[#041840] "
          href="/posts"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-screen flex items-center flex-col justify-center  overflow-hidden "
          >
            <h1 className=" hover:scale-105 transition-all ease-in-out duration-500 ">Bienvenidos</h1>
            <p className="text-base lg:text-4xl mx-20 hover:scale-105 transition-all ease-in-out duration-500">A mi prueba técnica</p>
            <p className="text-xs hover:scale-105 transition-all ease-in-out duration-500">aca se puede hacer click</p>
          </motion.div>
        </Link>
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
