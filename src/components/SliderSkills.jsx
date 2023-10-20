import React, { useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";

const SliderSkills = () => {
  const sliderref = useRef();
  const { scrollYProgress } = useScroll({
    target: sliderref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, -100, -200, -300]
  );
  const x1 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [-120, -80, -20, 0]
  );
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, -50, -100, -150]
  );
  return (
    <section
      data-scroll-section
      ref={sliderref}
      className="h-[50vh] bg-primary grid place-items-center"
    >
      <div className="w-full md:w-[80%] mx-auto lg:w-[80%] overflow-hidden bg-primary flex flex-col  gap-2 p-2">
        <div className="flex items-center text-[50px]  text-primary bg-slate-900 font-[900] w-full h-full gap-2">
          <m.div
            className=" flex items-center  gap-2"
            style={{
              translateX: x,
            }}
          >
            {Array.from("WEB DEVELOPER * RESPONSIVE WEB DESIGNS").map(
              (letter, index) => (
                <div key={index}>{letter}</div>
              )
            )}
          </m.div>
        </div>

        <div className="flex items-center text-[50px] text-primary bg-slate-900 font-[900] w-full h-full gap-2">
          <m.div
            className=" flex items-center translate-x-[50px] gap-2"
            style={{
              translateX: x1,
            }}
          >
            {Array.from("WEB DESIGNER * MERN STACK DEVELOPER").map(
              (letter, index) => (
                <div key={index}>{letter}</div>
              )
            )}
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default SliderSkills;
