"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Image from "next/image";

const Game = ({ handlerpage }) => {
  const reffly = useRef();
  const [flyn, setFlyn] = useState(1);

  const score = (number) => {
    setFlyn(flyn + 1);
  };

  useEffect(() => {
    if (reffly.current) {
      //   reffly.current.style.display = "block";
      console.log("sceond");
      const screenWidth = Math.floor(window.innerWidth);
      const screenheigth = Math.floor(window.innerHeight);

      const randpmTop = Math.floor(Math.random() * screenheigth);
      const randpmleft = Math.floor(Math.random() * screenWidth);
      console.log(randpmleft);
      reffly.current.style.top = `${randpmTop}px`;
      reffly.current.style.left = `${randpmleft}px`;
    }

    return () => {
      reffly.current.style.display = "none";
    };
  }, [score]);
  return (
    <div className=" h-screen bg-[#516dff] relative ">
      <div className=" flex justify-between px-10">
        <div className="font-Inter text-[80px]">Time</div>

        <div className="font-Inter text-[80px]">{flyn}</div>
      </div>

      {Array.from({ length: flyn }).map((items, index) => (
        <div
          key={index}
          className="   absolute border-white  cursor-pointer w-[100px] h-[100px] "
          ref={reffly}
        >
          <Image
            src="/spider_PNG12.png"
            width={100}
            height={100}
            onClick={() => {
              score("1");
            }}
          />
        </div>
      ))}

      {/* <Button name="Home" click={handlerpage} /> */}
    </div>
  );
};

export default Game;
