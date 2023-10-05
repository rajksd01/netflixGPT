import { IMAGECDN } from "../utils/Constants";

export default function Moviecard({ posterPath }) {
  return (
    <div className=" flex-shrink-0 pr-6 ">
      <img src={IMAGECDN + posterPath} />
    </div>
  );
}
