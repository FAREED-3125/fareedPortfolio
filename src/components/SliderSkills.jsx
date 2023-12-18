import React, { useContext, useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { GlowcursorContext } from "./Glowcursor";

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
  const { cursorSize } = useContext(GlowcursorContext);
  return (
    <section
      data-scroll-section
      ref={sliderref}
      className="min-h-[180px] md:min-h-[200px] lg:min-h-[220px] bg-primary grid place-items-center"
      onMouseEnter={() => cursorSize.set(200)}
      onMouseLeave={() => cursorSize.set(20)}
    >
      <div className="w-full md:w-[80%] mx-auto lg:w-[80%] overflow-hidden bg-primary flex flex-col  gap-2 p-2 ">
        <div className="flex items-center text-[50px]  text-primary bg-slate-900 font-[900] w-full   gap-2">
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
