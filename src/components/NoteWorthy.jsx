import { useMotionValue, motion as m, useMotionTemplate } from "framer-motion";
import { useContext, useRef } from "react";
import { GlowcursorContext } from "./Glowcursor";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

const NoteWorthy = ({ gitlink, applink, overview, title }) => {
  const glowCont = useRef();

  const divX = useMotionValue(0);
  const divy = useMotionValue(0);
  const { cursorSize } = useContext(GlowcursorContext);

  const handleMouseIn = (e) => {
    const { left, top } = glowCont.current.getBoundingClientRect();
    divX.set(e.clientX - left);
    divy.set(e.clientY - top);
  };

  return (
    <m.div
      className="text-slate-300 w-full min-h-[225px] mb-6 bg-black/40 backdrop-blur-[2px] rounded-lg p-3 ring-[1px] ring-gray-700 relative group overflow-hidden cursor-default"
      onMouseMove={handleMouseIn}
      ref={glowCont}
      onMouseEnter={() => cursorSize.set(0)}
      onMouseLeave={() => cursorSize.set(20)}
    >
      {" "}
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
      {/* projecty heading starts */}{" "}
      <div className="flex item-center justify-between text-[18px] text-white">
        <h3>{title}</h3>
        <div className="flex items-center gap-4 text-[25px]">
          <a href={applink}>
            <MdOpenInNew />
          </a>
          <a href={gitlink}>
            <AiFillGithub />
          </a>
        </div>
      </div>
      {/* projecty heading ends */}
      {/* project body starts  */}
      <div className="mt-6 text-[.8rem] text-gray3400  lg:text-[.9rem]">
        <p>{overview}</p>
      </div>
      {/* project body ends */}
    </m.div>
  );
};

export default NoteWorthy;
