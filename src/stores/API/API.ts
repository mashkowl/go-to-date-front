import API from "../../package/config/axios.ts";

export const test = (payload: any) => {
  return API.get("test", payload);
};
