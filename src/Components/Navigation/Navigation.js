import { NavLink } from "react-router-dom";
import s from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className={s.container}>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Головна
      </NavLink>

      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Контакти
      </NavLink>
    </nav>
  );
}
