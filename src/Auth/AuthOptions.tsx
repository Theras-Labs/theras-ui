import React from "react";
import EVMWallet from "./Wallets/EVMWallet";
import StarknetWallet from "./Wallets/StarknetWallet";
import AptosWallet from "./Wallets/AptosWallet";

export default function AuthOptions() {
  return (
    <div>
      <div className="min-h-100 p-2 md:p-10">
        {/* EVM */}
        <EVMWallet />

        {/* Aptos */}
        <AptosWallet />

        {/* Starknet */}
        {/* <StarknetWallet /> */}

        {/* Substrate */}
        {/* Solana */}
      </div>
    </div>
  );
}
