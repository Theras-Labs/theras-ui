import Rarity from "@/_ui/utils/Rarity";
import "./style.scss";
import { Subtitle, Title } from "@/_ui/Typography";
// import useMeasure from "react-use-measure";
// options: skew, normal, border
// promo,
const CardStore = ({
  children,
  // onClick = () => {},
  bg = "transparent",
  bgColor = "",

  ...props
}) => {
  console.log(bg, bgColor, "color bg");
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
        {/* Image */}
        {/* <div>HEADER time left</div> */}
        <div className="absolute w-full h-full xl:p-6 p-4 text-center font-bold text-xl ">
          {/* {props?.title || "TITLE"} */}
          <Header {...props} />
        </div>
        <Content {...props?.content} />
        {/* <div>promo</div> */}
        <div className="absolute w-full bottom-0 p-4 text-center bg-pink-400 font-bold text-xl  rounded-b-md">
          {/* propagate */}
          Coins, 2 coins?
        </div>
      </div>
    </div>
  );
};

export default CardStore;

const Header = (props) => {
  // check header starts with div?
  // return <div dangerouslySetInnerHTML={{ __html: props?.header?.header }} />;

  return (
    <div>
      <Subtitle>Armstring IMP</Subtitle>
      <Rarity />
    </div>
  );

  //
};

const Content = (props) => {
  if (props?.contentType === "image") {
    return (
      <img
        src={props?.contentUrl}
        className={` w-full h-full  object-fit -rotate-20 `}
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
