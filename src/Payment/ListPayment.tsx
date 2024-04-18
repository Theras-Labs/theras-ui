import React from "react";
import BlockTitle from "../block/BlockTitle";
import { Label } from "../Typography";
import RowPayment from "./RowPayment";
import { PAYMENT_OPTIONS } from "@/components/product/mock-shop";

export default function ListPayment({ tab = 0, data }) {
  //GET SELECTED CHAIN
  const CHAIN_SELECTED = data?.payments[tab];
  return (
    <>
      <BlockTitle
        title="Payment options"
        className="mt-12"
        variant="payments"
      />

      <div className="bg-[#111322] rounded-md  ">
        {/* <div className="p-6">
          <Label className="text-gray-300 mb-6 uppercase !font-bold ">
            Payment {CHAIN_SELECTED?.network}
          </Label>
        </div> */}
        {/* opensea label, 0x smrt contract */}
        {/* chain, currency + price, usd price . action*/}
        <RowPayment />
        {CHAIN_SELECTED?.payment_options.map((item, i) => (
          <RowPayment
            {...item}
            hasBorderBottom={CHAIN_SELECTED?.payment_options?.length - 1 !== i}
            {...{
              listingDetail: data,
              listingNetwork: CHAIN_SELECTED,
            }}
          />
        ))}
        {/* pay */}
        <div className="text-center">
          <Label className="!text-xs font-thin">
            *You can purchase {CHAIN_SELECTED?.network} NFT with token from
            different chain here now. &nbsp;
            <span className="text-green-300">by Theras Labs</span>
          </Label>
          {/* <Label className="text-green-500"> by Theras Labs</Label> */}
        </div>
        {/*  */}
        {/* theras labs */}
        {/*  NOT FOR SALE / OUT OF STOCK*/}
      </div>
    </>
  );
}
