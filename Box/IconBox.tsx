import React from "react";
import { Caption, Heading, Label, Subtitle } from "../Typography";

export default function IconBox({
  className = "",
  hasBorder = true,
  bgIcon = "bg-slate-800",
  children,
  ...props
}) {
  // className load title, subtitle, icon? , percentage , color, colorIcon, colorBg, colorSubtitle, colorTitle

  return (
    <div
      {...props}
      className={`flex cursor-pointer ${
        hasBorder ? "border border-gray-500" : ""
      } justify-between w-full bg-[#111322] rounded-xl p-6 ${className}`}>
      <div className="">
        <Label className="text-gray-300 uppercase  !text-xs !font-bold">
          chain {props?.network}
        </Label>
        {children}
      </div>
      <div className={` p-4  rounded-md  uppercase  ${bgIcon}`}>
        {props?.network_logo ? (
          <img src={props?.network_logo} className="w-8 h-8" />
        ) : (
          props?.network
        )}
        {/* image */}
      </div>
    </div>
  );
}
