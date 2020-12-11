import { observer } from "mobx-react";
import thingsStore from "../store/thingStore";

// Stayles
import { ListWrapper } from "../styles";
// Comopnents
import ThingItem from "./ThingItem";

const ThingList = () => {
  const thingList = thingsStore.things
    .filter((thing) => thing.isTreasure === false)
    .map((thing) => <ThingItem thing={thing} key={thing.id} />);
  return (
    <div className="container">
      <ListWrapper className="row">{thingList}</ListWrapper>
    </div>
  );
};

export default observer(ThingList);
