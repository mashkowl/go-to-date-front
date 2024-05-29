import declensionWord from "../../package/global-helpers/declension-word";

export function monthNumberToClientFormat(months: number): string {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${months} ${declensionWord(months, "месяцев", "месяц", "месяца")}`;
  } else if (remainingMonths === 0) {
    return `${years} ${declensionWord(years, "лет", "год", "года")}`;
  } else {
    return `${years} ${declensionWord(years, "лет", "год", "года")} и ${remainingMonths} ${declensionWord(months, "месяцев", "месяц", "месяца")}`;
  }
}
