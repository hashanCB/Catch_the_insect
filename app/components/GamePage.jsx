"use client";
import React, { useState } from "react";
import Insect_Home from "./Insect_Home";
import Favorite from "./Favorite";
import Game from "./Game";
import { motion } from "framer-motion";

const GamePage = () => {
  const [currntPage, setcurrntPage] = useState(1);

  const handlerpage = () => {
    console.log("Page change");
    const newValue = currntPage === 3 ? 1 : currntPage + 1; // Reset to 1 after the last page
    setcurrntPage(newValue);
  };

  const pageVariants = {
    hidden: { opacity: 0, y: "100vh" }, // Start from bottom
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      key={currntPage}
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      transition={{ type: "spring", stiffness: 50 }}
    >
      {currntPage === 1 ? (
        <div className="w-[100vw] h-[100vh]">
          <Insect_Home handlerpage={handlerpage} />
        </div>
      ) : currntPage === 2 ? (
        <div className="w-[100vw] h-[100vh]">
          <Favorite handlerpage={handlerpage} />
        </div>
      ) : currntPage === 3 ? (
        <div className="w-[100vw] h-[100vh]">
          <Game />
        </div>
      ) : null}
    </motion.div>
  );
};

export default GamePage;
