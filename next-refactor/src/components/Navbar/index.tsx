import { NavbarProps } from "./types";
import Brand from "../Brand";

function Navbar({ links }: NavbarProps) {
  return (
    <nav className="z-50 fixed mx-auto right-0 left-0">
      <div className="p-4 pr-0 lg:w-[1000px] grid grid-cols-2 items-center backdrop-blur-sm fixed left-0 right-0 mr-auto ml-auto border-b-[1px]">
        <Brand />
        <NavLinks links={links} />
      </div>
    </nav>
  );

  function NavLinks({ links }: NavbarProps) {
    return (
      <ul className="flex grid-cols-4 justify-self-end text-xl sm:text-2xl font-antonio">
        {links.map((link) => (
          <>
            <li>
              <a className="hover:underline transition-colors duration-300 sm:px-4 px-2 py-2 cursor-pointer">
                {link}
              </a>
            </li>
          </>
        ))}
      </ul>
    );
  }
}

export default Navbar;
