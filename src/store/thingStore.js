import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class ThingsStore {
  things = [];

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
    } catch (error) {
      console.error("ThingsStore -> fetchThings -> error", error);
    }
  };
}

const thingsStore = new ThingsStore();
thingsStore.fetchThings();

export default thingsStore;
