import React from "react";
import { Subtitle } from "../Typography";

export default function SettingBox({
  className = "",
  title = "",
  options = [],
}) {
  return (
    <div
      className={`tracking-wider border-b-1 text-xl border-gray-700  flex justify-between ${className}`}>
      <Subtitle className="uppercase font-thin text-white py-4">
        {title}
      </Subtitle>
      <div className="flex">
        {/* tabs */}
        {/* one of them must be active */}
        {options?.map((item, i) => (
          <ButtonOptions {...item} key={i} />
        ))}
      </div>
    </div>
  );
}

const ButtonOptions = ({ title = "OFF", active = false, disable = false }) => {
  // disable -> return null ?
  //   if (disable) return null;
  return (
    <div
      //   onClick
      className={`py-4 px-6 uppercase font-thin text-white min-w-[160px] text-center ${
        disable ? "cursor-not-allowed" : "cursor-pointer"
      }
        ${active ? "bg-gray-500" : ""}
    `}>
      {title}
    </div>
  );
};
