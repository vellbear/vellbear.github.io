function Hero() {
  return (
    /*Wrapper*/
    <div id="home" className="grid gap-16 p-4 mt-20">
      {/*Section 1*/}
      <div className="grid self-end">
        <div className=" w-fit grid gap-x-2 pt-8 text-[10rem] md:text-[10rem] xl:text-[10rem] leading-none font-six-caps ">
          <div className="text-sky-400 text-5xl font-elise self-end justify-self-start">
            passionate
          </div>
          <h1 className="">Front-End Developer</h1>
        </div>
        <h2 className="text-3xl text-zinc-500 tracking-custom">
          watching my code come to life fuels my passion for front-end
          development.
        </h2>
      </div>
      {/*Section 2*/}
      <div className="grid self-start justify-end">
        <div className="grid grid-cols-[auto,1fr]">
          <div className="lg:flex grid grid-cols-[auto,1fr] text-right justify-self-end gap-x-4 w-fit text-[6rem] leading-none">
            <div className="">I am</div>
            <p className=" text-sky-400 self-end">levell</p>
            <div className=" col-start-2">mack</div>
          </div>
          <div className="text-2xl font-elise text-sky-400">hello!</div>
          <div className="text-5xl text-right text-zinc-500">
            i am a front-end developer. based in california.
          </div>
        </div>
      </div>
      {/*Section 3*/}
      <div className="grid w-[85%] sm:w-[65%] lg:text-2xl text-xl lg:pl-16 pl-4">
        <p>
          I create websites and web based applications in HTML, CSS, Javascript,
          React and more.
        </p>
      </div>
      {/*Section 4*/}
      <div className="grid w-[85%] sm:w-[65%] lg:text-2xl text-xl lg:pr-16 pr-4 justify-self-end text-right">
        <p>
          I predominantly use frameworks and libraries when creating new
          projects. My favorite CSS framework is TailwindCSS and the library I
          use the most is React. I&apos;m currently learning Typescript.
        </p>
      </div>
    </div>
  );
}

export default Hero;
