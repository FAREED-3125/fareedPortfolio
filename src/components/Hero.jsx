import React, { useContext } from "react";
import { motion as m } from "framer-motion";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { ImGithub } from "react-icons/im";
import { lenisContext } from "../App";
import { GlowcursorContext } from "./Glowcursor";
const Hero = () => {
  const { cursorSize } = useContext(GlowcursorContext);
  const { lenis } = useContext(lenisContext);
  const slideVariant = {
    visible: {
      y: [0, 0, -4500],
      transition: {
        duration: 4,
      },
    },
    hidden: {
      y: 0,
    },
  };

  const textVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (e) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: e * 2.5,
        duration: 0.2,
      },
    }),
  };
  return (
    <section
      id="home"
      className="w-full min-h-screen grid place-items-center   overflow-auto "
      data-scroll-section
    >
      {/* her container starts */}
      <m.div
        initial="initial"
        animate="animate"
        className="w-full min-h-screen overflow-auto grid place-items-center"
      >
        {/* sliding up page animation container starts */}
        <m.div
          variants={slideVariant}
          initial={"hidden"}
          animate={"visible"}
          className="bg-primary w-full flex items-start justify-center h-[150vh] fixed top-0 z-[999999] "
        >
          <div className="overflow-hidden w-full h-[75%]   flex justify-center items-center">
            <m.div
              initial={{
                y: 0,
              }}
              animate={{
                scale: [1, 0.5, 0, 50, 100],

                transition: {
                  duration: 1,
                  delay: 1.1,
                  ease: "easeIn",
                },
              }}
              className="font-[900] lg:text-[128px] md:text-[90px] text-[70px] "
            >
              Loading...
            </m.div>
          </div>
        </m.div>
        {/* sliding up page animation container ends */}
        {/* Text-container starts */}
        <div className="overflow-hidden w-full py-[50px] mt-10 lg:mt-10    flex justify-center flex-col gap-0">
          <div className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto ">
            <div className="overflow-hidden">
              <m.div
                variants={textVariant}
                custom={1}
                className="  text-[13px] font-[500] text-[#ffda0f] lg:text-[16px] font-redhat"
              >
                Hi, my name is
              </m.div>
            </div>
            <div
              className="overflow-hidden "
              onMouseEnter={() => cursorSize.set(150)}
              onMouseLeave={() => cursorSize.set(20)}
            >
              <m.div
                variants={textVariant}
                custom={1.1}
                className=" font-[900] text-white  text-[clamp(33px,6vw,75px)]"
              >
                <p>Umar fareed</p>
              </m.div>
            </div>{" "}
            <div
              className="overflow-hidden"
              onMouseEnter={() => cursorSize.set(150)}
              onMouseLeave={() => cursorSize.set(20)}
            >
              <m.div
                variants={textVariant}
                custom={1.2}
                className="  font-[900] text-white   text-[clamp(33px,6vw,75px)]"
              >
                <p className="text-slate-400">and I build things for web.</p>
              </m.div>
            </div>{" "}
            <div
              className="overflow-hidden"
              onMouseEnter={() => cursorSize.set(60)}
              onMouseLeave={() => cursorSize.set(20)}
            >
              <m.div variants={textVariant} custom={1.3} className="mt-3">
                <p className="text-[14px]  text-slate-200 lg:text-[16px] md:w-[70%] lg:w-[65%]">
                  I'm a Mern stack developer have done projects in building and
                  designing web applications. Currently I am eagerly awaiting
                  the opportunity to join a reputable company for an enriching
                  internship experience.
                </p>
              </m.div>
            </div>
            {/* view my Projects container starts */}
            <div className="overflow-hidden h-max p-1 flex items-end gap-5">
              <m.div
                variants={textVariant}
                custom={1.4}
                className="px-5 h-[60px] ring-1 ring-primary rounded-lg flex items-center justify-center text-primary gap-4 mt-10 font-redhat cursor-pointer"
                onClick={() => lenis.scrollTo("#projects")}
              >
                <p className="text-[15px] md:text-[16px]">view my projects</p>
                <p className="text-[18px]">
                  {" "}
                  <BsFillArrowDownRightCircleFill />
                </p>
              </m.div>
            </div>
            {/* view my Projects  container ends */}
          </div>{" "}
          {/* social media container starts */}{" "}
          <div className="overflow-hidden w-[90%] md:w-[85%] h-[120px] lg:h-max lg:w-[60px]  mx-auto lg:absolute lg:bottom-10 lg:left-8">
            {" "}
            <m.div
              variants={textVariant}
              custom={1.5}
              className="
              text-primary mt-10 text-[25px] flex gap-5  lg:flex-col items-center"
            >
              <div className="h-[130px] hidden lg:block w-[1px] bg-primary"></div>

              <div className="d bg-yellow-900 p-3 rounded-full hover:scale-[1.2] transition-all duration-[.3s]">
                <a href="https://instagram.com/fa_reed._.3125?igshid=OGQ5ZDc2ODk2ZA==">
                  {" "}
                  <BsInstagram />
                </a>
              </div>
              <div className="d bg-yellow-900 p-3 rounded-full hover:scale-[1.2] transition-all duration-[.3s]">
                <a href="https://www.linkedin.com/in/umar-fareed-463463261">
                  {" "}
                  <LuLinkedin />
                </a>
              </div>
              <div className="d bg-yellow-900 p-3 rounded-full hover:scale-[1.2] transition-all duration-[.3s]">
                <a href="https://github.com/FAREED-3125?tab=repositories">
                  <ImGithub />
                </a>
              </div>
            </m.div>
          </div>
          {/* social media container ends */}
          {/* email info container starts */}
          <m.div className="text-primary rotate-[-90deg] translate-x-[50%] absolute right-12 bottom-[200px] font-redhat  items-center gap-2 hidden lg:flex hover:bottom-[210px] transition-all duration-[.3s]">
            <a href="mailto:umarfareed3125@gmail.com">
              umarfareed3125@gmail.com
            </a>
            <div className="h-[1px] w-[100px] bg-primary"></div>
          </m.div>
          {/* email info container ends */}
        </div>{" "}
        {/* Text-container ends */}
      </m.div>{" "}
      {/* her container ends */}
      <div className="lg:border border-primary border-b-transparent w-[100px] h-[20px] flex items-center justify-center text-primary font-redhat absolute bottom-[50px]  lg:bottom-[-5px] right-[-40px] rotate-[-90deg] text-[10px] lg:rotate-0 lg:right-[200px]">
        scroll down
      </div>
    </section>
  );
};

export default Hero;
