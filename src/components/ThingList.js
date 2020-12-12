import { observer } from "mobx-react";
import randomsStore from "../store/thingStore";

// Stayles
import { ListWrapper } from "../styles";
// Comopnents
import ThingItem from "./ThingItem";

const ThingList = () => {
  const randomList = randomsStore.randoms.map((random) => (
    <ThingItem random={random} key={random.id} />
  ));
  return (
    <div className="container">
      <ListWrapper className="row">{randomList}</ListWrapper>
    </div>
  );
};

export default observer(ThingList);
