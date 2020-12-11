import { observer } from "mobx-react";
import thingsStore from "../store/thingStore";
// Stayles
import { ListWrapper } from "../styles";
// Comopnents
import ThingItem from "./ThingItem";

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
