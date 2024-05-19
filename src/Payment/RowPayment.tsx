import React, { useState } from "react";
import ModalPayment from "../Modal/ModalPayment";
import usePurchase from "@/_core/hooks/usePurchase";
import useTicketApi from "@/_backend/data/requestTicket";
import { useAccount } from "wagmi";
import { useCheckNetworkChain } from "@/_core/hooks/contract/useWriteEVM";
import { toast } from "react-toastify";

export default function RowPayment({
  hasBorderBottom = true,
  padding = "px-6",
  selectedChain,
  ...props
}) {
  const border = hasBorderBottom ? "border-b-[1px] border-gray-600" : "";
  const base = `${padding} ${border} w-full pb-4 text-center`;
  const currentTimestamp = String(new Date().getTime());
  const { requestTicket } = useTicketApi();

  const [visible, setVisible] = useState(false);

  // const NFT_DETAIL = props?.listingDetail?.nfts?.find(
  //   (o) => o?.network?.toLowerCase() === props?.network?.toLowerCase()
  // );
  // console.log(NFT_DETAIL, "detail nft", props);
  const { address } = useAccount();

  // ticket [0] = address user
  // args -> [last] = ticket
  const value = [
    !!props?.crypto?.is_native, // 1
    props?.product_token?.smart_contract?.address, // sepolia //2 //product Address
    props?.crypto?.is_native
      ? "0x0000000000000000000000000000000000000000"
      : props?.crypto?.token_address, // 3  // check if fiat or crypto
    props?.price_in_wei, //price //4
    props?.listingDetail?.detail?.id, // props?.product_token?.token_id, // token_id // 5  product contrat.id //
    1, // //quantity //6
    2, // token type, erc1155 //7 // (selectedChain?.smart_contract?.contract_type)
    0, // 8
    1000, // 9
    "0x0000000000000000000000000000000000000000", //10 // check from shop
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
    props?.product_token?.network?.provider_name,
    props?.product_token?.network?.name,
    props,
    "DATA",
    value
  );

  const { changingNetwork, isProfileNetworkFound } = useCheckNetworkChain();
  const { write, isLoading } = usePurchase(
    props?.product_token?.network?.provider_name,
    props?.product_token?.network?.name,
    props?.product_token?.network?.chain_id,
    // props?.network,
    // abi structure for args?,
    {
      contractAddress: selectedChain?.network?.theras_shop_address, //  ->
      contractName: "Theras Shop",
      functionName: "buyProduct", //buyProduct
      args,
    }
  );

  const handlePurchase = async () => {
    // changeNetwork first
    // if evm
    toast("Requesting ticket, please wait for a while");

    changingNetwork(props.product_token?.network?.chain_id);

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
    toast("Processing order, redirecting to wallet");

    //will have problem on differnt time, in case price is change?...
    // so data should BE from BE too, and compute it on client later. not the other around
    // doesnt matter? the block difference can be exploited if price changed?

    try {
      // if (args?.length === 11) {
      console.log("RUNNINNGG WILD");

      // cahnge into self
      await write([...value, ticketPurchase]);
      toast("Please wait for your transaction");

      // }
    } catch (error) {
      console.log(error);
      //
    }
  };

  if (!props?.crypto?.network) {
    return (
      <div className={`flex justify-between py-4 `}>
        <div
          className={`${padding} ${border} w-60 pb-4 ml-2 mr-1 !font-bold  `}
        >
          CHAIN
        </div>
        <div className={`${base} mr-1 uppercase !font-bold `}>CURRENCY</div>
        <div
          className={`${base} mr-1 flex justify-center items-center !font-bold `}
        >
          PRICE
        </div>

        <div className={`${base} mr-2 flex justify-center `}></div>
      </div>
    );
  }

  return (
    <>
      <div className={`flex justify-between py-4 `}>
        {/* chain logo */}
        <div
          className={`${padding} ${border} flex justify-center items-center  w-60 pb-4 ml-2 mr-1 !font-bold text-green-400  `}
        >
          {props?.is_crypto ? (
            <img
              src={props?.crypto?.network?.image_url}
              className={`w-8 h-8  ${props?.bgChain ?? ""}`}
            />
          ) : (
            "FIAT"
          )}
        </div>
        {/* -------CURRENCY */}
        <div
          className={`${base} mr-1 uppercase flex justify-center items-center`}
        >
          {props?.crypto?.currency?.symbol}
        </div>

        {/* -------PRICE */}
        {/* supply link contract */}
        <div className={`${base} mr-1 flex justify-center items-center`}>
          {props?.crypto?.currency?.image_url ? (
            <img
              src={props?.crypto?.currency?.image_url}
              className={`w-5 h-5 ${props?.bgToken ?? ""}`}
            />
          ) : (
            props?.crypto?.currency?.symbol
          )}
          &nbsp;
          {props?.price}
          {/* usdprice */}
        </div>
        {/* <div className={`${base} mr-1 uppercase`}>{props?.type}</div> */}

        {/* -------BUTTON */}
        <div className={`${base} mr-2 flex justify-center `}>
          {
            // handling FIAT
            !props?.is_crypto && (
              <button
                disabled={props?.disable || props?.closed}
                onClick={() => {
                  setVisible(true);
                }}
                className="bg-white  rounded-sm w-24 flex p-2 "
              >
                <img
                  src={props?.fiat?.currency?.image_url}
                  className="w-full h-6 "
                />
              </button>
            )
          }
          {/* not connect -> wallet connet */}
          {props?.is_crypto && (
            <button
              disabled={isLoading || props?.disable || props?.closed}
              onClick={() => {
                if (props?.crypto?.is_native) {
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
              } w-24  rounded-sm justify-center font-bold flex p-2 "`}
            >
              {isLoading
                ? "Loading..."
                : props?.disable
                  ? "Closed"
                  : isProfileNetworkFound(
                        // props?.
                        props.product_token?.network?.chain_id,
                        props.product_token?.network?.provider_name
                      )
                    ? "Buy"
                    : "Switch network"}
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
