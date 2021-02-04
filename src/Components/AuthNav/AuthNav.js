import { NavLink } from "react-router-dom";
import { FiUserX } from "react-icons/fi";
import s from "./authNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.container}>
      <span>
        <FiUserX tyle={{ display: "flex" }} />
      </span>
      <nav className={s.container}>
        <NavLink
          to="/register"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Реєстрація
        </NavLink>
        <NavLink
          to="/login"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Логін
        </NavLink>
      </nav>
    </div>
  );
}
