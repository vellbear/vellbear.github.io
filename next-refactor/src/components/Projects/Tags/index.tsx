import { TagsProps } from "./types";
import Tag from "./Tag";

function Tags({ tags }: TagsProps) {
  return (
    <>
      {tags!.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </>
  );
}

export default Tags;
