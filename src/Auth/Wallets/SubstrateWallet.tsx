import React from "react";
import SubstrateConnect from "@/components/_wallet/SubstrateConnect";

export default function SubstrateWallet() {
  return (
    <div className=" bg-gradient-to-r from-purple-600 to-gray-800 p-4  my-2 rounded-md  ">
      <div className="text-center font-bold uppercase ">Substrate Wallet</div>
      <div className="flex p-4  rounded-md  justify-center  ">
        {/* <w3m-button size="md" /> */}
        {/* CHain ID */}
        <SubstrateConnect />
      </div>
    </div>
  );
}
