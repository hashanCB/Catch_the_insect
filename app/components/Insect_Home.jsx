import React from "react";
import Button from "./Button";

const insect_Home = ({ handlerpage }) => {
  return (
    <div className="bg-[#516dff] h-screen   ">
      <h1 className="font-Inter text-[80px] text-white justify-center text-center flex-col items-center ">
        Catch the insert
      </h1>
      <div className=" flex justify-center text-center">
        {" "}
        <Button name="Play Game" click={handlerpage} />
      </div>
    </div>
  );
};

export default insect_Home;
