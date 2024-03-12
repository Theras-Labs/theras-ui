import React from "react";
import CardProduct from "../card/CardStore";
import { useNavigate } from "react-router-dom";

export default function GroupCards({
  title = "",
  onNavigate = () => {},
  // bg,
  // bgColor,
  // network : mixed |
  // cardType: 1 | 2 | 3 | 3b (skew)
  //
  // distance
  // horizontal = true
  //
  ...props
}) {
  return (
    <div className="group-comp border border-green-500 xl:p-3 ">
      <div className={`${!title && "invisible"} text-center `}>
        {title || "TITLE"}
      </div>
      <div className="flex  p-10">
        {props?.sale_list?.map((item, i) => (
          <CardProduct
            // key={`card-store-${i}`}
            // onClick={() => onNavigate(item?.id, item)}
            {...{
              bg: "bg-blue-500",
              bgColor: "bg-blue-500",
            }}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
