import React, { useContext } from "react";
import { motion as m } from "framer-motion";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { GlowcursorContext } from "./Glowcursor";
const About = () => {
  const skills = [
    "HTML,CSS",
    "tailwind css",
    "react js",
    "node js",
    "express framework",
    "mongodb",
    "context api(state management)",
  ];
  const tools = [
    "vs code",
    "framer motion (for animations)",
    "vercel",
    "render",
    "figma (for rough designing)",
  ];

  const { cursorSize } = useContext(GlowcursorContext);
  return (
    <section
      data-scroll-section
      id="about"
      className="w-full min-h-screen  pt-2 mt-[100px]  text-slate-300"
    >
      {/* about text container starts */}{" "}
      <div className="w-[90%] md:w-[80%] mx-auto bg-slate-900 lg:mt-10 rounded-lg  flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* About details starts */}
        <div className="lg:w-[60%] w-full">
          <div className="flex items-center w-full  gap-3">
            <h3 className="font-[900] text-[20px] text-white ">About me</h3>
            {/* thin line */}
            <div className="h-[1px] flex-grow  bg-primary"></div>
          </div>
          <div
            className="text-slate-300 text-[15px] lg:text-[18px] mt-5 font-[500]"
            onMouseEnter={() => cursorSize.set(90)}
            onMouseLeave={() => cursorSize.set(20)}
          >
            <p>
              In July 2022, I embarked on a journey into the world of web
              development with no prior experience or skills. Fast forward to
              today, I've transformed my capabilities, and I'm now proficient in
              creating vibrant and fully functional{" "}
              <span className="text-primary"> full-stack web applications</span>
              . My toolkit includes expertise in popular technology stacks like
              <span className="text-primary"> MERN </span>(MongoDB, Express,
              React, Node.js), and I have mastered the fundamentals of web
              development with HTML and CSS. Additionally, I excel in crafting
              beautiful, responsive user interfaces with the power of{" "}
              <span className="text-primary">Tailwind CSS</span> . Along the
              way, I've completed multiple projects, honing my skills and
              gaining hands-on experience.
            </p>
            <br />
            <p>
              When I'm not immersed in the digital realm of coding and design, I
              enjoy a healthy dose of physical activity. Whether it's a game of
              football or cricket, or engaging in various forms of exercise, I
              find balance and inspiration in the physical world, which
              complements my creative and technical pursuits.
            </p>
            <p className="text-slate-300 text-[14px] lg:text-[18px] mt-5 lg:mt-10">
              <span className="text-primary">Currently </span>, I am eagerly
              seeking an internship opportunity with a good organization to
              further enhance my skills and contribute to innovative web
              projects.
            </p>
          </div>
        </div>
        {/* About details ends */}

        {/* skill detail starts  */}
        <div className="lg:w-[30%] text-[15px] lg:text-[18px] w-full gap-3 h-full">
          {/* <Section 1 start */}
          <div
            className="h-[50%]"
            onMouseEnter={() => cursorSize.set(90)}
            onMouseLeave={() => cursorSize.set(20)}
          >
            <div className="flex items-center w-full  gap-3">
              <h3 className="font-[700] text-[20px] text-white">Skills</h3>
              <div className="h-[1px] flex-grow  bg-primary"></div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-primary">
                    <VscDebugBreakpointLog />
                  </div>
                  <div>
                    <div>{skill}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
          {/* <Section 1 end */}
          {/* <Section 2 start */}
          <div
            className="h-[50%] mt-10"
            onMouseEnter={() => cursorSize.set(70)}
            onMouseLeave={() => cursorSize.set(20)}
          >
            <div className="flex items-center w-full  gap-3">
              <h3 className="font-[700] text-[20px] ">tools using</h3>
              <div className="h-[1px] flex-grow  bg-primary"></div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-primary">
                    <VscDebugBreakpointLog />
                  </div>
                  <div>
                    <div>{tool}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
          {/* <Section 2 end */}
        </div>
        {/* skill detail ends  */}
      </div>
      {/* about text container ends */}
    </section>
  );
};

export default About;
