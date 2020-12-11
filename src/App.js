import ThingList from "./components/ThingList";
import TreasureList from "./components/TreasureList";
import { Route, Switch } from "react-router";

import { observer } from "mobx-react";
import Routes from "./Routes";
function App() {
  return (
    <div>
      <h1>test</h1>
      <Routes />
    </div>
  );
}

export default observer(App);
