import { Link } from "react-router-dom";
import ThemeToggle from "./common/ThemeToggle";

const tabItems = [
  {
    name: "Movies",
    path: "/media/movies/discover",
  },
  {
    name: "TV Series",
    path: "/media/shows/discover",
  },
  {
    name: "Search",
    path: "/search",
  },
];
const NavBar = () => {
  return (
    <div className="navbar bg-neutral px-1 py-0">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl py-0" to="/">
          MediaBox
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 flex flex-row items-center gap-5 lg:gap-10">
          {tabItems.map(({ name, path }) => (
            <li key={name}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
