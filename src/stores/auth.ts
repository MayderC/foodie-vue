import { reactive } from "vue";
import { defineStore } from "pinia";
import type { IAuth } from "@/interfaces/IAuth";
import { getAuth, saveAuth } from "../helpers/localStorage";

export const useAuthStore = defineStore("auth", () => {
  const auth = getAuth();
  const initAuth: IAuth = auth
    ? auth
    : {
        accessToken: "",
        refreshToken: "",
        isAuthenticated: false,
      };
  const profileAuth = reactive(initAuth);

  const setProfileAuth = (profile: IAuth) => {
    const { accessToken, isAuthenticated, refreshToken } = profile;
    profileAuth.accessToken = accessToken;
    profileAuth.isAuthenticated = isAuthenticated;
    profileAuth.refreshToken = refreshToken;
    saveAuth(profile);
  };

  const clearProfileAuth = () => {
    profileAuth.accessToken = "";
    profileAuth.isAuthenticated = false;
    profileAuth.refreshToken = "";
  };

  return { profileAuth, setProfileAuth, clearProfileAuth };
});
