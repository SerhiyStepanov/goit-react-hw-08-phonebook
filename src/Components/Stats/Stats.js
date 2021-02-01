import { useSelector } from "react-redux";
import { getAllContactsLength } from "../../Redux/Contacts/contacts-selectors";
import s from "./stats.module.css";

export default function Stats() {
  const total = useSelector((state) => getAllContactsLength(state));
  return (
    <div>
      <p className={s.text}>
        Total contact : <span className={s.span}>{total}</span>
      </p>
    </div>
  );
}
