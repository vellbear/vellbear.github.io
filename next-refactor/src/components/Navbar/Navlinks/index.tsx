import { NavbarProps } from "../types";

function NavLinks({ links }: NavbarProps) {
  return (
    <ul className="flex grid-cols-4 justify-self-end text-xl sm:text-2xl font-antonio">
      {links.map((link) => (
        <>
          <li>
            <a
              className="hover:underline transition-colors duration-300 sm:px-4 px-2 py-2 cursor-pointer"
              href={"#" + link}
            >
              {link}
            </a>
          </li>
        </>
      ))}
    </ul>
  );
}

export default NavLinks;
