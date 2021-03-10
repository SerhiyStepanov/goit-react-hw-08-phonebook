import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as operations from "../../Redux/Contacts/contacts-operations";
import { getAllContacts } from "../../Redux/Contacts/contacts-selectors";
import { IoIosPhonePortrait } from "react-icons/io";
import shortid from "shortid";
import s from "./form.module.css";
import { FaFeatherAlt } from "react-icons/fa";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const items = useSelector((state) => getAllContacts(state));
  const dispatch = useDispatch();

  const inputNameId = shortid.generate();
  const inputNumberId = shortid.generate();

  const onInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const repeatName = items.some((item) => item.name === name);
    if (repeatName) {
      alert(`${name} is alreadi in contacts`);
      return;
    }

    if (name === "" || number === "") {
      alert("Enter name and number please ! ");
      return;
    }
    dispatch(operations.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form className={s.form} onSubmit={onFormSubmit}>
        <div className={s.container}>
          <label htmlFor={inputNameId} className={s.label}>
            Name <span className={s.spanName}>name</span>
          </label>
          <input
            type="text"
            name="name"
            id={inputNameId}
            value={name}
            onChange={onInputChange}
            className={s.input}
            placeholder="Enter name"
            autoComplete="Off"
          />
        </div>

        <div className={s.container}>
          <label htmlFor={inputNumberId} className={s.label}>
            Number
            <span className={s.ioIosPhonePortrait}>
              <IoIosPhonePortrait />
            </span>
          </label>
          <input
            type="tel"
            name="number"
            id={inputNumberId}
            value={number}
            onChange={onInputChange}
            className={s.input}
            placeholder="Enter XXX-XXX-XXXX"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            // pattern="\d*"
            minLength="10"
          />
        </div>

        <button type="submit" className={s.button}>
          Додати
          <span>
            <FaFeatherAlt style={{ marginLeft: 8, display: "flex" }} />
          </span>
        </button>
      </form>
    </>
  );
}
