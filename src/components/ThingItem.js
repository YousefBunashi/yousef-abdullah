import { observer } from "mobx-react";
import { ListWrapper } from "../styles";

const ThingItem = ({ random }) => {
  return (
    <div>
      <ListWrapper>{random.name}</ListWrapper>;
    </div>
  );
};
export default observer(ThingItem);
