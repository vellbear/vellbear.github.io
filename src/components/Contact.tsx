function Contact() {
  return (
    <div id="contact" className="grid gap-16">
      <div className="sm:flex grid grid-cols-[auto,1fr] gap-x-2 pl-4 sm:pl-0 sm:text-center sm:justify-self-center">
        <h1 className="text-9xl font-six-caps text-sky-400">How to</h1>
        <p className="text-4xl text-zinc-500">reach</p>
        <h1 className="text-9xl font-elise text-sky-400">me.</h1>
      </div>
      <div className="grid w-[85%] sm:w-[65%] text-3xl sm-4xl text-center justify-self-center">
        <a href="mailto: levellmack@gmail.com" className="hover:underline">
          levellmack@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
