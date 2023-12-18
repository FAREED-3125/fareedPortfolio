import React from "react";
import {
  Jobibo,
  StayEasy,
  flimo,
  flimoTools,
  gamespace,
  gamestools,
  inoTools,
  inomation,
  jobibotools,
  stayEasytools,
} from "../utils/ProjectReq";
import ProjectComponent from "./ProjectComponent";
import NoteWorthy from "./NoteWorthy";
const Projects = () => {
  return (
    <section
      id="projects"
      className="mt-[50px]  min-h-[100dvh] w-[90%] lg:w-[80%]  mx-auto "
    >
      {/* project heading start  */}{" "}
      <div className="font-[700]  text-primary text-[24px] flex items-center">
        <div className="h-[1px] flex-grow bg-slate-300"></div>
        <div className="p-3 ">
          <h3>Selected Projects</h3>
        </div>
        <div className="h-[1px] flex-grow bg-slate-300"></div>
      </div>
      {/* project heading ends */} {/* project stayeasy container starts */}
      <ProjectComponent
        title={"stayEasy: the Hotel management app"}
        overview={` StayEasy is a powerful, responsive, and user-friendly hotel management web application that optimizes operations for hotels of all sizes, helping them deliver a seamless and enjoyable experience to their guests`}
        imageArray={StayEasy}
        toolused={stayEasytools}
        gitlink={"https://github.com/FAREED-3125/stayEasyFrontend"}
        applink={"https://stay-easy-app.vercel.app/"}
        number={1}
      />
      {/* project stayEasy container ends */}
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
        imgpos="right"
      />
      {/* project flimo container ends */}
      {/* project jobibo container starts */}
      <ProjectComponent
        title={"Jobibo: The job search app"}
        overview={`
Welcome to Jobibo, your ultimate job searching app. With dual account types for job seekers and recruiters, Jobibo streamlines the process. Job seekers can create profiles, explore tailored job listings, and apply seamlessly. Recruiters can showcase companies, post jobs, and manage applications efficiently.`}
        imageArray={Jobibo}
        toolused={jobibotools}
        gitlink={"https://github.com/FAREED-3125/jobibo-client"}
        applink={"https://jobibo-client.vercel.app/"}
        number={3}
        imgpos="right"
      />
      {/* project jobibo container ends */}
      {/* project gamespace starts */}
      <ProjectComponent
        title={"Gamespace-haven: game store"}
        overview={
          "GameSpace is a React-based app designed as a personal project to enhance skills in React development. It acts as a repository showcasing game details, developers, publishers, and other related information, aiding in skill advancement."
        }
        applink={"https://gamespace-haven.vercel.app/"}
        gitlink={"https://github.com/FAREED-3125/Gamespace-haven"}
        number={4}
        imageArray={gamespace}
        toolused={gamestools}
      />
      {/* project gamespace emds */}
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
        number={5}
        imgpos="right"
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
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 mt-5">
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
          <NoteWorthy
            title={"Mini Instagram clone"}
            overview={
              "To create a simplified version of Instagram where users can upload their photos, view a feed of uploaded photos, and interact with them by liking or commenting."
            }
            applink={"https://insta-assignment.vercel.app/"}
            gitlink={"https://github.com/FAREED-3125/Insta-Assignment"}
          />
        </div>
      </div>
      {/* note worthy porjects ends */}
    </section>
  );
};

export default Projects;
