import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container/index";
import AppBar from "./Components/AppBar/AppBar";
import "./App.css";

export default function App() {
  return (
    <Container>
      <AppBar />
      <hr style={{ color: "var(--activ-color)" }}></hr>
      <Switch>
        <Route path="/" exact>
          <h1>Головна</h1>
        </Route>
        <Route path="/contacts">
          <h1>Контакти</h1>
        </Route>
        <Route path="/register">
          <h1>Реєстрація</h1>
        </Route>
        <Route path="/login">
          <h1>Логін</h1>
        </Route>
      </Switch>
    </Container>
  );
}
