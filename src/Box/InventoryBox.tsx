import React from "react";
import { Link } from "react-router-dom";
import Rarity from "../utils/Rarity";
import "./style.css";
import { IoCodeDownloadOutline } from "react-icons/io5";
import { equipmentStore } from "@/_core/hooks/useEquipment";

// should be only pic?
// can use canvas or not?
export default function InventoryBox(props) {
  // todo: add icon network here
  // todo: add icon category(ship, tools) here
  // todo: add icon rarirty here

  const { isEquipped } = equipmentStore();
  return (
    <>
      {/* desktop selecting */}
      <div
        onClick={props?.onClick}
        className={`inventory-box relative hidden md:block border  rounded-md h-[150px] cursor-pointer overflow-hidden ${
          props?.index === props?.selected?.index
            ? "border-2 border-green-500 opacity-80"
            : "border-gray-600"
        }`}>
        {isEquipped(props) && (
          <IoCodeDownloadOutline
            className="absolute right-0 m-1 mx-2 text-green-500"
            size={24}
          />
        )}
        <div className="p-2  absolute text-red-500 z-10 opacity-80">
          <img
            src={props?.minted?.network_logo}
            className={`w-12 h-12 ${props?.minted?.bgChain}`}
          />
        </div>
        <img
          src={props?.display?.assetUrl}
          className={`w-full h-full hovered-image  ${props?.display?.classNameImage}`}
        />
        <div
          onClick={props?.onClick}
          className=" w-full   bottom-0 flex  items-center justify-center  p-2 right-0  absolute">
          <Rarity>{props?.rarity}</Rarity>
        </div>
      </div>
      {/* mobile navigating */}
      <Link
        to={`/own-product/${props?.id}`}
        // {/* onClick={props?.onClick} */}
        className="relative md:hidden border rounded-md h-[150px] hover:opacity-75 cursor-pointer">
        <div className="px-2  absolute text-red-500">
          <img
            src={props?.minted?.network_logo}
            className={`w-12 h-12 ${props?.minted?.bgChain}`}
          />
        </div>
        <img
          src={props?.display?.assetUrl}
          className={`w-full h-full hover:opacity-75  ${props?.display?.classNameImage}`}
        />
        <div className=" w-full   bottom-0 flex  items-center justify-center  p-2 right-0  absolute">
          <Rarity>{props?.rarity}</Rarity>
        </div>
      </Link>
    </>
  );
}
