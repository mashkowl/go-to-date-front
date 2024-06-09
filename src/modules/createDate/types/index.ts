import { AxiosRequestConfig } from "axios";

export interface IOtpListResponse {
  status: number;
  text: string;
}

export interface IDateData extends AxiosRequestConfig {
  place: string;
  description: string | null;
  additionally: string | null;
  date: Date;
}
