import Hero from "@/components/Hero";
import SideNav from "@/components/SideNav";
import { NAV_ITEMS, TECH_STACK } from "../constants.js";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <SideNav listItems={NAV_ITEMS.left} left></SideNav>
      <SideNav listItems={NAV_ITEMS.right}></SideNav>
      <main className="mb-24 grid">
        <Hero />
        <p className="mt-24 ml-32 text-xl w-[400px]">
          Watching my code come to life fuels my passion for frontend
          development
        </p>
        <p className="text-center mt-24 text-xl">
          The technologies I predominantly use:
        </p>
        <p className="text-6xl font-oswald uppercase text-center px-32 mt-6 leading-[5rem]">
          {TECH_STACK.map((item, index) => (
            <span className={`text-${item.color}`} key={index}>
              {item.text}{" "}
            </span>
          ))}
        </p>
        <About />
      </main>
    </>
  );
}
