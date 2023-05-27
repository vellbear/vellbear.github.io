import { NavbarProps } from "./types";
import NavLinks from "./Navlinks";
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
}

export default Navbar;
