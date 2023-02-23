import { reactive } from "vue";
import { defineStore } from "pinia";

interface IAuth {
  token: string;
}

const initAuth: IAuth = { token: "" };

export const useCounterStore = defineStore("auth", () => {
  const profile = reactive(initAuth);

  const setProfile = {
    username: "",
  };

  return { profile };
});
