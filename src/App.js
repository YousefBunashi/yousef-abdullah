import logo from "./logo.svg";
import "./App.css";
import ThingList from "./components/ThingList";
import TreasureList from "./components/TreasureList";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div>
      <Switch>
        <Route>
          <ThingList />
        </Route>
        <Route>
          <TreasureList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
