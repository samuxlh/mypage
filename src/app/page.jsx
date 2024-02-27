"use client";

import Image from "next/image";
import NavLink from "../components/navLink";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER 
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Curating Virtual Experiences, Imagining the Future
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Hello! Welcome to my page.
          You can explore more about my journey and areas of expertise using the menu.
          </p>
          {/* BUTTONS */}
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
