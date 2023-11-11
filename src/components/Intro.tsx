import { TECH_STACK } from "../data/constants";

export default function Intro() {
  return (
    <>
      <p className="mt-24 text-center font-gravitas sm:text-left mx-8 sm:ml-32 sm:text-xl sm:w-[600px]">
        Watching my code come to life fuels my passion for frontend development.
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
    </>
  );
}
