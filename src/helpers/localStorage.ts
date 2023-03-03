import { LocalStoreItems } from "@/common/constants";
import type { IAuth } from "@/interfaces/IAuth";

export const saveAuth = (auth: IAuth) =>
  localStorage.setItem(LocalStoreItems.auth, JSON.stringify(auth));

export const getAuth = (): IAuth | null => {
  const auth = localStorage.getItem(LocalStoreItems.auth);
  return auth ? JSON.parse(auth) : null;
};

export const deleteAuth = () => localStorage.removeItem(LocalStoreItems.auth);
