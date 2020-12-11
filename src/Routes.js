import { Route, Switch } from "react-router";

import { observer } from "mobx-react";
import ThingList from "./components/ThingList";
import TreasureList from "./components/TreasureList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/random">
        <ThingList />
      </Route>

      <Route path="/treasure">
        <TreasureList />
      </Route>
      <Route path="/"></Route>
    </Switch>
  );
};
export default observer(Routes);
