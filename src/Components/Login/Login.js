import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/UserAuth/auth-operations";
import shortid from "shortid";
import s from "./login.module.css";
import { FaSignInAlt } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
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

    if (email === "" || password === "") {
      alert("Enter email and password please ! ");
      return;
    }

    dispatch(login({ email, password }));

    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const loginEmailId = shortid.generate();
  const loginPasswordId = shortid.generate();

  return (
    <div className={s.thumb}>
      <b>
        Enter please email and password
        <br />
      </b>
      <form className={s.form} onSubmit={onFormSubmit}>
        <div className={s.container}>
          <label htmlFor={loginEmailId} className={s.label}>
            Email<span className={s.spanName}>Електронна адреса</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            id={loginEmailId}
            onChange={handleChange}
            className={s.input}
            placeholder="Enter email"
            autoComplete="off"
          />
        </div>

        <div className={s.container}>
          <label htmlFor={loginPasswordId} className={s.label}>
            Password<span className={s.spanName}>Пароль</span>
          </label>
          <input
            type="password"
            name="password"
            value={password}
            id={loginPasswordId}
            onChange={handleChange}
            className={s.input}
            placeholder="Enter password"
            autoComplete="off"
          />
        </div>
        <button type="submit" className={s.button}>
          <span className={s.btnText}>Login</span>
          <span className={s.icon}>
            <FaSignInAlt />
          </span>
        </button>
      </form>
    </div>
  );
}
