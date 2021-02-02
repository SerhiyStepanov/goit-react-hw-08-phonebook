import { useSelector, useDispatch } from "react-redux";
import { getUserEmail } from "../../Redux/UserAuth/auth-selectors";
import { logOut } from "../../Redux/UserAuth/auth-operations";
import s from "./userMenu.module.css";

export default function UserMenu() {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();
  return (
    <div>
      <span className={s.span}>{userEmail}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Вийти
      </button>
    </div>
  );
}
