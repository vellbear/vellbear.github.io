interface SideNavProps {
  listItems: { text: string; href: string }[];
  left?: boolean;
}

export default function SideNav({ listItems, left }: SideNavProps) {
  const styles = {
    nav: {
      left: left ? "32px" : "",
      right: left ? "" : "32px",
      transform: left ? "scale(-1,-1)" : "",
      textTransform: left ? ("uppercase" as const) : ("lowercase" as const),
    },
  };

  return (
    <nav
      style={styles.nav}
      className="transition-colors text-white duration-300 hidden sm:grid fixed font-gravitas lowercase items-center justify-center min-h-screen h-screen border-white border-x-2 w-12 [writing-mode:vertical-lr] z-50"
    >
      <ul className="flex gap-6 text-center">
        {listItems.map((item, index) => (
          <li className="hover:text-joker-purple" key={item.text + index}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
