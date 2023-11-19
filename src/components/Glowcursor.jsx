import { motion as m, motionValue, useMotionTemplate } from "framer-motion";
import React, { createContext, useEffect } from "react";
export const GlowcursorContext = createContext();
const Glowcursor = ({ children }) => {
  const cursorSize = motionValue(20);
  const cursorX = motionValue(2000);
  const cursorY = motionValue(2000);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      cursorX.set(clientX);
      cursorY.set(clientY);
    };
    const handleMouseLeave = () => {
      cursorX.set(2000);
      cursorY.set(2000);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  });
  return (
    <GlowcursorContext.Provider value={{ cursorSize }}>
      {children}
      <m.div
        layout
        className="hidden lg:block  aspect-square pointer-events-none bg-primary fixed rounded-full mix-blend-difference z-[99999]"
        style={{
          width: useMotionTemplate`${cursorSize}px`,
          top: useMotionTemplate`${cursorY}px`,
          left: useMotionTemplate`${cursorX}px`,
          transform: useMotionTemplate`translate(-50%,-50%)`,
          transition: "width .1s ease-in-out",
        }}
      ></m.div>
    </GlowcursorContext.Provider>
  );
};

export default Glowcursor;
