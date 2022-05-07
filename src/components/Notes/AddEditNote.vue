<template>
  <div
      class="card p-4 mb-5"
      :class="`has-background-${bgColor}-dark`"
  >
    <label
        class="label has-text-white"
        v-if="label"
    >{{ label }}</label>
  <div class="field">
      <div class="control">
        <textarea
            v-model="modelValue"
            class="textarea"
            :placeholder="placeholder"
            ref="textAreaRef"
            @input="$emit('update:modelValue', $event.target.value)"
            v-autofocus
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {vAutofocus} from "@/directives/vAutofocus";

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: 'info'
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String
  }
});

defineEmits(['update:modelValue']);

const textAreaRef = ref(null);

const focusTextArea = () => {
  textAreaRef.value.focus();
}

defineExpose({ focusTextArea });
</script>