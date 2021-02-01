import React from "react";
import shortid from "shortid";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../Redux/Contacts/contacts-selectors";
import actions from "../../Redux/actions";
import s from "./filter.module.css";

export default function Filter() {
  const value = useSelector((state) => getFilter(state));
  const dispatch = useDispatch();

  const onChange = (event) =>
    dispatch(actions.filterContacts(event.target.value));
  const inputFilterId = shortid.generate();
  return (
    <div className={s.container}>
      <label htmlFor={inputFilterId} className={s.label}>
        Find contacts of name
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={inputFilterId}
        className={s.input}
        placeholder="Enter name please"
      />
    </div>
  );
}
