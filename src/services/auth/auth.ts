import { post } from "../http/genericHttp";
import type { ILoginRequest } from "@/interfaces/ILoginRequest";
import type { IRegisterRequest } from "@/interfaces/IRegisterRequest";
import type { IAuth } from "@/interfaces/IAuth";

export const login = async (user: ILoginRequest) => {
  return await post<ILoginRequest, IAuth>(user, "auth/login");
};

export const register = async (user: IRegisterRequest) => {
  return await post<IRegisterRequest, IAuth>(user, "auth/register");
};
