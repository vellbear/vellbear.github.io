"use client";
import Hero from "@/components/Hero";
import SideNav from "@/components/SideNav";
import { NAV_ITEMS, TECH_STACK } from "../constants.js";
import About from "@/components/About";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const crosshairRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
      setIsMouseMoving(true);

      clearTimeout(timer);
      timer = setTimeout(() => setIsMouseMoving(false), 500);
    };

    const handleScroll = (e: Event) => {
      // TODO: Move crosshair when page is scrolled.
      // setMousePosition((prevMousePosition) => ({
      //   ...mousePosition,
      //   y: mousePosition.y + 2.5,
      // }));
    };

    let timer: NodeJS.Timeout;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <body className="relative font-arvo text-white bg-dark-knight [&_*]:cursor-none">
      <SideNav listItems={NAV_ITEMS.left} left></SideNav>
      <SideNav listItems={NAV_ITEMS.right}></SideNav>
      <main className="grid mb-24">
        <div className="absolute w-[calc(100vw-1.1rem)] h-[calc(100%+6rem)] overflow-hidden">
          <div
            ref={crosshairRef}
            style={{
              left: mousePosition.x + "px",
              top: mousePosition.y + "px",
            }}
            className="pointer-events-none absolute realtive z-50 before:h-[2px] before:overflow-hidden after:overflow-hidden before:absolute before:w-[200vw] before:bg-white before:-translate-x-1/2 after:h-[200vh] after:absolute after:w-[2px] after:bg-white after:-translate-y-1/2"
          >
            <span
              style={{ display: isMouseMoving ? "none" : "block" }}
              className={`absolute opacity-0 w-[310px] -translate-x-1/2 text-joker-red font-gravitas left-2 -top-6 animate-fadein`}
            >
              Designed by:
            </span>
            <span
              style={{ display: isMouseMoving ? "none" : "block" }}
              className="absolute opacity-0 w-[310px] text-white/75 font-gravitas left-2 top-1 [transform:scale(1,-1)_translateX(-50%)] animate-[fadein_1s_ease-in-out_.6s_forwards]"
            >
              Designed by:
            </span>
            <span
              style={{ display: isMouseMoving ? "none" : "block" }}
              className="absolute opacity-0 w-[310px] text-white/75 font-gravitas left-2 -top-6 animate-[fadein_1s_ease-in-out_.9s_forwards]"
            >
              Levell Mack
            </span>
            <span
              style={{ display: isMouseMoving ? "none" : "block" }}
              className="absolute opacity-0 w-[310px] text-joker-red font-gravitas left-2 top-1 [transform:scale(1,-1)] animate-[fadein_1s_ease-in-out_.3s_forwards]"
            >
              Levell Mack
            </span>
          </div>
        </div>
        <Hero />
        <p className="mt-24 text-center font-gravitas sm:text-left mx-8 sm:ml-32 sm:text-xl sm:w-[600px]">
          Watching my code come to life fuels my passion for frontend
          development.
        </p>
        <p className="mt-24 text-center sm:text-xl">
          The technologies I predominantly use:
        </p>
        <p className="text-[2.1rem] sm:text-6xl font-oswald uppercase text-center sm:px-32 mt-6 leading-[3rem] sm:leading-[5rem]">
          {TECH_STACK.map((item, index) => (
            <span className={`text-${item.color}`} key={index}>
              {item.text}{" "}
            </span>
          ))}
        </p>
        <About />
      </main>
    </body>
  );
}
