import { useSelector, useDispatch } from "react-redux";
import { getUserEmail } from "../../Redux/UserAuth/auth-selectors";
import { logOut } from "../../Redux/UserAuth/auth-operations";
import s from "./userMenu.module.css";
import { FaSignOutAlt } from "react-icons/fa";

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
        <span>
          <FaSignOutAlt style={{ marginLeft: 8, display: "flex" }} />
        </span>
      </button>
    </div>
  );
}
