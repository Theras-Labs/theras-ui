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
  // console.log(props,'DAATA DETAIL')
  return (
    <div className={`group-comp  xl:p-3  xl:mx-10 mx-2 rounded-md ${bgColor}`}>
      <div className={`${!title && "invisible"} text-center font-bold  `}>
        {title || "TITLE"}
      </div>
      <div className="flex  p-10">
        {props?.list?.map((item, i) => (
          <CardProduct
            // goes to starex_nft_product
            key={`card-store-${i}`}
            onClick={() => onNavigate(item?.id, item)} // id draft product here
            {...item}
          />
          // <div />
        ))}
      </div>
    </div>
  );
}
