import React, { useContext, useEffect, useRef, useState } from "react";
import {
  motion as m,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { MdDownloadForOffline } from "react-icons/md";
import { lenisContext } from "../App";
import resume from "../Assets/Resume/Umar fareed Resume.pdf";

const menuItems = ["about", "projects", "contact"];

const Header = () => {
  const { lenis } = useContext(lenisContext);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [fixed, setisFixed] = React.useState(true);
  const [resumealert, setResumealert] = useState(true);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 500) setisFixed(false);
    else setisFixed(true);

    if (latest < 400) setResumealert(true);
    else setResumealert(false);
  });

  return (
    <>
      {" "}
      <m.div
        className="w-full h-[70px] lg:h-[90px] fixed top-0 flex items-center justify-end bg-slate-900/50 backdrop-blur-[2px] z-[9999]"
        animate={!fixed ? { y: "-100%" } : { y: 0 }}
        transition={{
          type: "linear",
        }}
      >
        {/* mobile resume alert blinker start  */}
        <m.div
          animate={
            resumealert
              ? {
                  x: [-15, 0],
                  opacity: [0.4, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }
              : {
                  opacity: 0,
                }
          }
          className="w-[70px] h-full flex items-center text-slate-100 text-[10px] ml-auto lg:hidden"
        >
          <p className="flex items-center w-full h-full">resume {"  >>"}</p>
        </m.div>
        {/* mobile resume alert blinker ends */}
        {/* menu icons container starts */}
        <div
          onClick={() => setMenuOpen(true)}
          className="w-[30px] h-[25%] flex flex-col justify-between items-end mr-5 overflow-hidden lg:hidden"
        >
          <m.div
            animate={
              isMenuOpen
                ? {
                    x: "100%",
                  }
                : {}
            }
            transition={{
              type: "linear",
              stiffness: 50,
            }}
            className="h-[2px] w-full bg-primary"
          ></m.div>
          <m.div
            animate={
              isMenuOpen
                ? {
                    x: "100%",
                  }
                : {}
            }
            transition={{
              delay: 0,
              type: "linear",
            }}
            className="h-[2px] w-[75%] bg-primary"
          ></m.div>
          <m.div
            animate={
              isMenuOpen
                ? {
                    x: "100%",
                  }
                : {}
            }
            transition={{
              type: "linear",
            }}
            className="h-[2px] w-[50%] bg-primary"
          ></m.div>
        </div>{" "}
        {/* menu icons container ends */}{" "}
        {/* bigger screen menu flex container starts */}
        <div className="gap-8 mr-10 h-full items-center hidden lg:flex">
          {menuItems.map((items, index) => (
            <div
              key={index}
              className="font-[700] text-[16px]  text-primary h-max font-redhat"
            >
              <m.div
                whileHover={{
                  scale: 1.2,
                }}
                onClick={() => {
                  lenis.scrollTo(`#${items}`);
                }}
              >
                <span>{index + 1}. </span>
                <span>{items}</span>
              </m.div>
            </div>
          ))}
          {/* Download resume container starts */}
          <div className="overflow-hidden h-full p-5">
            <m.a
              href={resume}
              download
              custom={1.4}
              className="w-[150px] h-[90%] ring-2 ring-primary rounded-lg flex items-center justify-center text-primary gap-4 font-redhat cursor-pointer"
            >
              <p className="font-[500]">Resume</p>
              <p className="text-[18px]">
                {" "}
                <a href="">
                  <MdDownloadForOffline />
                </a>
              </p>
            </m.a>
          </div>
          {/* Download resume container ends */}
        </div>
        {/* bigger screen menu felx container ends */}
      </m.div>
      <SideMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

const SideMenu = ({ isMenuOpen, setMenuOpen }) => {
  const { lenis } = useContext(lenisContext);

  const menuVariant = {
    initial: {
      x: "140%",
    },
    animate: {
      x: 0,
      transition: {
        delay: 0.3,
        type: "linear",
      },
    },
  };
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (!menuRef.current.contains(e.target)) setMenuOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <m.div
      ref={menuRef}
      variants={menuVariant}
      initial="initial"
      animate={isMenuOpen ? "animate" : "initial"}
      className="w-[70%] right-0 min-h-screen overflow-auto bg-primary backdrop-blur-[5px] fixed top-0 z-[9999] grid place-items-center"
    >
      <div>
        {/* menu items container starts */}{" "}
        <div className="flex flex-col gap-5">
          {menuItems.map((items, index) => (
            <div
              key={index}
              className="font-[900] text-[28px] overflow-hidden "
            >
              <m.div
                initial={{
                  y: 100,
                }}
                animate={
                  isMenuOpen
                    ? {
                        y: 0,
                      }
                    : {
                        y: 100,
                      }
                }
                transition={{
                  delay: 0.5,
                }}
                onClick={() => {
                  lenis.scrollTo(`#${items}`);
                  setMenuOpen(false);
                }}
              >
                <span>{index + 1}. </span>
                <span>{items}</span>
              </m.div>
            </div>
          ))}
          {/* Download resume container starts */}
          <div className="overflow-hidden h-max p-1">
            <m.a
              href={resume}
              download
              custom={1.4}
              className="w-[150px] h-[60px] ring-2 ring-slate-900 rounded-lg flex items-center justify-center text-slate-900 gap-4 mt-5 font-redhat cursor-pointer"
            >
              <p className="font-[500]">Resume</p>
              <p className="text-[18px]">
                {" "}
                <a href="">
                  <MdDownloadForOffline />
                </a>
              </p>
            </m.a>
          </div>
          {/* Download resume container ends */}
        </div>
        {/* menu items container ends */}
      </div>
    </m.div>
  );
};

export default Header;
