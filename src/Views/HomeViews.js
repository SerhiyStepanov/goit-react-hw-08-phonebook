import { FaBook } from "react-icons/fa";
import ThumbRepeat from "../Components/ThumbRepeat/ThumbRepeat";

export default function HomeViews() {
  return (
    <div>
      <ThumbRepeat>
        <h1
          style={{
            margin: "0px",
            fontFamily: "Unkempt",
            textAlign: "center",
            color: "#fffadc",
          }}
        >
          Головна сторінка
        </h1>
      </ThumbRepeat>

      <FaBook
        style={{
          display: "block",
          fontSize: "50px",
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px",
          color: "var(--activ-color)",
        }}
      />

      <p style={{ color: "var(--activ-color)" }}>
        Якщо ви бажаєте отримати доступ до контактів:
      </p>
      <ul>
        <li style={{ color: "var(--activ-color)" }}>
          <p style={{ color: "var(--activ-color)" }}>Зареєструйтесь.</p>
        </li>
        <li style={{ color: "var(--activ-color)" }}>
          <p style={{ color: "var(--activ-color)" }}>Введіть логін.</p>
        </li>
      </ul>
    </div>
  );
}
