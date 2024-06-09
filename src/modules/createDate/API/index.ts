import API from "../../../package/config/axios.ts";
import { IDateData, IOtpListResponse } from "../types";

export const apiPostDate = (payload: IDateData) => {
  console.log("here");
  return API.post<IOtpListResponse>("api/date", payload);
};
