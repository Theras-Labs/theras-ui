import Rarity from "@/_ui/src/utils/Rarity";
import "./style.scss";
import { Subtitle, Title } from "@/_ui/src/Typography";
import Avatar from "@/_ui/src/profile/avatar";
// import useMeasure from "react-use-measure";
// options: skew, normal, border
// promo,
const CardStore = ({
  children,
  // onClick = () => {},
  bg = "transparent",
  ...props
}) => {
  // bg
  // type => 3d ()
  // overlap_3d = true ?
  // header = <div>
  // headerTitle
  // imgUrl
  // content = img | 3d model | video
  //
  // supply -> real data?
  // network => [ {} ]
  // basePrice =>
  // price =>
  // auction => false -> direct
  // gameId
  // storeId
  // productId
  //
  //

  // const [ref, bounds] = useMeasure();
  return (
    <div
      // onClick={onClick}
      // onclick navigate?
      // ref={ref}
      className={`card-product !rounded-md cursor-pointer ${bg} !bg-slate-900`}
      // className="card-product  xl:h-[600px] w-[360px]  border xl:m-10 md:4 bg-[#B048FE]"
      {...props}>
      <div className="relative flex  flex-col justify-between  h-full ">
        {/* {children} */}
        {/* <div>HEADER time left</div> */}
        <div className="absolute w-full h-full xl:p-6 p-4 text-center font-bold text-xl ">
          {/* {props?.title || "TITLE"} */}
          <Header {...props} />
        </div>
        <Content {...props?.display} />
        {/* <div>promo</div> */}
        <Footer {...props} />
      </div>
    </div>
  );
};

export default CardStore;

const Header = (props) => {
  // check header starts with div?
  // return <div dangerouslySetInnerHTML={{ __html: props?.header?.header }} />;
  if (!props?.header?.htmlTag) {
    return (
      <div className={`${props?.header?.bgColor}`}>
        <Subtitle className={` ${props?.header?.textColor} `}>
          {props?.title}
        </Subtitle>
        <Rarity text={props?.rarity} />
      </div>
    );
  } else return <div>{/* dangerouslyHTML */}</div>;
  //
};

const Content = (props) => {
  if (props?.type === "image") {
    return (
      <img
        src={props?.assetUrl}
        className={` w-full h-full ${props?.classNameImage}  `}
      />
    );
  }

  // overlap?
  if (props?.contentType === "3d") {
    // return  canvas
    return null;
  }
  if (props?.contentType === "video") {
    // return video embed
    return null;
  }
  // return
};

const Footer = (props) => {
  return (
    <div
      // quickbuy
      // onClick={}
      className={` 
  absolute w-full flex justify-evenly bottom-0 p-4 text-center 
  ${props?.footer?.bgColor}
  font-bold text-xl space-x-2 rounded-b-md
   `}>
      {/* propagate */}
      {/* highlighted */}
      {props?.payments?.[0].payment_options?.slice(0, 2).map((item, i) => {
        return (
          <div
            key={`displayprice` + i}
            className="flex justify-center items-center ">
            <img
              src={item?.symbolUrl}
              className={` w-7 h-7 ${item?.bgToken} `}
            />
            <Subtitle
              className={`!font-bold  ml-2 ${props?.footer?.textColor}`}>
              {item?.price}
            </Subtitle>
          </div>
        );
      })}
      {/* more than 1 length of price? +9 */}
    </div>
  );
};
