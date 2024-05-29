import { format } from "date-fns";

export function isoToClintFormat(data: Date): string {
  return format(data, "dd.MM.yyyy");
}

export function isoToClintTimeFormat(data: string): string {
  return format(data, "HH:mm");
}

export function isoToClintDayMonthFormat(data: string): string {
  return format(data, "dd MMMM");
}

export function isoToClintFullDateFormat(data: string): string {
  return format(data, "dd MMMM yyyy");
}
