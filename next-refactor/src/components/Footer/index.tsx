import FooterList from "../Footer/FooterList";
import data from "./data.json";

function Footer() {
  return (
    <footer className="grid sm:grid-flow-col sm:grid-cols-4 gap-4 p-12 mx-4 border-[1px] border-white uppercase">
      <FooterList listTitle="Navigaiton" listItems={data.navigation} />
      <FooterList listTitle="Projects" listItems={data.projects} />
      <FooterList
        listTitle="Certificates"
        listSubtitle="Meta Front-End Developer Professional Certificate (2/9)"
        listItems={data.certificates}
      />
      <FooterList
        listTitle="Education"
        listSubtitle="California State University San Bernardino"
        listItems={data.education}
      />
      <p className="text-center sm:self-start sm:justify-self-center sm:row-start-2 sm:col-span-full sm:h-fit pt-6 text-sky-400 normal-case">
        Copyright © 2022 Levell Mack. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
