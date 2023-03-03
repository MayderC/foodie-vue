import { httpInstance } from "./httpInstance";

export const get = async <K>(url: string): Promise<K> => {
  return (await httpInstance.get<K>(url)).data;
};

export const post = async <I, K>(data: I, url: string): Promise<K> => {
  return (await httpInstance.post<K>(url, data)).data;
};
