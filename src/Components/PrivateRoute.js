import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getUserIsLoggedIn } from "../Redux/UserAuth/auth-selectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(getUserIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
