import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as operations from "../../Redux/Contacts/contacts-operations";
import { getVisibleContacts } from "../../Redux/Contacts/contacts-selectors";
import s from "./contactList.module.css";

export default function ContactList() {
  const items = useSelector((state) => getVisibleContacts(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = (contactId) =>
    dispatch(operations.deleteContact(contactId));

  return (
    <ul className={s.contactList}>
      {items.length > 0 &&
        items.map(({ name, number, id }) => (
          <li key={id} className={s.list}>
            <p className={s.text}>
              {name} : {number}
            </p>
            <button
              className={s.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
}
