import {
  useMotionValue,
  useScroll,
  useTransform,
  useMotionTemplate,
  motion as m,
} from "framer-motion";
import { useContext, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
import { GlowcursorContext } from "./Glowcursor";
import ProjectSlider from "./ProjectSlider";

const ProjectComponent = ({
  title,
  overview,
  toolused,
  imageArray,
  gitlink,
  applink,
  number,
  imgpos = "left",
}) => {
  const projectvariant = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const glowCont = useRef();

  const divX = useMotionValue(0);
  const divy = useMotionValue(0);
  const { cursorSize } = useContext(GlowcursorContext);

  const handleMouseIn = (e) => {
    const { left, top } = glowCont.current.getBoundingClientRect();
    divX.set(e.clientX - left);
    divy.set(e.clientY - top);
  };

  const projectRef = useRef();

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "start start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      className="mt-[60px] md:mt-[60px] lg:mt-[100px] w-full mx-auto relative flex items-center justify-start "
      style={{
        justifyContent: imgpos == "left" ? "flex-start" : "flex-end",
      }}
      ref={projectRef}
    >
      {/* image slider */}
      <m.div
        variants={projectvariant}
        className="md:w-[70%] hidden lg:block lg:w-[60%] md:mx-auto lg:m-0 text-black mt-5"
        style={{
          translateX: imgpos === "right" ? rightX : leftX,
          opacity: opacity,
        }}
      >
        <ProjectSlider images={imageArray} imgpos={imgpos} />
      </m.div>
      {/* project brief  */}
      <m.div
        className={
          "w-full lg:w-[60%] top-[50%]   bg-slate-900/90 backdrop-blur-[10px]  h-max mt-4 lg:z-[999] lg:translate-y-[-60%] lg:rounded-lg flex items-start justify-center text-slate-300 lg:ring-[1px] ring-gray-600 cursor-default lg:absolute group "
        }
        style={{
          left: imgpos === "right" && "0px",
          right: imgpos === "left" && "0px",
        }}
        onMouseMove={handleMouseIn}
        ref={glowCont}
        onMouseEnter={() => cursorSize.set(0)}
        onMouseLeave={() => cursorSize.set(20)}
      >
        {/* project detail section starts */}
        <m.div
          className="w-full   md:mt-[5%] md:mb-[5%] lg:my-0 lg:p-8 relative overflow-hidden p-[3px]"
          style={{
            scale,
          }}
        >
          <m.div
            className="absolute w-[150px] h-[150px] rounded-full hidden lg:block 
            opacity-0
            group-hover:opacity-[1] blur-[110px] pointer-events-none  bg-primary "
            style={{
              top: useMotionTemplate`${divy}px`,
              left: useMotionTemplate`${divX}px`,
              transform: "translate(-50%,-50%)",
            }}
          />
          <p className="text-primary text-[12px] md:mx-auto md:w-[70%] lg:mx-0">
            #{number} project
          </p>
          <h3 className="text-[30px] text-white font-[600] md:mx-auto md:w-[70%] lg:mx-0">
            {title}
          </h3>
          {/* image slider */}
          <m.div
            variants={projectvariant}
            className="md:w-[70%] lg:hidden lg:w-[60%] md:mx-auto lg:m-0 text-black mt-5"
          >
            <ProjectSlider images={imageArray} />
          </m.div>
          {/* overview container  */}
          <div className="mt-3 md:mx-auto md:w-[70%] lg:w-full lg:mx-0">
            <h2 className="text-[20px] font-[600] text-slate-100 mb-1">
              overview:
            </h2>
            <p className="text-[15px] md:text-[15px] md:w-[%] lg:w-full font-[500]">
              {overview}
            </p>
          </div>
          {/* tool used container  */}
          <div className="mt-4  lg:w-full md:mx-auto md:w-[70%] lg:mx-0">
            <h2 className="text-[18px] font-[600] text-slate-100 mb-2">
              Tools used:
            </h2>
            <div className="flex  flex-wrap gap-3 ">
              {toolused.map((tool, index) => (
                <div
                  className="px-3 py-2 bg-yellow-900 text-primary rounded-full text-[13px]"
                  key={index}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
          {/* links container  */}
          <div className="font-redhat text-[14px] text-slate-200 mt-6 flex items-center gap-5 md:mx-auto md:w-[70%] lg:mx-0">
            <a
              href={`${applink}`}
              target="_blank"
              className="flex items-center justify-center gap-3 w-[135px] h-[45px] ring-1 ring-slate-200 rounded-full cursor-pointer"
            >
              <span>visit app</span>
              <span className="text-[18px]">
                <MdOpenInNew />
              </span>
            </a>
            <a
              href={`${gitlink}`}
              target="_blank"
              className="flex items-center justify-center gap-3 w-[180px] h-[45px] ring-1 ring-slate-200 rounded-full cursor-pointer"
            >
              <span>git repository</span>
              <span className="text-[18px]">
                <AiFillGithub />
              </span>
            </a>
          </div>
        </m.div>{" "}
        {/* project detail section ends */}
      </m.div>
    </m.div>
  );
};

export default ProjectComponent;
