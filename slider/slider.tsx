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

function extractImageSrc(htmlString) {
  const regex = /<img[^>]+src="([^">]+)"/;
  const match = htmlString.match(regex);
  if (match) {
    return match[1]; // The captured src value
  }
  return null; // If no match is found
}

const Slider = ({ id = "default", data = [], variant = "box", isLoading }) => {
  const isBox = variant === "box";
  const isMobile = !isBox;
  const DIMENSION = isBox ? "w-[300px] h-[300px] " : "w-[300px] h-[150px] ";
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // effect={isBox ? "cube" : "cards"}
      effect={"cards"}
      grabCursor={true}
      //   cubeEffect={{
      //     shadow: true,
      //     slideShadows: true,
      //     shadowOffset: 20,
      //     shadowScale: 0.94,
      //   }}
      pagination={!isMobile}
      modules={[Autoplay, EffectCube, Pagination, EffectCards]}
      className={`mySwiper ${DIMENSION} ${isMobile && "top-40"} `}>
      {!!data.length &&
        data?.map((item, i) => (
          <SwiperSlide key={`slider-news-${i}`}>
            <div
              className={`absolute ${DIMENSION}  rounded-md overflow-hidden `}>
              {/* <div className="absolute w-full border"> title here</div> */}
              <div>
                <img
                  className={`absolute ${DIMENSION}`}
                  style={{ objectFit: "cover" }}
                  src={extractImageSrc(item?.content)}
                />
                <div className="absolute  w-full h-full bg-black opacity-75"></div>
              </div>
              <div
                className={isMobile ? " w-40 text-sm" : ""}
                onClick={() => {
                  window.open(item?.link, "_blank");
                }}>
                <div className="relative text-white flex  px-4 pt-4 ">
                  <div className="bg-red-500 p-2 rounded-sm">
                    NEWS
                    {/* UPDATE */}
                  </div>
                </div>
                <div className="relative  h-full text-white p-4 font-bold">
                  {item?.title}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;

const NewsItem = () => {
  return <div></div>;
};

const SliderItem = () => {
  return (
    <SwiperSlide>
      {/* <div className="w-[300xpx] border border-green-400 h-[400px] bg-red-400"> */}
      Slider 1{/* </div> */}
    </SwiperSlide>
  );
};

const SliderTest = () => {
  return (
    <>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </>
  );
};
