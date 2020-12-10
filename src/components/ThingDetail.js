import React from "react";
import { useParams, Redirect } from "react-router";
import { DetailWrapper } from "../styles";
import thingStore from "../stores/thingStore";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const ThingDetail = () => {
  const { thingSlug } = useParams();
  const thing = thingStore.things.find((_thing) => _thing.slug === thingSlug);
  if (!thing) return <Redirect to="/things" />;

  return (
    <>
      <Link to="/things"></Link>
      <DetailWrapper>
        <h1>{thing.name}</h1>
        {/* <img src={thing.image} alt={thing.name} /> */}
      </DetailWrapper>
    </>
  );
};
export default observer(ThingDetail);
