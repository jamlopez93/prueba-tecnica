"use client";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

import {
  motion,
  useAnimationControls,
  Variants,
  useScroll,
} from "framer-motion";

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.5) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
      className=" fixed lg:bottom-10 bottom-20 lg:right-5 p-10 bg-gray-50"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp  />
    </motion.button>
  );
}

export default ScrollToTopButton;
