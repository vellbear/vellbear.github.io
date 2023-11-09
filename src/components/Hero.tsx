export default function Hero() {
  return (
    <section className="grid justify-center [grid:stack] font-oswald ml-24 mr-32 pt-20">
      <h1 className="grid text-[27.5vw] col-start-1 row-start-1 uppercase">
        <span className="justify-self-start leading-none text-joker-green">
          Levell
        </span>
        <span className="relative justify-self-end leading-none text-joker-purple after:normal-case after:absolute after:content-['based_in_California'] after:text-[13%] after:right-0 after:text-white after:top-[48%]">
          Mack
        </span>
      </h1>
      <div className="grid justify-self-center self-center text-center items-center rounded-full border-2 border-white shadow-2xl shadow-white col-start-1 row-start-1 aspect-square p-12 bg-dark-knight/50 backdrop-blur-sm">
        <h2 className="text-4xl uppercase">
          <span>Frontend</span> <br />
          <span>Developer</span>
        </h2>
      </div>
    </section>
  );
}
