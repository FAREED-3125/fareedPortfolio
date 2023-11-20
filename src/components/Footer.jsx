import React, { useContext } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { ImDribbble } from "react-icons/im";
import { GlowcursorContext } from "./Glowcursor";
const Footer = () => {
  const { cursorSize } = useContext(GlowcursorContext);
  return (
    <section id="contact" className="w-full min-h-screen h-[700px] mt-[100px]">
      {/* contact container starts  */}{" "}
      <div className="w-[90%] mx-auto h-full flex items-center flex-col justify-between">
        {/* <contact heading starts  */}

        <div className="font-[700] w-full  text-primary text-[24px] flex items-center">
          <div className="h-[1px] flex-grow bg-slate-300"></div>
          <div className="p-3 ">
            <h3>Contact me.</h3>
          </div>
          <div className="h-[1px] flex-grow bg-slate-300"></div>
        </div>
        {/* <contact heading ends */}
        <div
          className="w-full md:w-[60%] lg:w-[50%] mx-auto text-center text-[15px] md:text-[16px] font-[500] text-slate-300 mt-5"
          onMouseEnter={() => cursorSize.set(70)}
          onMouseLeave={() => cursorSize.set(20)}
        >
          <p>
            Feel free to reach out to me through the mail button below, and
            let's start building the future of the web together.
          </p>
          <div className="ring-1 w-[120px] mx-auto ring-primary text-primary h-[50px] flex items-center justify-center mt-8 font-[400] font-redhat gap-3">
            <span>
              <MdOutlineAlternateEmail />
            </span>
            <a href="mailto:umarfareed3125@gmail.com">Mail me</a>
          </div>
        </div>

        {/* social links  and designer details*/}
        <div className="mb-[30px]">
          <div className="flex gap-10 text-[22px] text-slate-200 items-center justify-center">
            <a
              href="https://instagram.com/fa_reed._.3125?igshid=OGQ5ZDc2ODk2ZA=="
              className="hover:text-primary hover:scale-[1.2] transition-all duration-[.3s]"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/umar-fareed-463463261"
              className="hover:text-primary hover:scale-[1.2] transition-all duration-[.3s]"
            >
              <LuLinkedin />
            </a>
            <a
              href="https://dribbble.com/FAREED_3125"
              className="hover:text-primary hover:scale-[1.2] transition-all duration-[.3s]"
            >
              <ImDribbble />
            </a>
          </div>
          <div className="mt-5 text-[13px] font-redhat text-slate-200 ">
            <p>
              designed & build by{" "}
              <span className="text-primary">umar fareed</span>
            </p>
          </div>
        </div>
      </div>
      {/* contact container ends */}
    </section>
  );
};

export default Footer;
