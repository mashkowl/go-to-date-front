import { defineStore } from "pinia";
import { errorHandler } from "../../../package/global-helpers/error-handler.ts";
import * as dateAPI from "../API/index.ts";
import { IDateData } from "../types";

export const useDateStore = defineStore("date-store", {
  actions: {
    async createDate(payload: IDateData) {
      try {
        const resp = await dateAPI.apiPostDate(payload);
        console.log("response: ", resp);
      } catch (e: Error | unknown) {
        errorHandler(e);
        throw e;
      }
    },
  },
});
