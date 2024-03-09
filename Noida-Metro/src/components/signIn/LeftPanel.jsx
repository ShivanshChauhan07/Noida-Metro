import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const LeftPanel = () => {
  return (
    <div className="h-full w-8/12">
      <Swiper
        className="h-full w-full"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="h-full " src="/noida.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full" src="/metro2.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LeftPanel;
