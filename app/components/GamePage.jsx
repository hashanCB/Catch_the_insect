"use client";
import React, { useState } from "react";
import Insect_Home from "./Insect_Home";
import Favorite from "./Favorite";
const GamePage = () => {
  const [currntPage, setcurrntPage] = useState(1);

  const handlerpage = () => {
    console.log("fuck");
    setcurrntPage(currntPage + 1);
  };
  return (
    <div>
      <div className="">
        <Insect_Home handlerpage={handlerpage} />
      </div>
      <div>
        <Favorite />
      </div>
    </div>
  );
};

export default GamePage;
