import { NavLink } from "react-router-dom";
import { FiUserX } from "react-icons/fi";
import s from "./authNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.container}>
      <span>
        <FiUserX className={s.avatarRed} />
      </span>
      <nav>
        <NavLink
          to="/register"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Registration
        </NavLink>
        <NavLink
          to="/login"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
}
