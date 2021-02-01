import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div className={s.container}>
      <Navigation />

      <AuthNav />
    </div>
  );
}
