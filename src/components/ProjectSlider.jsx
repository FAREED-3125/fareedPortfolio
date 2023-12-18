import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectSlider = ({ images, imgpos }) => {
  return (
    <div>
      <div className="w-full mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          spaceBetween={10}
          grabCursor={true}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="lg:w-[80%] w-full aspect-square mx-auto lg:h-[550px] overflow-hidden rounded-lg"
                  style={{
                    margin: imgpos === "right" ? "0 0 0 auto" : "0 auto 0 0 ",
                  }}
                >
                  <img
                    src={image}
                    className="w-full h-full object-fill"
                    alt="image not found"
                    decoding="async"
                  />
                </div>
              </SwiperSlide>
            );
          })}
          <div
            className=" w-full h-[60px] flex items-center gap-4 relative  lg:w-[80%] "
            style={{
              justifyContent: imgpos === "right" ? "flex-end" : "flex-start",
              margin: imgpos === "right" ? "0 0 0 auto" : "0 auto 0 0 ",
            }}
          >
            <div className=" prev-button p-2 bg-primary text-[28px] w-max rounded-full cursor-pointer">
              <AiOutlineSwapLeft />
            </div>
            <div className="next-button p-2 bg-primary text-[28px] w-max rounded-full cursor-pointer">
              <AiOutlineSwapRight />
            </div>
            <div
              className="absolute top-1 right-2 text-[12px] text-primary"
              style={{
                left: imgpos === "right" && ".5rem",
                right: imgpos === "left" && ".5rem",
              }}
            >
              <p className="flex items-center">
                {imgpos === "right" ? "<<< slide" : "slide >>>"}
              </p>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSlider;
