import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "./Container";
import SearchBar from "./SearchBar";
import AuthButtons from "./AuthButtons";
import auth from "../auth-config.json";
import classNames from "classnames";

function AppBar() {
  const {
    user,
    isAuthenticated,
    logout,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      const getUserToken = async () => {
        try {
          const accessToken = await getAccessTokenSilently({
            audience: auth.audience,
            scope: "read:current_user",
          });
          setToken(accessToken);
        } catch (e) {
          console.log(e.message);
        }
      };
      getUserToken();
    }
  }, [isAuthenticated]);

  return (
    <Container
      className={classNames("app-bar", { logined: isAuthenticated })}
      tag="header"
    >
      {isAuthenticated && <SearchBar token={token} />}
      <AuthButtons
        isAuthenticated={isAuthenticated}
        logIn={() => loginWithRedirect()}
        logOut={() => logout({ returnTo: window.location.origin })}
        user={user}
      />
    </Container>
  );
}

export default AppBar;
