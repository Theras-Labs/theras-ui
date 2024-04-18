import { GravatarUrl } from "@/utils/Gravatar";
import Avatar from "./avatar";
import {
  shortenEthAddress,
  shortenEthAddressMobile,
  shortenString,
} from "@/utils/ethaddress";

export default function SimpleProfileCard({
  onClick = () => {},
  onDisconnect = () => {},
  currentProfile,
  Network = "",
  enableAvatar = true,
  enableDisconnect = true,
  isRow = true,
  isCard = false,
}) {
  return (
    <div
      onClick={onClick}
      className={` w-full relative md:left-12 flex items-center  justify-between md:justify-center   p-2
          ${isRow ? "" : ""}`}>
      <div className="h-8 w-8 md:h-16 md:w-16">
        <Avatar
          className="h-8 w-8 md:h-16 md:w-16"
          imageUrl={GravatarUrl(shortenString(currentProfile?.address, 42))}
        />
      </div>

      <div className="flex flex-col  md:min-w-90  ml-2 ">
        <span className="hidden md:block font-bold">
          {shortenEthAddress(currentProfile?.address)}
        </span>
        <span className="md:hidden">
          {shortenEthAddressMobile(currentProfile?.address)}
        </span>
        {/* TGEM:
        <br /> */}
        <div className="text-green-500">{currentProfile?.network}</div>
        {/* level? */}
      </div>
      {enableDisconnect && (
        <button
          type="button"
          className="bg-red-500 border p-4 rounded-full  uppercase text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          onClick={onDisconnect}>
          Disconnect
        </button>
      )}
    </div>
  );
}
