<script setup lang="ts">
import { computed, onMounted } from "vue";

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

  error: {
    type: String,
    default: null,
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

function getResizeTextarea(event: Event) {
  const target = event.target as HTMLTextAreaElement;

  target.style.height = "auto";
  target.style.height = `${target.scrollHeight + 4}px`; //4px это высота двух бордеров, чтобы не прыгала высота компонента
}

onMounted(() => {
  const textarea = document.getElementById(props.id);

  if (props.modelValue !== "") {
    textarea!.style.overflow = "auto";
  }
});
</script>

<template>
  <div class="main-textarea" :class="{ 'main-textarea_error': error }">
    <label v-if="label" :for="id">{{ label }}</label>
    <textarea
      :id="id"
      v-model="formattedValue"
      class="main-textarea"
      :placeholder="placeholder"
      @input="getResizeTextarea($event)"
    />
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped lang="scss">
.main-textarea {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  label {
    color: $pink-3;
    @include accent-body;
  }

  textarea {
    border: 2px solid $pink-3;
    border-radius: 8px;
    padding: 8px 12px;
    color: $pink-3;
    @include text;
    max-width: 450px;
    resize: vertical;

    &::placeholder {
      color: $pink-1;
    }

    &:focus {
      box-shadow: 0 0 5px $pink-4;
    }
  }

  &_error {
    textarea {
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
