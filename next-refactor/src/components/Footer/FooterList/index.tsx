import { FooterListProps } from "./types";

function FooterList({ listTitle, listSubtitle, listItems }: FooterListProps) {
  return (
    <div className="grid gap-1 h-fit text-2xl sm:text-base">
      <p className="uppercase text-sky-400">{listTitle}</p>
      {listSubtitle ? (
        <p className="uppercase text-zinc-400">{listSubtitle}</p>
      ) : (
        <></>
      )}
      <ul className="grid text-zinc-500">
        {listItems.map((item, index) => (
          <li key={index}>
            <a
              target="_blank"
              href={item.link}
              title={item.title}
              className="hover:underline hover:text-white underline-offset-2 transition-colors duration-300 py-2"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
