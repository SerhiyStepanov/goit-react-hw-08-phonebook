import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container/index";
import AppBar from "./Components/AppBar/AppBar";
import "./App.css";

export default function App() {
  return (
    <Container>
      <AppBar />
      <hr></hr>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/contacts"></Route>
        <Route path="/register"></Route>
        <Route path="/login"></Route>
      </Switch>
    </Container>
  );
}
