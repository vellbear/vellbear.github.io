import { FooterProps } from "./types";
import data from "./data.json";

function Footer() {
  const navData = data.navigation;
  const projectData = data.projects;
  const certificateData = data.certificates;
  const educationData = data.education;
  return (
    <footer className="grid sm:grid-flow-col sm:grid-cols-4 gap-4 p-12 mx-4 border-[1px] border-white uppercase">
      <FooterList listTitle="Navigaiton" listItems={navData} />
      <FooterList listTitle="Projects" listItems={projectData} />
      <FooterList
        listTitle="Certificates"
        listSubtitle="Meta Front-End Developer Professional Certificate (2/9)"
        listItems={certificateData}
      />
      <FooterList
        listTitle="Education"
        listSubtitle="California State University San Bernardino"
        listItems={educationData}
      />
      <p className="text-center sm:self-start sm:justify-self-center sm:row-start-2 sm:col-span-full sm:h-fit pt-6 text-sky-400 normal-case">
        Copyright © 2022 Levell Mack. All rights reserved.
      </p>
    </footer>
  );

  function FooterList({ listTitle, listSubtitle, listItems }: FooterProps) {
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
}

export default Footer;
