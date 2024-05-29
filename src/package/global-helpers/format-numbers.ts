export function formatNumbers(value: string): number | null {
  const numberValue = Number(value.replace(" ", "").replace(" ", ""));

  if (!isNaN(numberValue)) {
    return numberValue;
  }

  return null;
}

export function formatFloatNumbers(value: string): number | null {
  const numberValue = Number(
    value.replace(" ", "").replace(" ", "").replace(",", ".")
  );

  if (!isNaN(numberValue)) {
    return numberValue;
  }

  return null;
}

export function formatNumberToString(price: number | null | undefined) {
  if (typeof price === "number") {
    return price.toLocaleString();
  }

  return "0";
}
