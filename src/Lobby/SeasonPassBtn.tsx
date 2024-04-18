import React, { useState } from "react";
import ProgressBar from "../utils/ProgressBar";
import { IoDiamond } from "react-icons/io5";
import SeasonPassSvg from "@assets/svg/lobby/season-pass.svg";
import ModalSeasonPass from "../Modal/ModalSeasonPass";

export default function SeasonPass() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        onClick={() => setVisible(true)}
        className="w-50 h-32 absolute z-[3] bottom-2 cursor-pointer"
      />
      <div className="relative  bg-gray-800 rounded-md px-2 pt-2 cursor-pointer ">
        <div className="relative flex justify-between">
          <div className="p-4"></div>
          <div className=" absolute">
            <img
              src={SeasonPassSvg}
              className="w-[100px] animate-pulse h-[100px] lg:w-[130px] lg:h-[130px] bottom-16 -rotate-10 relative right-4"
            />
          </div>
          <div className="absolute  right-1 bottom-3 p-2 bg-black border border-gray-600 rounded-full px-4 !font-bold">
            1
          </div>
        </div>
        <div className=" relative flex p-2">
          <div className="absolute z-[3] backdrop-blur-md p-2  rounded-full -rotate-20 bottom-2 -left-1">
            <IoDiamond size={24} className="" />
          </div>
          <div className="lg:w-40 w-full">
            <ProgressBar
              barColorFill="bg-orange-500"
              classNameText="text-center font-bold"
              progress={50}
              padding={"p-1"}
              title={`   50/50`}
            />
          </div>
        </div>
      </div>
      <ModalSeasonPass
        {...{
          isOpen: visible,
          setIsOpen: setVisible,
          closeModal: () => setVisible(false),
        }}
      />
    </>
  );
}
