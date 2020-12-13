import ThingList from "./components/ThingList";
import TreasureList from "./components/TreasureList";
import { Route, Switch } from "react-router";
import { BiLogOutCircle } from "react-icons/fi";
import { observer } from "mobx-react";
import { AuthButtonStyled, GlobalStyle, Logo, StyledLink } from "./styles";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import authStore from "./store/authStore";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "papayawhip", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      {authStore.user ? (
        <>
          <p style={{ float: "right", margin: "0 3% 3% 3%" }}>
            Hello, {authStore.user.username}
          </p>

          <AuthButtonStyled onClick={authStore.signout}>
            LogOut
          </AuthButtonStyled>
        </>
      ) : (
        <>
          <Logo to="/signin">Sign in</Logo>
          <Logo to="/signup">SignUp</Logo>
        </>
      )}
      {authStore.user && <StyledLink to="/treasure">Treasure</StyledLink>}
      <StyledLink to="/random">Random List</StyledLink>
      <Routes />
    </ThemeProvider>
  );
}

export default observer(App);
