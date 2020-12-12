import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class TreasuresStore {
  treasures = [];

  constructor() {
    makeObservable(this, {
      treasures: observable,
      fetchTreasures: action,
    });
  }
  fetchTreasures = async () => {
    try {
      const response = await instance.get("/things/treasure");
      this.treasures = response.data;
    } catch (error) {
      console.error("ThingsStore -> fetchThings -> error", error);
    }
  };
}

const treasuresStore = new TreasuresStore();
treasuresStore.fetchTreasures();

export default treasuresStore;
