<template>
  <div class="edit-note">
    <AddEditNote
        ref="addEditNoteRef"
        v-model="content"
        bgColor="success"
        label="Edit Note"
    >
    <template #buttons>
      <button
          @click="$router.back()"
          class="button is-link is-light mr-2"
      >Cancel
      </button>
      <button
            class="button is-link has-background-success"
            :disabled="!content"
        >Add New Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>
<script setup>
/*
 * Imports
 */
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useStoreNotes} from "@/stores/storeNotes";
import { useRoute } from "vue-router";

const store = useStoreNotes();
const content = ref(store.getNoteContent(useRoute().params.id));

</script>