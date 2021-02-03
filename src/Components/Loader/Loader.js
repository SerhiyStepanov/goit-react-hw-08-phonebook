import Loader from "react-loader-spinner";

export default function Loaded() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <Loader
        type="ThreeDots"
        color={"var(--primary-color"}
        height={80}
        width={80}
      />
    </div>
  );
}
