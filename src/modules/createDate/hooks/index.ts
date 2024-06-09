import { computed, reactive } from "vue";
import { helpers, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { IDateData } from "../types";

export function useValidateForm() {
  const payload: IDateData = reactive({
    place: "",
    description: "",
    additionally: "",
    date: new Date(),
  });

  const checkDate = (value: string) => {
    return new Date(value) > new Date();
  };

  const rules = computed(() => ({
    place: {
      required: helpers.withMessage("Введи место", required),
    },

    date: {
      required: helpers.withMessage("Введи дату", required),
      date: helpers.withMessage("Некорректная дата", checkDate),
    },
  }));

  const v$ = useVuelidate(rules, payload);

  const placeError = computed(() => v$.value.place?.$errors[0]?.$message ?? "");
  const dateError = computed(() => v$.value.date?.$errors[0]?.$message ?? "");

  const runValidate = () => {
    v$.value.$validate();
  };

  const isError = computed(() => v$.value.$error);

  return {
    payload,
    placeError,
    dateError,
    runValidate,
    isError,
  };
}
