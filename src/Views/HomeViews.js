import { FaBook } from "react-icons/fa";

export default function HomeViews() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Головна сторінка</h1>

      <FaBook
        style={{
          display: "block",
          fontSize: "50px",
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px",
          color: "var(--primary-color)",
        }}
      />

      <p>Якщо ви бажаєте отримати доступ до контактів:</p>
      <ol>
        <li>Зареєструйтесь.</li>
        <li>Введіть логін.</li>
      </ol>
    </div>
  );
}
