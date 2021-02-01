import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
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
  );
}
