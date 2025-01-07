import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <ul className="sidebar-area">
      <li>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          🏠 Home
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className={location.pathname === "/login" ? "active" : ""}
        >
          🔑 Login
        </Link>
      </li>
      <li>
        <Link
          to="/side"
          className={location.pathname === "/side" ? "active" : ""}
        >
          📚 Side
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
