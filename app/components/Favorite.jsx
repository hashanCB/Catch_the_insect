import React from "react";
import Button from "./Button";

const Favorite = ({ handlerpage }) => {
  return (
    <div className=" h-screen bg-[#516dff] py-[25%] ">
      <h1 className="font-Inter text-[80px] text-white justify-center text-center flex-col items-center ">
        Catch the insert
      </h1>
      <div className=" flex justify-center text-center">
        {" "}
        <Button name="Play Games" click={handlerpage} />
      </div>
    </div>
  );
};

export default Favorite;
