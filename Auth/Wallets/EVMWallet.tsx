import React from "react";

export default function EVMWallet() {
  return (
    <div className=" bg-gradient-to-r from-purple-600 to-gray-800 p-4  my-2 rounded-md  ">
      <div className="text-center font-bold uppercase ">EVM Compatible</div>
      <div className="flex p-4  rounded-md  justify-center  ">
        <w3m-button size="md" />
        {/* CHain ID */}
      </div>
    </div>
  );
}
