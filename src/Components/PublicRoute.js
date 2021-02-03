import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserIsLoggedIn } from "../Redux/UserAuth/auth-selectors";

export default function PublicRoute({
  children,
  redirectedTo = "/",
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const redirected = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {redirected ? <Redirect to={redirectedTo} /> : children}
    </Route>
  );
}
