// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./styles.css";

// import required modules
import { Autoplay, EffectCube, Pagination, EffectCards } from "swiper/modules";
import SimpleProfileCard from "../profile/SimpleProfileCard";

const SliderProfile = ({ data = [] }) => {
  //   const isBox = variant === "box";
  //   const isMobile = true;
  //   const DIMENSION = isBox ? "w-[300px] h-[300px] " : "w-[300px] h-[150px] ";
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      effect={"cards"}
      grabCursor={true}
      pagination={false}
      modules={[Autoplay, EffectCube, Pagination, EffectCards]}
      className={` w-40 md:w-full top-38 max-h-20 left-38 relative  rounded-md`}>
      {!!data.length &&
        data?.map((item, i) => (
          <SwiperSlide
            // className="border border-yellow-500 bg-green-900 "
            className="rounded-md overflow-hidden bg-gray-900 shadow border border-gray-600 relative"
            key={`slider-profile-${i}`}>
            <SimpleProfileCard
              {...{
                currentProfile: item,
                enableDisconnect: false,
              }}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SliderProfile;
