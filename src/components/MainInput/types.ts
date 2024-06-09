import { Ref } from "vue";

export type InputTypes =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "date";

export type InputEnterHints =
  | "enter"
  | "done"
  | "go"
  | "next"
  | "previous"
  | "search"
  | "send";

export type Error = string | Ref<string>;
