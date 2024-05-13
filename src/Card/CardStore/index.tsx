import Rarity from "../../utils/Rarity";
import "./style.scss";
import { Subtitle, Title } from "../../Typography";
import Avatar from "../../profile/avatar";
// import useMeasure from "react-use-measure";
// options: skew, normal, border
// promo,
const CardStore = ({
  children,
  onClick = () => {},
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
  // console.log(props,'card store')
  return (
    <div
      onClick={onClick}
      // onclick navigate?
      // ref={ref}
      className={`card-product !rounded-md cursor-pointer  !bg-slate-900 border`}
      // className="card-product  xl:h-[600px] w-[360px]  border xl:m-10 md:4 bg-[#B048FE]"
      // {...props}
    >
      <div className="relative flex  flex-col justify-between  h-full ">
        {/* {children} */}
        <Content {...props} />
        <div className="absolute w-full h-full xl:p-6 p-4 text-center font-bold text-xl ">
          <Header {...props} />
        </div>
        <Footer {...props} />
      </div>
    </div>
  );
};

export default CardStore;

const Header = (props) => {
  // check header starts with div?
  // return <div dangerouslySetInnerHTML={{ __html: props?.header?.header }} />;
  return (
    <div className={``}>
      <Subtitle className={`min-h-[100px] `}>{props?.product?.title}</Subtitle>
      <Rarity text={props?.rarity} />
    </div>
  );

  // if (!props?.header?.htmlTag) {
  //   return (
  //     <div className={`${props?.header?.bgColor}`}>
  //       <Subtitle className={` ${props?.header?.textColor} `}>
  //         {props?.title}
  //       </Subtitle>
  //       <Rarity text={props?.rarity} />
  //     </div>
  //   );
  // } else return <div>{/* dangerouslyHTML */}</div>;
};

const Content = (props) => {
  if (props?.product?.image_url) {
    return (
      <div className="w-full h-full ">
        <img
          src={props?.product?.image_url}
          className={` w-full h-full rounded-md`}
          // give layer tint
        />
        <div className="absolute inset-0 bg-black opacity-25 rounded-md"></div>
      </div>
    );
  } else {
    return <></>;
  }

  // // overlap?
  // if (props?.contentType === "3d") {
  //   // return  canvas
  //   return null;
  // }
  // if (props?.contentType === "video") {
  //   // return video embed
  //   return null;
  // }
  // // return

  // // instead should check based on priority (draftproduct) (and gpu tier) -> had canvas, video, img
};

const Footer = (props) => {
  return (
    <div
      // quickbuy
      // onClick={}
      className={` 
  absolute w-full flex justify-evenly bottom-0 p-4 text-center 
  font-bold text-xl space-x-2 rounded-b-md
   `}
    >
      {/* propagate */}
      {/* highlighted */}
      {/* check highlight payments here */}
      {props?.highlight && (
        <div className="flex justify-center items-center ">
          {/* check if crypto or fiat here */}
          <img
            src={props?.highlight?.crypto?.currency?.image_url}
            className={` w-7 h-7  `}
            // className={` w-7 h-7 ${item?.crypto?.currency?.style} `}
          />
          <Subtitle className={`!font-bold  ml-2 `}>
            {props?.highlight?.price}
          </Subtitle>
        </div>
      )}

      {!props?.highlight &&
        props?.product?.payments?.slice(0, 2).map((item, i) => {
          return (
            <div
              key={`displayprice` + i}
              className="flex justify-center items-center "
            >
              {/* check if crypto or fiat here */}
              <img
                src={item?.crypto?.currency?.image_url}
                className={` w-7 h-7  `}
                // className={` w-7 h-7 ${item?.crypto?.currency?.style} `}
              />
              <Subtitle className={`!font-bold  ml-2 `}>{item?.price}</Subtitle>
            </div>
          );
        })}
      {/* more than 1 length of price? +9 */}
    </div>
  );
};
