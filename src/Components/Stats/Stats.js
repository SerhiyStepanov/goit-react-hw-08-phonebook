import { useSelector } from "react-redux";
import { getAllContactsLength } from "../../Redux/Contacts/contacts-selectors";
import s from "./stats.module.css";

export default function Stats() {
  const total = useSelector((state) => getAllContactsLength(state));
  return (
    <div className={s.container}>
      <p className={s.text}>
        Total contacts: <span className={s.span}>{total}.</span>
      </p>
    </div>
  );
}
