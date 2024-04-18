import React from "react";
import Stepper from "./Stepper";
import SeasonPassSvg from "@assets/svg/lobby/season-pass.svg";
import { BsQuestionOctagonFill } from "react-icons/bs";

import ProgressBar from "../utils/ProgressBar";
import { IoDiamond } from "react-icons/io5";

export default function DetailPass() {
  return (
    <div className="flex flex-col h-full md:pb-10">
      <div className=" flex p-8 justify-center items-center ">
        <div className=" min-w-[200px] md:min-w-[500px]  ">
          <div className=" relative flex text-center">
            <div className="absolute z-[3] backdrop-blur-md p-3 rounded-full -rotate-20 -bottom-1 -left-2 ">
              <IoDiamond size={24} />
            </div>
            <div className="w-full">
              <ProgressBar
                barColorFill="bg-orange-500"
                classNameText="text-center font-bold"
                progress={50}
                padding={"p-1"}
                title={`   50/50`}
              />
            </div>
          </div>
          <div className="text-center font-bold uppercase font-italic text-orange-500">
            season not started
          </div>
        </div>
      </div>
      <div className="flex w-full h-full ">
        <div className="bg-purple-800 rounded-xl flex flex-col">
          <div className="flex flex-col h-full p-10 justify-center items-center">
            <img
              src={SeasonPassSvg}
              className="w-[200px] h-[200px]  -rotate-10 relative "
            />
            <button className="uppercase p-2 px-4 bg-orange-900 font-italic -rotate-10 font-bold animate-pulse ">
              Activate
            </button>
          </div>
          <div className="bg-purple-900 rounded-b-xl flex h-full p-10 justify-center items-center">
            <div className="text-2xl font-bold  -rotate-10 relative text-green-500 font-italic ">
              FREE
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full overflow-x-scroll">
          <div className="hidden md:flex h-full    overflow-x-scroll items-center xl:pl-80 ">
            {[1, 1, 1].map((item, i) => (
              <BsQuestionOctagonFill
                size={200}
                className="xl:mr-50 mr-40 rotate-10 text-blue-500"
              />
            ))}
          </div>
          <div className="md:hidden h-full   flex overflow-x-scroll items-center space-x-90 pl-20 ">
            <BsQuestionOctagonFill size={200} className="mx-4 text-blue-500" />
          </div>

          <div className="flex-shrink-1">
            <Stepper />
          </div>
          <div className="h-full ">
            <div className="h-full   flex overflow-x-scroll items-center justify-center space-x-90 pl-10 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
