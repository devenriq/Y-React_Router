import { Link } from "react-router-dom";

const listTacos = ["chili", "pastor", "carnita", "cochinita"];

export const Search = () => {
  return (
    <div>
      <h1>Search</h1>
      {listTacos.map((taco) => (
        <Link key={taco} to={`/tacos/${taco}`} className="flex flex-col gap-3">
          {taco}
        </Link>
      ))}
    </div>
  );
};
