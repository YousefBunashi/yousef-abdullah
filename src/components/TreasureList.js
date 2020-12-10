// import treasures from "../treasures.js";

import { observer } from "mobx-react";
// Stayles
import { ListWrapper } from "../styles";
// Comopnents
import ThingItem from "./ThingItem";

import thingsStore from "./store/ThingStore";

const TreasureList = () => {
  const treasureList = thingsStore.things
    .filter((thing) => thing.isTreasure === true)
    .map((thing) => <ThingItem thing={thing} key={thing.id} />);
  return (
    <div className="container">
      <ListWrapper className="row">{treasureList}</ListWrapper>
    </div>
  );
};

export default observer(TreasureList);
