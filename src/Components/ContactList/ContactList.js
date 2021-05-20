import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as operations from "../../Redux/Contacts/contacts-operations";
import { getVisibleContacts } from "../../Redux/Contacts/contacts-selectors";
import s from "./contactList.module.css";
import { FaTrash } from "react-icons/fa";

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
        items
          .sort((a, b) => a.name > b.name)
          .map(({ name, number, id }) => (
            <li key={id} className={s.list}>
              <p className={s.text}>{name}:</p>

              <span className={s.dotten}></span>

              <p className={s.text}>{number}</p>

              <button
                className={s.button}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                <span className={s.btnText}>Delete</span>

                <span className={s.icon}>
                  <FaTrash />
                </span>
              </button>
            </li>
          ))}
    </ul>
  );
}
