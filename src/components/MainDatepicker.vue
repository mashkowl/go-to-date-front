<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { computed } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },

  modelValue: {
    type: [String, Number],
    required: true,
  },

  label: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const formattedValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>

<template>
  <div class="main-datepicker">
    <label v-if="label" :for="id">{{ label }}</label>
    <VueDatePicker
      v-model="formattedValue"
      format="dd.MM.yyyy HH:mm"
      locale="ru-ru"
      position="left"
      arrow-navigation
      input-class-name="main-datepicker-input"
    />
  </div>
</template>

<style scoped lang="scss">
.main-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

label {
  color: $pink-3;
  @include accent-body;
}

.dp__main {
  max-width: 450px !important;
}

// General
$dp__font_family: "Minako", sans-serif !default; // Размер шрифта для меню
$dp__border_radius: 8px; // Радиус границы везде
$dp__cell_border_radius: 50%; // Определенный радиус границы для ячейки календаря

// Transitions
$dp__transition_length: 22px !default; // Passed to the translateX in animation
$dp__transition_duration: 0.1s !default; // Transition duration

// Font sizes
$dp__font_size: 16px !default; // общий размер шрифта
$dp__preview_font_size: 0.8rem !default; // размер шрифта предварительного просмотра даты в строке действия
$dp__time_font_size: 14px !default; // размер шрифта в окне выбора времени

.dp__theme_light {
  --dp-background-color: #fff;
  --dp-text-color: #df4646;
  --dp-hover-color: #a70808;
  --dp-hover-text-color: #ffffff;
  --dp-hover-icon-color: #ffffff;
  --dp-primary-text-color: #ffffff;
  --dp-secondary-color: #fff;
  --dp-border-color: #df4646;
  --dp-menu-border-color: #df4646;
  --dp-border-color-hover: #a70808;
  --dp-disabled-color: #df4646;
  --dp-scroll-bar-background: rgba(255, 178, 178, 0.71);
  --dp-scroll-bar-color: rgba(255, 178, 178, 0.71);
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #df4646;
  --dp-danger-color: #a70808;
  --dp-highlight-color: rgba(25, 118, 210, 0.1);
  --dp-primary-disabled-color: rgba(213, 213, 213, 0.5);
  --dp-primary-color: #df4646;
}

.dp__input {
  border: 2px solid $pink-3 !important;
}
</style>
