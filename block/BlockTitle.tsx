import { SiHiveBlockchain } from "react-icons/si"; // chain
import { MdToken } from "react-icons/md"; //chain too
import { ImPriceTags } from "react-icons/im"; //listings
import { PiTextAlignLeftFill } from "react-icons/pi"; //desc
import { MdOutlinePayments } from "react-icons/md"; //payments
import { MdOutlineDetails } from "react-icons/md"; //detail
import { RxTextAlignTop } from "react-icons/rx"; // offers
import { MdGeneratingTokens } from "react-icons/md";
import { Label } from "../Typography";
import { PiListMagnifyingGlass } from "react-icons/pi";
import { TbProgress } from "react-icons/tb";

const iconMap = {
  chain: SiHiveBlockchain,
  token: MdToken,
  listings: ImPriceTags,
  desc: PiTextAlignLeftFill,
  payments: MdGeneratingTokens,
  //   payments: MdOutlinePayments,
  detail: MdOutlineDetails,
  offers: PiListMagnifyingGlass,
  progress: TbProgress,
};

const BlockTitle = ({
  title = "",
  variant = "chain",
  color = "text-orange-300",
  className = "",
  classNameLabel = "",
}) => {
  const IconComponent = iconMap[variant];
  return (
    <div className={`flex mb-2   items-center ${className}`}>
      {IconComponent && (
        <IconComponent className={` mr-3 ${color}`} size={18} />
      )}
      <Label className="text-gray-400 uppercase !font-medium">{title}</Label>
    </div>
  );
};
export default BlockTitle;
