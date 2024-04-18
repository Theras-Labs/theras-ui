import React from "react";
import CardProduct from "../Card/CardStore";
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
  bgColor = "",
  ...props
}) {
  return (
    <div className={`group-comp  xl:p-3  xl:mx-10 mx-2 rounded-md ${bgColor}`}>
      <div className={`${!title && "invisible"} text-center font-bold  `}>
        {title || "TITLE"}
      </div>
      <div className="flex  p-10">
        {props?.sale_list?.map((item, i) => (
          <CardProduct
            // key={`card-store-${i}`}
            onClick={() => onNavigate(item?.listingId, item)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
