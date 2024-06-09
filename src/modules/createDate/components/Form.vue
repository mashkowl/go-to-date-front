<script setup lang="ts">
import { useValidateForm } from "../hooks";
import { useDateStore } from "../store/date.store.ts";
import MainTextarea from "../../../components/MainTextarea.vue";
import MainInput from "../../../components/MainInput/MainInput.vue";

const dateStore = useDateStore();

const { payload, placeError, dateError, runValidate, isError } =
  useValidateForm();

const sendFormData = async () => {
  runValidate();

  if (isError.value) {
    return;
  }

  try {
    dateStore.createDate(payload).then(() => {
      console.log(1);
    });
    //await send request
  } catch {
    //error processing
  } finally {
    //very cool solution
  }
};
</script>

<template>
  <form @submit.prevent="sendFormData">
    <MainInput
      id="date"
      v-model="payload.date"
      type="date"
      label="Дата:"
      placeholder="дд.мм.гг"
      :error="dateError"
    />

    <MainInput
      id="place"
      v-model="payload.place"
      label="Место встречи:"
      placeholder="Марсово поле"
      :error="placeError"
    />

    <MainTextarea
      id="description"
      v-model="payload.description"
      label="Краткое описание свидания:"
      placeholder="Будем пить газяву и кушать чипсеки"
    />

    <MainTextarea
      id="additionally"
      v-model="payload.additionally"
      label="Дополнительная информация:"
      placeholder="Стоит взять средство от комаров"
    />

    <button type="submit">Отправить</button>
  </form>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  max-width: 450px;
  height: 100%;
  align-items: center;

  button {
    @include text;
    color: $pink-3;
    background: $white-ultra;
    padding: 12px 24px;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 15px $pink-3;
      color: $white-ultra;
      background: $pink-3;
    }
  }
}
</style>
