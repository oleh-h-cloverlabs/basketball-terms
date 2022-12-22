import Container from "./Container";
import Button from "./Button";
import Description from "./Description";

function AuthButtons({ isAuthenticated, logIn, logOut, user }) {
  return (
    <Container className="auth-btn-container">
      {!isAuthenticated ? (
        <Button className="auth-btn log-in" onClick={logIn}>
          Log In
        </Button>
      ) : (
        <>
          <Description className="logined-greeting">
            Welcome, <br />
            <b>{user.name}</b>
          </Description>
          <Button className="auth-btn log-out" onClick={logOut}>
            Log Out
          </Button>
        </>
      )}
    </Container>
  );
}

export default AuthButtons;
