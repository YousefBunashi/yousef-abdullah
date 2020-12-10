import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class ThingsStore {
  things = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      things: observable,

      fetchThings: action,
    });
  }
  fetchThings = async () => {
    try {
      const response = await instance.get("/things");
      this.things = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ThingsStore -> fetchThings -> error", error);
    }
  };
  getThingById = (thingId) => this.things.find((thing) => thing.id === thingId);
}

const thingsStore = new ThingsStore();
thingsStore.fetchThings();

export default thingsStore;
