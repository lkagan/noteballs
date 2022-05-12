<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div
        class="modal-card"
        ref="modalCardRef"
    >
    <header class="modal-card-head">
        <p class="modal-card-title">Delete Note</p>
        <button
            class="delete"
            aria-label="close"
            @click="closeModal"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
            class="button"
            @click="closeModal"
        >Cancel
        </button>
        <button
            class="button is-danger"
            @click="storeNotes.delete(noteId)"
        >Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>

// Imports
import { onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId: {
    type: String,
    require: true
  }
})

// Emits
const emit = defineEmits(['update:modelValue']);

// Store
const storeNotes = useStoreNotes();

// Close modal
const closeModal = () => {
  emit('update:modelValue', false);
}

const modalCardRef = ref()

onClickOutside(modalCardRef, () => {
  closeModal();
})

// Keyboard events
const handleKeyup = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyup);
})

onUnmounted(() => {
 document.removeEventListener('keyup', handleKeyup);
})
</script>