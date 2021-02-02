import { useState } from "react";
import s from "./registration.module.css";
import shortid from "shortid";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      alert("Enter name and email please ! ");
      return;
    }
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const registrNameId = shortid.generate();
  const registrPostId = shortid.generate();
  const registrPasswordId = shortid.generate();

  return (
    <div>
      <b>Зареєструйтесь будь ласка</b>
      <form onSubmit={onFormSubmit}>
        <div className={s.container}>
          <label htmlFor={registrNameId} className={s.label}>
            Name
            <span className={s.spanName}>І'мя</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            id={registrNameId}
            className={s.input}
            onChange={handleChange}
            placeholder="Enter name"
            autoComplete="Off"
          />
        </div>

        <div className={s.container}>
          <label htmlFor={registrPostId} className={s.label}>
            Email
            <span className={s.spanName}>Почта</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            id={registrPostId}
            className={s.input}
            onChange={handleChange}
            placeholder="Enter email"
            autoComplete="Off"
          />
        </div>

        <div className={s.container}>
          <label htmlFor={registrPasswordId} className={s.label}>
            Password
            <span className={s.spanName}>Пароль</span>
          </label>
          <input
            type="password"
            name="password"
            value={password}
            id={registrPasswordId}
            className={s.input}
            onChange={handleChange}
            placeholder="Enter password"
            autoComplete="Off"
          />
        </div>
        <button type="submit" className={s.button}>
          Зареєструватись
        </button>
      </form>
    </div>
  );
}
