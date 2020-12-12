import { observer } from "mobx-react";
import { Redirect } from "react-router";
import authStore from "../store/authStore";
import treasuresStore from "../store/treasureStore";
// Stayles
import { ListWrapper } from "../styles";
// Comopnents
import ThingItem from "./ThingItem";

const TreasureList = () => {
  const treasureList = treasuresStore.treasures.map((treasure) => (
    <ThingItem random={treasure} key={treasure.id} />
  ));
  if (!authStore.user) return <Redirect to="/" />;
  return (
    <div className="container">
      <ListWrapper className="row">{treasureList}</ListWrapper>
    </div>
  );
};

export default observer(TreasureList);
