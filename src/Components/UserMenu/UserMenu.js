import { useSelector, useDispatch } from "react-redux";
import { getUserEmail } from "../../Redux/UserAuth/auth-selectors";
import { logOut } from "../../Redux/UserAuth/auth-operations";
import { FiUserCheck } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import s from "./userMenu.module.css";

export default function UserMenu() {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <span>
        <FiUserCheck className={s.avatar} />
      </span>
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
