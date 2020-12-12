import ThingList from "./components/ThingList";
import TreasureList from "./components/TreasureList";
import { Route, Switch } from "react-router";
import { FiLogOut } from "react-icons/fi";
import { observer } from "mobx-react";
import { AuthButtonStyled, Logo, StyledLink } from "./styles";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import authStore from "./store/authStore";
function App() {
  return (
    <div>
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
          <Logo to="signup">SignUp</Logo>
        </>
      )}
      {authStore.user && <StyledLink to="/treasure">Treasure</StyledLink>}
      <StyledLink to="/random">Random List</StyledLink>
      <Switch>
        <Route path="/treasure">
          <TreasureList />
        </Route>
        <Route path="/random">
          <ThingList />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Signup />
      </Switch>
    </div>
  );
}

export default observer(App);
