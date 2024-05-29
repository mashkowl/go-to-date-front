import { useMainStore } from "../../stores/main.store.ts";
import { AxiosError } from "axios";

export function errorHandler(
  error: Error | unknown | AxiosError,
  isShowNotice = true,
  noticeTitle = "Упс("
) {
  const mainStore = useMainStore();

  let errorMessage: string | undefined;

  if (error instanceof AxiosError) {
    errorMessage = error.response?.data?.message;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = String(error);
  }

  if (!errorMessage) return;

  if (isShowNotice) {
    mainStore.showSnackbar({
      title: noticeTitle,
      message: errorMessage,
    });
  } else {
    console.error(errorMessage);
  }
}

export function neverHandler(x: never): never {
  throw new Error(`Не ожидала получить здесь ${x} 0_0`);
}
