<script setup lang="ts">
import { vMaska, MaskOptions } from "maska";
import { computed, PropType } from "vue";
import { InputEnterHints, InputTypes } from "./types.ts";

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
    type: String,
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

    <p v-if="error">{{ error }}</p>
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
      color: $pink-1;
    }

    &:focus {
      box-shadow: 0 0 5px $pink-4;
    }
  }

  &_error {
    input {
      border: 2px solid $error;

      &:focus {
        box-shadow: 0 0 5px $error;
      }

      &::placeholder {
        color: $error-light;
      }
    }

    label {
      color: $error;
    }
  }
}
</style>
