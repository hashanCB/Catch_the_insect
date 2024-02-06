import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Game = ({ handlerpage }) => {
  const reffly = useRef();
  const [flyn, setFlyn] = useState(0);
  const [myarray, setMyarray] = useState([]);
  const [seconds, setSeconds] = useState(0);

  const [stopvalue, setStopvalue] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSecend) => prevSecend + 1);
    }, 1000);
    if (flyn === 0) {
      clearInterval(interval); // Clear the interval to stop the timer
    }
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (flyn > 2) {
    }

    return () => {};
  }, [flyn]);
  const score = (index) => {
    const screenWidth = Math.floor(window.innerWidth);
    const screenheigth = Math.floor(window.innerHeight);

    const topValue = Math.floor(Math.random() * screenheigth);
    const randpmleft = Math.floor(Math.random() * screenWidth);

    setFlyn(flyn + 1);
    if (flyn === 10) {
      setStopvalue(true);
    }
    if (index !== null) {
      // Hide the clicked image
      setMyarray((prevArray) => {
        const newArray = [...prevArray];
        newArray[index] = { ...newArray[index], hidden: true };
        return newArray;
      });
    }

    reffly.current.style.display = "none";

    // Add new images to the array
    setMyarray((prevArray) => [
      ...prevArray,
      {
        top: topValue,
        left: randpmleft,
        key: Date.now(), // Add a unique key to force re-render
        hidden: false,
      },
    ]);
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-[#516dff] relative">
      <div className="flex justify-between px-10">
        <div className="font-Inter text-[80px]">{seconds}S</div>
        <div className="font-Inter text-[80px]">{flyn}</div>
      </div>
      <div
        className="absolute border-white cursor-pointer w-[100px] h-[100px]"
        ref={reffly}
        onClick={() => score(null)}
      >
        <Image src="/spider_PNG12.png" width={100} height={100} />
      </div>
      {stopvalue ? (
        <div className=" text-[32px] text-white justify-center text-center pt-[15%]">
          Are you annoyed yet? :D You are playing: The Impossible Game!
        </div>
      ) : null}
      ;
      {myarray.map(
        (item, index) =>
          !item.hidden && (
            <div
              key={item.key}
              className="absolute border-white cursor-pointer w-[100px] h-[100px]"
              style={{ top: `${item.top}px`, left: `${item.left}px` }}
              onClick={() => score(index)}
            >
              <Image src="/spider_PNG12.png" width={100} height={100} />
            </div>
          )
      )}
    </div>
  );
};

export default Game;
