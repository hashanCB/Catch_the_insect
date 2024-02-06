import React from "react";
import Button from "./Button";
import Image from "next/image";

const Favorite = ({ handlerpage, gameact }) => {
  return (
    <div className=" h-screen bg-[#516dff] py-[25%] ">
      <h1 className="font-Inter text-[80px] text-white justify-center text-center flex-col items-center ">
        What is your "favorite" insect?
      </h1>
      <div className=" flex justify-center text-center flex gap-4">
        {" "}
        {/* <div className=" border-white border-2 cursor-pointer">
          <Image
            src="/fly_PNG3946.png"
            width={100}
            height={100}
            onClick={() => {
              gameact("fly");
            }}
          />
        </div> */}
        <div className=" border-white border-2 cursor-pointer ">
          <Image
            src="/spider_PNG12.png"
            width={100}
            height={100}
            onClick={() => {
              gameact("spider");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
