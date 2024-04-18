import React, { useState } from "react";
import ModalPayment from "../Modal/ModalPayment";
import usePurchase from "@/_core/hooks/usePurchase";

export default function RowPayment({
  hasBorderBottom = true,
  padding = "px-6",
  ...props
}) {
  const border = hasBorderBottom ? "border-b-[1px] border-gray-600" : "";
  const base = `${padding} ${border} w-full pb-4 text-center`;
  const currentTimestamp = String(new Date().getTime());

  const [visible, setVisible] = useState(false);

  const NFT_DETAIL = props?.listingDetail?.nfts?.find(
    (o) => o?.network?.toLowerCase() === props?.network?.toLowerCase()
  );
  // console.log(NFT_DETAIL, "detail nft", props);

  const { write } = usePurchase(
    props?.provider,
    props?.network,
    // abi structure for args?,
    {
      contractAddress: props?.storeAddress,
      contractName: props?.contractName,
      functionName: props?.functionPurchaseName,
      // change args into dynamic? from backend?
      args: [
        // address + timestamp
        `MODEL_${props?.listingDetail?.id}__${currentTimestamp}`, //todo: add address user
        // `MODEL_${props?.id}__${currentTimestamp}`,
        props?.price_in_wei,
        // props?.listingDetail?.listingId,
      ],
    }
  );

  const handlePurchase = async () => {
    // props?.listingDetail?.listingId //args
    // props?.listingNetwork?.storeAddress
    // props?.listingNetwork?.contractName
    // props?.listingNetwork?.functionPurchaseName
    try {
      write();
    } catch (error) {
      //
    } finally {
      // send notify
      // alert("Processing payment");
    }
  };

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
              disabled={props?.disable || props?.closed}
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
              disabled={props?.disable || props?.closed}
              onClick={() => {
                if (props?.isNative) {
                  //native token not require approval
                  handlePurchase();
                } else {
                  setVisible(true);
                  //
                }
              }}
              className={` ${
                props?.disable
                  ? "bg-gray-400 !cursor-not-allowed "
                  : "bg-orange-500"
              } w-24  rounded-sm justify-center font-bold flex p-2 "`}>
              {props?.disable ? "Closed" : "Buy"}
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
