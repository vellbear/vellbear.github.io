import { ProjectsProps } from "../types";
import Tags from "../Tags";
import Icon from "../Icon";
import Image from "next/image";

function Project({ name, type, tags, github, link, img, alt }: ProjectsProps) {
  return (
    <div className="grid gap-4">
      <a
        className="font-six-caps text-8xl text-sky-400 hover:underline"
        target="_blank"
        href={link}
      >
        {name}
        <span className="text-zinc-500 font-elise text-5xl lowercase">
          /{type}
        </span>
      </a>
      <div className="flex gap-2 lowercase flex-wrap">
        <Tags tags={tags} />
        <div className="flex items-center gap-1">
          {github ? <Icon type link={github} /> : <></>}
          <Icon link={link} />
        </div>
      </div>
      <a className="cursor-pointer" href={link}>
        <Image src={img} alt={alt} width="1440" height="900" />
      </a>
    </div>
  );
}

export default Project;
