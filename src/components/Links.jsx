import "../styles/links.scss";
import { Link, Outlet } from "react-router";
const Links = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/all">All </Link>
        </li>
        <li>
          <Link to="/completed">Completed </Link>
        </li>
        <li>
          <Link to="/pending">Pending </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default Links;
