import { observer } from "mobx-react";

const ThingItem = ({ random }) => {
  return <p>{random.name}</p>;
};
export default observer(ThingItem);
