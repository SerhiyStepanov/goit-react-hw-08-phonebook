import { Switch } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./Redux/UserAuth/auth-operations";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import { getIsFetchingCurrentUser } from "./Redux/UserAuth/auth-selectors";
import Container from "./Components/Container/index";
import AppBar from "./Components/AppBar/AppBar";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loaded from "./Components/Loader";
import "./App.module.css";

const HomeViews = lazy(() => import("./Views/HomeViews"));
const ContactViews = lazy(() => import("./Views/ContactViews"));
const RegisterViews = lazy(() => import("./Views/RegisterViews"));
const LoginViews = lazy(() => import("./Views/LoginViews"));

export default function App() {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <hr></hr>
        <Switch>
          <Suspense fallback={<Loaded />}>
            <PublicRoute path="/" exact>
              <HomeViews />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactViews />
            </PrivateRoute>
            <PublicRoute path="/register" restricted>
              <RegisterViews />
            </PublicRoute>
            <PublicRoute path="/login" redirectedTo="/contacts" restricted>
              <LoginViews />
            </PublicRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}
