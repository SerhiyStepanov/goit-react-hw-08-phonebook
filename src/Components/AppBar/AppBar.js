import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu";
import { userIsLoggedIn } from "../../Redux/UserAuth/auth-selectors";
import s from "./appBar.module.css";

export default function AppBar() {
  const IsLoggedIn = useSelector(userIsLoggedIn);
  return (
    <div className={s.container}>
      <Navigation />

      {IsLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
