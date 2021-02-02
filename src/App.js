import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container/index";
import AppBar from "./Components/AppBar/AppBar";
import ContactViews from "./Views/ContactViews";
import RegisterViews from "./Views/RegisterViews";
import LoginViews from "./Views/LoginViews";
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
          <ContactViews />
        </Route>
        <Route path="/register">
          <RegisterViews />
        </Route>
        <Route path="/login">
          <LoginViews />
        </Route>
      </Switch>
    </Container>
  );
}
