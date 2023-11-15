import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import flimoimage1 from "../Assets/Flimo/Frame 3.jpg";
import flimoimage2 from "../Assets/Flimo/Frame 4.jpg";
import flimoimage3 from "../Assets/Flimo/Frame 5.jpg";
import stayimg1 from "../Assets/stayeasy/Frame 6.jpg";
import stayimg2 from "../Assets/stayeasy/Frame 7.jpg";
import stayimg3 from "../Assets/stayeasy/Frame 8.jpg";
import stayimg4 from "../Assets/stayeasy/Frame 9.jpg";
import jobiimg from "../Assets/Jobibo/Frame 12.jpg";
import jobiimg1 from "../Assets/Jobibo/Frame 17.jpg";
import jobiimg2 from "../Assets/Jobibo/Frame 18.jpg";
import jobiimg3 from "../Assets/Jobibo/Frame 19.jpg";
import inoimg1 from "../Assets/upload/mobile.jpg";
import inoimg2 from "../Assets/upload/tab view.jpg";
import inoimg3 from "../Assets/upload/tap view.jpg";
import { AiFillGithub, AiOutlineSwapLeft } from "react-icons/ai";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
import { motion as m } from "framer-motion";
const Projects = () => {
  //Flimo project utils
  const flimo = [flimoimage1, flimoimage2, flimoimage3];
  const flimoTools = [
    "react js",
    "tmdb api",
    "tailwind css",
    "custom hooks",
    "framer motion",
    "responsive designs",
    "vercel",
    "swiper js",
  ];

  //stayEasy project utils
  const StayEasy = [stayimg1, stayimg2, stayimg3, stayimg4];
  const stayEasytools = [
    "react js",
    "express framework",
    "node js",
    "context api",
    "vercel",
    "render",
    "mongodb",
    "response design",
  ];

  //pixels project utils
  const Jobibo = [jobiimg, jobiimg1, jobiimg2, jobiimg3];
  const jobibotools = [
    "react js",
    "framer motion",
    "responsive design",
    "tailwind css",
    "Jwt",
    "render",
    "vercel",
    "Context api",
  ];

  const inomation = [inoimg1, inoimg2, inoimg3];

  const inoTools = [
    "react js",
    "framer motion",
    "responsive design",
    "tailwind css",
    "swiper js",
  ];
  return (
    <section
      id="projects"
      className="mt-[100px]  min-h-screen w-[90%] lg:w-[80%]  mx-auto "
    >
      {/* project heading start  */}{" "}
      <div className="font-[700]  text-primary text-[24px] flex items-center">
        <div className="h-[1px] flex-grow bg-slate-300"></div>
        <div className="p-3 ">
          <h3>Selected Projects</h3>
        </div>
        <div className="h-[1px] flex-grow bg-slate-300"></div>
      </div>
      {/* project heading ends */}
      {/* project jobibo container starts */}
      <ProjectComponent
        title={"Jobibo: The job search app"}
        overview={`
Welcome to Jobibo, your ultimate job searching app. With dual account types for job seekers and recruiters, Jobibo streamlines the process. Job seekers can create profiles, explore tailored job listings, and apply seamlessly. Recruiters can showcase companies, post jobs, and manage applications efficiently.`}
        imageArray={Jobibo}
        toolused={jobibotools}
        gitlink={"https://github.com/FAREED-3125/jobibo-client"}
        applink={"https://jobibo-client.vercel.app/"}
        number={1}
      />
      {/* project jobibo container ends */}
      {/* project flimo container starts */}
      <ProjectComponent
        title={"Flimo: the movies review app"}
        overview={` Flimo is a dynamic and interactive movie database project built
                using modern web technologies, including React JS, Swiper JS,
                TMDB API, Framer Motion, Tailwind CSS, and a custom fetching
                React hook. This project aims to provide users with an immersive
                and visually appealing movie exploration experience.`}
        imageArray={flimo}
        toolused={flimoTools}
        gitlink={"https://github.com/FAREED-3125/flimo"}
        applink={"https://flimo.vercel.app/"}
        number={2}
      />
      {/* project flimo container ends */}
      {/* project stayeasy container starts */}
      <ProjectComponent
        title={"stayEasy: the Hotel management app"}
        overview={` StayEasy is a powerful, responsive, and user-friendly hotel management web application that optimizes operations for hotels of all sizes, helping them deliver a seamless and enjoyable experience to their guests`}
        imageArray={StayEasy}
        toolused={stayEasytools}
        gitlink={"https://github.com/FAREED-3125/stayEasyFrontend"}
        applink={"https://stay-easy-app.vercel.app/"}
        number={3}
      />
      {/* project stayEasy container ends */}
      {/* inomation project starts  */}
      <ProjectComponent
        title={"Inomation: the animation company website"}
        overview={
          "Inomation is more than just a website; it's my personal playground for exploring the exciting realms of animation, React, and Framer Motion. It's a project born out of a passion for creativity and a desire to enhance my skills for my personal portfolio."
        }
        imageArray={inomation}
        toolused={inoTools}
        gitlink={"https://github.com/FAREED-3125/Innomation"}
        applink={"https://innomation.vercel.app/"}
        number={4}
      />
      {/* inomation project ends */}
      {/* note worthy porjects starts */}{" "}
      <div className="mt-10">
        <div className="font-[700]  text-primary text-[20px] flex items-center">
          <div className="h-[1px] flex-grow "></div>
          <div className="p-3 ">
            <h3>other Projects</h3>
          </div>
          <div className="h-[1px] flex-grow "></div>
        </div>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 mt-5">
          <NoteWorthy
            title={"Pixel: the tech news app "}
            overview={` Pixels is a web application developed as a personal project aimed at enhancing frontend development skills. This web app is designed using modern web technologies and frameworks such as React.js, Framer Motion, Tailwind CSS, and responsive design principles. While Pixels does not serve a specific business or practical purpose, it serves as a learning tool and a playground for experimenting with these technologies.`}
            gitlink={"https://github.com/FAREED-3125/Pixels"}
            applink={"https://pixels-seven.vercel.app/"}
          />
          <NoteWorthy
            title={"Fitness tracker"}
            overview={
              "Workout Buddy is a straightforward fitness tracker app developed using the MERN stack (MongoDB, Express.js, React, Node.js). This minimalistic app is designed for those who want to easily monitor their fitness progress without any complexity."
            }
            applink={"https://fitnesstrackerfront.vercel.app/"}
            gitlink={"https://github.com/FAREED-3125/fitnesstrackerfront"}
          />
        </div>
      </div>
      {/* note worthy porjects ends */}
    </section>
  );
};

const ProjectSlider = ({ images }) => {
  return (
    <div>
      <div className="w-full mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          spaceBetween={10}
          grabCursor={true}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="lg:w-[90%] w-full mx-auto h-[350px] md:h-[490px] lg:h-[650px] overflow-hidden rounded-lg"
                >
                  <img
                    src={image}
                    className="w-full h-full object-fill"
                    alt="image not found"
                  />
                </div>
              </SwiperSlide>
            );
          })}
          <div className=" w-full h-[60px] flex items-center gap-4 relative">
            <div className=" prev-button p-2 bg-primary text-[28px] w-max rounded-full cursor-pointer">
              <AiOutlineSwapLeft />
            </div>
            <div className="next-button p-2 bg-primary text-[28px] w-max rounded-full cursor-pointer">
              <AiOutlineSwapRight />
            </div>
            <div className="absolute top-1 right-2 text-[12px] text-primary">
              <p className="flex items-center">slide {"   >>>"}</p>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

const ProjectComponent = ({
  title,
  overview,
  toolused,
  imageArray,
  gitlink,
  applink,
  number,
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
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      className="mt-[60px] md:mt-[60px] lg:mt-[100px] w-full mx-auto relative"
    >
      {/* image slider */}
      <m.div
        variants={projectvariant}
        className="md:w-[70%] hidden lg:block lg:w-[60%] md:mx-auto lg:m-0 text-black mt-5"
      >
        <ProjectSlider images={imageArray} />
      </m.div>
      {/* project brief  */}
      <div className="w-full lg:w-[60%] top-[50%] left-[50%] lg:left-[45%] bg-slate-900/90 backdrop-blur-[5px] lg:absolute min-h-[470px] mt-4 lg:z-[99] lg:translate-y-[-60%] lg:rounded-lg flex items-start justify-center text-slate-300">
        {/* project detail section starts */}
        <div className="w-full  lg:w-[90%] md:mt-[5%] md:mb-[5%]">
          <p className="text-primary text-[12px]">#{number} project</p>
          <h3 className="text-[30px] text-white font-[600]">{title}</h3>
          {/* image slider */}
          <m.div
            variants={projectvariant}
            className="md:w-[70%] lg:hidden lg:w-[60%] md:mx-auto lg:m-0 text-black mt-5"
          >
            <ProjectSlider images={imageArray} />
          </m.div>
          {/* overview container  */}
          <div className="mt-3">
            <h2 className="text-[15px] text-slate-100 mb-3">overview</h2>
            <p className="text-[12px] md:text-[15px] md:w-[70%] lg:w-full font-[500]">
              {overview}
            </p>
          </div>
          {/* tool used container  */}
          <div className="mt-4  md:w-[70%] lg:w-full">
            <h2 className="text-[15px] text-slate-100 mb-3">Tools used</h2>
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
          <div className="font-redhat text-[14px] text-slate-200 mt-5 flex items-center gap-5">
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
        </div>{" "}
        {/* project detail section ends */}
      </div>
    </m.div>
  );
};
export default Projects;

const NoteWorthy = ({ gitlink, applink, overview, title }) => {
  return (
    <div className="text-slate-300 w-full min-h-[225px] mb-6 bg-black/40 backdrop-blur-[2px] rounded-lg p-3">
      {" "}
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
      <div className="mt-6 text-[.8rem]  lg:text-[.9rem]">
        <p>{overview}</p>
      </div>
      {/* project body ends */}
    </div>
  );
};
