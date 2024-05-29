import { defineStore } from "pinia";
import { ISnackbar } from "../package/global-types";

export const useMainStore = defineStore("main-store", {
  state: () => ({
    snackBar: null as null | ISnackbar,
  }),

  actions: {
    showSnackbar({ message = "", type = "error", title = "Упс(" }: ISnackbar) {
      this.snackBar = {
        message,
        title,
        type,
      };
    },

    hideSnackbar() {
      this.snackBar = null;
    },
  },
});
