<script setup lang="ts">
import { vMaska, MaskOptions } from "maska";
import { computed, PropType } from "vue";
import { InputEnterHints, InputTypes, Error } from "./types.ts";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },

  modelValue: {
    type: [String, Number, Date],
    required: true,
  },

  label: {
    type: String,
    default: "",
  },

  placeholder: {
    type: String,
    default: null,
  },

  type: {
    type: String as PropType<InputTypes>,
    default: "text",
  },

  mask: {
    type: [String, Array, Object, null, undefined] as PropType<
      string | MaskOptions
    >,

    default: null,
  },

  enterKeyHint: {
    type: String as PropType<InputEnterHints>,
    default: "enter",
  },

  error: {
    type: String as PropType<Error>,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue", "input", "blur"]);

const formattedValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});

const inputChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("input", target.value);
};
</script>

<template>
  <div class="main-input" :class="{ 'main-input_error': error }">
    <label v-if="label" :for="id">{{ label }}</label>

    <input
      :id="id"
      v-model="formattedValue"
      v-maska
      :type="type"
      :data-maska="mask"
      :placeholder="placeholder"
      :enterkeyhint="enterKeyHint"
      @input="(event) => inputChange(event)"
      @blur="emit('blur')"
    />

    <p v-if="error" class="main-input__error-text">{{ error }}</p>
  </div>
</template>

<style scoped lang="scss">
.main-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  label {
    color: $pink-3;
    @include accent-body;
  }

  input {
    border: 2px solid $pink-3;
    border-radius: 8px;
    padding: 8px 12px;
    color: $pink-3;
    @include text;

    &::placeholder {
      color: $pink-1 !important;
    }

    &:focus {
      box-shadow: 0 0 5px $pink-4;
    }
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(100%);
    background-color: #20b9b9; //invert $pink-3 color
    padding: 4px;
    border-radius: 5px;
  }

  &_error {
    input {
      border: 2px solid $error;
      color: $error;

      &:focus {
        box-shadow: 0 0 5px $error;
      }

      &::placeholder {
        color: $error-light;
      }
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(100%);
      background-color: $pink-2; //invert $error color
      padding: 4px;
      border-radius: 5px;
    }

    label {
      color: $error;
    }
  }

  &__error-text {
    @include caption;
    color: $error;
  }
}
</style>
