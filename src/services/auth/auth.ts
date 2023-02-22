import { get, post } from "../http/genericHttp";
import type { ILoginRequest } from "@/interfaces/ILoginRequest";

export const login = async (user: ILoginRequest) => {
  return await post<ILoginRequest, ILoginRequest>(user, "Holaa");
};
