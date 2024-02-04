import React from "react";

const Button = ({ name, click }) => {
  return (
    <div
      className=" bg-white w-[200px] py-5 text-[20px] cursor-pointer hover:bg-white/50 "
      onClick={() => click()}
    >
      <input type="button" value={name} />
    </div>
  );
};

export default Button;
