<script setup lang="ts">
import { reactive } from "vue";
import MainTextarea from "../../../components/MainTextarea.vue";
import MainInput from "../../../components/MainInput/MainInput.vue";

const payload = reactive({
  place: "",
  description: "",
  additionally: "",
  date: "",
});
</script>

<template>
  <form>
    <MainInput
      id="date"
      v-model="payload.date"
      label="Дата:"
      placeholder="дд.мм.гг"
      mask="##.##.##"
    />

    <MainInput
      id="place"
      v-model="payload.place"
      label="Место встречи:"
      placeholder="Марсово поле"
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
}
</style>
