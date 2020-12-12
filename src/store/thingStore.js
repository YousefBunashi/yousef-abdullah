import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class RandomsStore {
  randoms = [];

  constructor() {
    makeObservable(this, {
      randoms: observable,
      fetchRandoms: action,
    });
  }
  fetchRandoms = async () => {
    try {
      const response = await instance.get("/things/random");
      this.randoms = response.data;
    } catch (error) {
      console.error("RandomsStore -> fetchRandoms -> error", error);
    }
  };
}

const randomsStore = new RandomsStore();
randomsStore.fetchRandoms();

export default randomsStore;
