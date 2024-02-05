"use client";
import React, { useEffect, useRef, useState } from "react";
import Insect_Home from "./Insect_Home";
import Favorite from "./Favorite";
import Game from "./Game";
import { motion } from "framer-motion";

const GamePage = () => {
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);

  const [gameact, setGameact] = useState();

  const scrollIntoView = (pageRef) => {
    pageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const gameacts = (newatc) => {
    if (newatc == "fly") {
      scrollIntoView(page3Ref);
      console.log("massa");
    } else if (newatc == "spider") {
      scrollIntoView(page3Ref);
      console.log("makuluwa");
    }

    setGameact(newatc);
  };

  useEffect(() => {
    // Add the 'overflow-hidden' class to 'body' when the component mounts
    document.body.classList.add("overflow-hidden");

    // Remove the 'overflow-hidden' class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className=" overflow-hidden">
      <div className="w-[100vw] h-[100vh]" key="page1" ref={page1Ref}>
        <Insect_Home handlerpage={() => scrollIntoView(page2Ref)} />
      </div>

      <div className="w-[100vw] h-[100vh]" key="page2" ref={page2Ref}>
        <Favorite
          handlerpage={() => scrollIntoView(page3Ref)}
          gameact={gameacts}
        />
      </div>

      <div className="w-[100vw] h-[100vh]" key="page3" ref={page3Ref}>
        <Game handlerpage={() => scrollIntoView(page1Ref)} />
      </div>
    </div>
  );
};

export default GamePage;
