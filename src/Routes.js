import { Route, Switch } from "react-router";

import { observer } from "mobx-react";
import ThingList from "./components/ThingList";
import TreasureList from "./components/TreasureList";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
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
  );
};
export default observer(Routes);
