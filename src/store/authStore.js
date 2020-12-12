import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = decode(token);
      if (user.expires >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };
  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
