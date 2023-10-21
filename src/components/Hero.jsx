import React, { useContext } from "react";
import { motion as m } from "framer-motion";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { ImBehance } from "react-icons/im";
import { lenisContext } from "../App";
const Hero = () => {
  const { lenis, setBlur } = useContext(lenisContext);
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
      className="w-full min-h-screen h-max grid place-items-center overflow-auto"
      data-scroll-section
    >
      {/* her container starts */}
      <m.div
        initial="initial"
        animate="animate"
        className="w-full min-h-screen overflow-auto"
      >
        {/* sliding up page animation container starts */}
        <m.div
          variants={slideVariant}
          initial={"hidden"}
          animate={"visible"}
          className="bg-primary w-full flex items-start justify-center h-[150vh] absolute top-0 z-[999999]"
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
        <div className="overflow-hidden w-full h-full absolute top-0  flex justify-center flex-col gap-0">
          <div className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto">
            <div className="overflow-hidden">
              <m.div
                variants={textVariant}
                custom={1}
                className="  text-[13px] font-[500] text-[#ffda0f] lg:text-[16px] font-redhat"
              >
                Hi, my name is
              </m.div>
            </div>
            <div className="overflow-hidden">
              <m.div
                variants={textVariant}
                custom={1.1}
                className="  text-[36px] font-[900] text-white md:text-[50px] lg:text-[70px]"
              >
                <p>Umar fareed</p>
              </m.div>
            </div>{" "}
            <div className="overflow-hidden">
              <m.div
                variants={textVariant}
                custom={1.2}
                className="  text-[36px] font-[900] text-white md:text-[50px] lg:text-[70px]"
              >
                <p className="text-slate-400">and I build things for web.</p>
              </m.div>
            </div>{" "}
            <div className="overflow-hidden">
              <m.div variants={textVariant} custom={1.3} className="mt-3">
                <p className="text-[15px]  text-slate-200 lg:text-[16px] md:w-[70%] lg:w-[65%]">
                  I'm a Mern stack developer have done projects in building and
                  designing web applications. Currently I am eagerly awaiting
                  the opportunity to join a reputable company for an enriching
                  internship experience.
                </p>
              </m.div>
            </div>
            {/* view my Projects container starts */}
            <div className="overflow-hidden h-max p-1">
              <m.div
                variants={textVariant}
                custom={1.4}
                className="w-[250px] h-[60px] ring-1 ring-primary rounded-lg flex items-center justify-center text-primary gap-4 mt-10 font-redhat cursor-pointer"
                onClick={() => lenis.scrollTo("#projects")}
              >
                <p>view my projects</p>
                <p className="text-[18px]">
                  {" "}
                  <div>
                    <BsFillArrowDownRightCircleFill />
                  </div>
                </p>
              </m.div>
            </div>
            {/* view my Projects  container ends */}
          </div>{" "}
          {/* social media container starts */}{" "}
          <div className="overflow-hidden w-[90%] mx-auto">
            {" "}
            <m.div
              variants={textVariant}
              custom={1.5}
              className="text-primary mt-10 text-[25px] flex gap-5 lg:absolute lg:flex-col lg:bottom-10 lg:left:0 items-center"
            >
              <div className="h-[130px] hidden lg:block w-[1px] bg-primary"></div>

              <div className="d bg-yellow-900 p-3 rounded-full hover:scale-[1.2] transition-all duration-[.3s]">
                <BsInstagram />
              </div>
              <div className="d bg-yellow-900 p-3 rounded-full hover:scale-[1.2] transition-all duration-[.3s]">
                <a href="">
                  {" "}
                  <LuLinkedin />
                </a>
              </div>
              <div className="d bg-yellow-900 p-3 rounded-full hover:scale-[1.2] transition-all duration-[.3s]">
                <a href="">
                  <ImBehance />
                </a>
              </div>
            </m.div>
          </div>
          {/* social media container ends */}
          {/* email info container starts */}
          <m.div className="text-primary rotate-[-90deg] absolute right-0 bottom-[200px] font-redhat  items-center gap-2 hidden lg:flex hover:bottom-[210px] transition-all duration-[.3s]">
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
    </section>
  );
};

export default Hero;
