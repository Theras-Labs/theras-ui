import React from "react";
import { Caption, Heading, Label, Subtitle } from "../Typography";

export default function IconBox({
  className = "",
  hasBorder = true,
  ...props
}) {
  // className load title, subtitle, icon? , percentage , color, colorIcon, colorBg, colorSubtitle, colorTitle

  return (
    <div
      {...props}
      className={`flex cursor-pointer ${
        hasBorder ? "border border-gray-500" : ""
      } justify-between w-full bg-[#111322] rounded-xl p-6 ${className}`}>
      <div>
        <Label className="text-gray-300 uppercase  !text-xs !font-bold">
          chain {props?.network}
        </Label>
        <Subtitle>
          {props?.current_supply} <Label> supply</Label>
          {/* {props?.current_supply} <Label>/{props?.total_supply}</Label> */}
        </Subtitle>
      </div>
      <div className=" p-4 bg-slate-800 rounded-md  uppercase">
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
