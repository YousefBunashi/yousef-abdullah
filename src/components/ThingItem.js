import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const ThingItem = ({ thing }) => {
  return <p>{thing.name}</p>;
};
export default observer(ThingItem);
