import { TagsProps } from "../types";

function Tag({ name }: TagsProps) {
  return (
    <div className="border-2 border-sky-500 w-fit px-2 text-center">
      <div>{name}</div>
    </div>
  );
}

export default Tag;
