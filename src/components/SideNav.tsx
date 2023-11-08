interface SideNavProps {
  listItems: { text: string; href: string }[];
  left?: boolean;
}

export default function SideNav({ listItems, left }: SideNavProps) {
  const styles = {
    nav: {
      left: left ? "16px" : "",
      right: left ? "" : "16px",
      transform: left ? "scale(-1,-1)" : "",
    },
  };

  return (
    <nav
      style={styles.nav}
      className="fixed font-gravitas uppercase grid items-center justify-center min-h-screen h-screen border-white border-x-2 w-14 [writing-mode:vertical-lr]"
    >
      <ul className="flex gap-6 text-center">
        {listItems.map((item, index) => (
          <li
            className="hover:underline underline-offset-2"
            key={item.text + index}
          >
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
