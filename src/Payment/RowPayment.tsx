import React, { useState } from "react";
import ModalPayment from "../Modal/ModalPayment";
import usePurchase from "@/_core/hooks/usePurchase";
import useTicketApi from "@/_backend/data/requestTicket";
import { useAccount } from "wagmi";

export default function RowPayment({
  hasBorderBottom = true,
  padding = "px-6",
  ...props
}) {
  const border = hasBorderBottom ? "border-b-[1px] border-gray-600" : "";
  const base = `${padding} ${border} w-full pb-4 text-center`;
  const currentTimestamp = String(new Date().getTime());
  const { requestTicket } = useTicketApi();

  const [visible, setVisible] = useState(false);

  const NFT_DETAIL = props?.listingDetail?.nfts?.find(
    (o) => o?.network?.toLowerCase() === props?.network?.toLowerCase()
  );
  // console.log(NFT_DETAIL, "detail nft", props);
  const { address } = useAccount();

  // ticket [0] = address user
  // args -> [last] = ticket
  const value = [
    true, // 1
    props?.product_address, // sepolia //2 //product Address
    "0x0000000000000000000000000000000000000000", // 3
    props?.price_in_wei, //price //4
    0, // token_id // 5
    1, // //quantity //6
    2, // token type, erc1155 //7
    0, // 8
    1000, // 9
    "0x0000000000000000000000000000000000000000", //10
  ];
  // change value when account is changed

  // const args = [
  //   ...value,
  //   // ticketPurchase // final args
  // ]
  const [args, setArgs] = useState([...value]);
  console.log(
    `
    props?.provider,
    props?.network,`,
    props?.provider, // undefind
    props?.network, //testnet-tara
    props,
    "DATA"
  );

  const { write } = usePurchase(
    props?.provider,
    props?.network,
    // props?.network,
    // abi structure for args?,
    {
      contractAddress: props?.shop_address, //  ->
      // contractAddress: props?.storeAddress, //  ->
      contractName: "Theras Shop",
      // contractName: props?.contractName,
      // functionName: props?.functionPurchaseName, //buyProduct
      functionName: "buyProduct", //buyProduct
      // change args into dynamic? from backend?
      args,
      // args: [
      //   // // address + timestamp
      //   // `MODEL_${props?.listingDetail?.id}__${currentTimestamp}`, //todo: add address user
      //   // // `MODEL_${props?.id}__${currentTimestamp}`,
      //   // props?.price_in_wei,
      //   // // props?.listingDetail?.listingId,
      // ],
    }
  );

  const handlePurchase = async () => {
    // props?.listingDetail?.listingId //args
    // props?.listingNetwork?.storeAddress
    // props?.listingNetwork?.contractName
    // props?.listingNetwork?.functionPurchaseName

    // request of ticket
    console.log("handle purchase");
    // Example usage

    // "address", // msg.sender
    // "bool", // isnative
    // "address", // product address
    // "address", //erc20 token
    // "uint256", // payment amount
    // "uint256", //productId //
    // "uint256", //quantity  // 1
    // "uint256", //tokenType // 2
    // "uint256", //paymentAmount //
    // "uint256", //payoutpercentDenominator //
    //   "address", //brokerAddress //

    // get address contract, price, token_id, quantity, chain_id
    const ticketParameters = {
      types: [
        "address",
        "bool",
        "address",
        "address",
        "uint256",
        "uint256",
        "uint256",
        "uint256",
        "uint256",
        "uint256",
        "address",
      ],
      values: [address, ...value],
    };

    console.log("requesting ticket with", [address, ...value]);
    // request of ticket
    const ticketPurchase = await requestTicket(ticketParameters);
    // const ticketPurchase = [
    //   "0x0c68813590ec3b06debb2ec77f1204011533a9ba9395ee5b00f15d879c5628ef",
    //   "0x2686f1e5cf901cea1411dad6e6d34b45a5f0445f2eb4bd6501f14afe1a78589f",
    //   28,
    // ]
    // use ticketPurchase to include in the args again

    // Update args with ticketPurchase
    setArgs([...value, ticketPurchase]);

    //will have problem on differnt time, in case price is change?...
    // so data should BE from BE too, and compute it on client later. not the other around
    // doesnt matter? the block difference can be exploited if price changed?

    try {
      if (args?.length === 11) {
        write();
      }
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
