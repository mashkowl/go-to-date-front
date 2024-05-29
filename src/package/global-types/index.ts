export type snackbarTypes = "info" | "warning" | "success" | "error";

export interface ISnackbar {
  type?: snackbarTypes;
  message?: string;
  title?: string;
}

// export interface ISelector {
//   name: string;
//   value: string;
// }
//
// export interface ICursorPaginationResponse {
//   meta: {
//     per_page: number;
//     next_cursor: string;
//     prev_cursor: string;
//   };
// }
//
// export interface ISearchOption {
//   id: string | number;
//   option: string;
// }
