import React, { useState } from "react";
import ModalPayment from "../Modal/ModalPayment";

export default function RowPayment({
  hasBorderBottom = true,
  padding = "px-6",
  ...props
}) {
  const border = hasBorderBottom ? "border-b-[1px] border-gray-600" : "";
  const base = `${padding} ${border} w-full pb-4 text-center`;

  const [visible, setVisible] = useState(false);

  if (!props?.network) {
    return (
      <div className={`flex justify-between py-4 `}>
        <div
          className={`${padding} ${border} w-60 pb-4 ml-2 mr-1 !font-bold  `}>
          CHAIN
        </div>
        <div className={`${base} mr-1 uppercase !font-bold `}>CURRENCY</div>
        <div
          className={`${base} mr-1 flex justify-center items-center !font-bold `}>
          PRICE
        </div>

        <div className={`${base} mr-2 flex justify-center `}></div>
      </div>
    );
  }

  return (
    <>
      <div className={`flex justify-between py-4 `}>
        <div
          className={`${padding} ${border} flex justify-center items-center  w-60 pb-4 ml-2 mr-1 !font-bold text-green-400  `}>
          {props?.network_logo && props?.isCrypto ? (
            <img
              src={props?.network_logo}
              className={`w-8 h-8  ${props?.bgChain}`}
            />
          ) : (
            "FIAT"
          )}
        </div>
        <div
          className={`${base} mr-1 uppercase flex justify-center items-center`}>
          {props?.currency}
        </div>
        {/* supply link contract */}
        <div className={`${base} mr-1 flex justify-center items-center`}>
          {props?.currency && props?.isCrypto ? (
            <img
              src={props?.symbolUrl}
              className={`w-5 h-5 ${props?.bgToken}`}
            />
          ) : (
            props?.symbol
          )}
          &nbsp;
          {props?.price}
          {/* usdprice */}
        </div>
        {/* <div className={`${base} mr-1 uppercase`}>{props?.type}</div> */}

        <div className={`${base} mr-2 flex justify-center `}>
          {!props?.isCrypto && (
            <button
              onClick={() => {
                setVisible(true);
              }}
              className="bg-white  rounded-sm w-24 flex p-2 ">
              <img src={props?.paymentImage} className="w-full h-6 " />
            </button>
          )}
          {/* not connect -> wallet connet */}
          {props?.isCrypto && (
            <button
              onClick={() => {
                setVisible(true);
              }}
              className="bg-orange-500 w-24  rounded-sm justify-center font-bold flex p-2 ">
              Buy
            </button>
          )}
        </div>
      </div>

      <ModalPayment
        {...{
          isOpen: visible,
          setIsOpen: setVisible,
          closeModal: () => setVisible(false),
          //   data
        }}
      />
    </>
  );
}
