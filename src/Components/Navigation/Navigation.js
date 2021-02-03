import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserIsLoggedIn } from "../../Redux/UserAuth/auth-selectors";
import s from "./navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <nav className={s.container}>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Головна
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Контакти
        </NavLink>
      )}
    </nav>
  );
}
