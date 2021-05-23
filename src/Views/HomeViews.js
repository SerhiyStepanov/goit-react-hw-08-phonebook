import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThumbRepeat from "../Components/ThumbRepeat/ThumbRepeat";

export default function HomeViews() {
  return (
    <div>
      <ThumbRepeat>
        <h1
          style={{
            margin: "0px",
            fontSize: "42px",
            fontFamily: "Unkempt",
            textAlign: "center",
            color: "#fffadc",
          }}
        >
          Home page
        </h1>
      </ThumbRepeat>

      <FaBook
        style={{
          display: "block",
          fontSize: "64px",
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px",
          color: "var(--activ-color)",
        }}
      />

      <p style={{ color: "var(--activ-color)", textAlign: "center" }}>
        If you want to access contacts:
      </p>
      <ol>
        <li style={{ color: "var(--activ-color)" }}>
          <i style={{ color: "var(--activ-color)" }}>Register.</i>
        </li>

        <li style={{ color: "var(--activ-color)" }}>
          <i style={{ color: "var(--activ-color)" }}>Login.</i>
        </li>
      </ol>
    </div>
  );
}
