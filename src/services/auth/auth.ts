import { post } from "../http/genericHttp";
import type { ILoginRequest } from "@/interfaces/ILoginRequest";
import type { IRegisterRequest } from "@/interfaces/IRegisterRequest";

export const login = async (user: ILoginRequest) => {
  return await post<ILoginRequest, ILoginRequest>(user, "auth/login");
};

export const register = async (user: IRegisterRequest) => {
  return await post<IRegisterRequest, IRegisterRequest>(user, "auth/register");
};
