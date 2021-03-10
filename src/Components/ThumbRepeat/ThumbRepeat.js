import s from "./thumbRepeat.module.css";

export default function ThumbRepeat({ children }) {
  return <div className={s.thumb}>{children}</div>;
}
