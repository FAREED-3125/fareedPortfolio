import React, { createContext, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Lenis from "@studio-freight/lenis";
import SliderSkills from "./components/SliderSkills";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
export const lenisContext = createContext();
const App = () => {
  const lenis = new Lenis({
    wheelMultiplier: 1,
    duration: 2,
    smoothWheel: true,
  });

  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <lenisContext.Provider value={{ lenis }}>
        <Header />
        <Hero />
        <SliderSkills />
        <About />
        <Projects />
        <Footer />
      </lenisContext.Provider>
    </>
  );
};

export default App;
