function About() {
  return (
    <div className="grid min-h-[128px] gap-4 p-4" id="about">
      <p className="text-8xl text-sky-400">this is me.</p>
      <p className="text-4xl text-zinc-500 font-elise self-end">
        はじめまして!
      </p>
      <div className="grid lg:w-[80%] w-[90%] lg:text-2xl text-xl">
        <p>
          Hello, again! My name is Levell. I&apos;m a front-end developer
          currently located in Southern California. I studied computer science
          at California State University, San Bernardino, where I recieved my
          B.S. in Computer Science in 2021. I am always searching for
          opportunities that will allow me to develop and grow further in
          frontend development.
        </p>
      </div>
    </div>
  );
}

export default About;
