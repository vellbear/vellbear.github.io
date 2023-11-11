import { useEffect, useRef, useState } from "react";

export default function Crosshair() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const crosshairRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);

      clearTimeout(timer);
      timer = setTimeout(() => setIsMouseMoving(false), 500);
    };

    const handleScroll = () => {
      setIsMouseMoving(true);
      timer = setTimeout(() => setIsMouseMoving(false), 500);
    };

    let timer: ReturnType<typeof setTimeout>;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="absolute w-[calc(100vw-1.1rem)] h-[calc(100%+6rem)] overflow-hidden">
      <div
        ref={crosshairRef}
        style={{
          left: mousePosition.x + "px",
          top: mousePosition.y + "px",
        }}
        className="pointer-events-none fixed realtive z-50 before:h-[1px] before:overflow-hidden after:overflow-hidden before:absolute before:w-[200vw] before:bg-white before:-translate-x-1/2 after:h-[200vh] after:absolute after:w-[1px] after:bg-white after:-translate-y-1/2"
      >
        <CrosshairText text="Designed by:" left />
        <CrosshairText text="Levell Mack" />
      </div>
    </div>
  );

  function CrosshairText({ text, left }: { text: string; left?: boolean }) {
    const TOP_LEFT = {
      position: "translateX(-50%)",
      color: "#CC4D54",
      animation: "fadein 1s ease-in-out forwards",
    };

    const TOP_RIGHT = {
      position: "",
      color: "rgb(255 255 255 / 0.75)",
      animation: "fadein 1s ease-in-out .3s forwards",
    };

    return (
      <>
        <span
          style={{
            display: isMouseMoving ? "none" : "block",
            transform: left ? TOP_LEFT.position : TOP_RIGHT.position,
            color: left ? TOP_LEFT.color : TOP_RIGHT.color,
            animation: left ? TOP_LEFT.animation : TOP_RIGHT.animation,
          }}
          className={`absolute opacity-0 w-[310px] font-gravitas left-2 -top-6 animate-fadein`}
        >
          {text}
        </span>
        <span
          style={{
            display: isMouseMoving ? "none" : "block",
            transform: left ? "scale(1,-1) translateX(-50%)" : "scale(1,-1)",
            color: left ? "rgb(255 255 255 / 0.75)" : "#CC4D54",
            animation: left
              ? "fadein 1s ease-in-out .9s forwards"
              : "fadein 1s ease-in-out .6s forwards",
          }}
          className={`absolute opacity-0 w-[310px] font-gravitas left-2 top-1 animate-fadein`}
        >
          {text}
        </span>
      </>
    );
  }
}
