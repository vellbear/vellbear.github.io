export default function Hero() {
  return (
    <section className="grid [grid:stack] font-oswald sm:px-24 pt-20 max-w-screen">
      <h1 className="grid text-[27.5vw] col-start-1 row-start-1 uppercase">
        <span className="ml-3 leading-none justify-self-start text-joker-green">
          Levell
        </span>
        <span className="mr-8 relative justify-self-end leading-none text-joker-purple after:normal-case after:absolute after:content-['based_in_California'] after:text-[13%] after:right-0 after:text-white after:top-[48%]">
          Mack
        </span>
      </h1>
      <div className="grid items-center self-center col-start-1 row-start-1 px-8 text-center border-2 border-white rounded-full shadow-2xl justify-self-center shadow-white aspect-square bg-dark-knight/50 backdrop-blur-sm">
        <h2 className=" uppercase text-[3vw] leading-normal">
          <span>Frontend</span> <br />
          <span>Developer</span>
        </h2>
      </div>
    </section>
  );
}
