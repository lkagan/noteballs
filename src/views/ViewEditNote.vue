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
            @click="save"
        >Save
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
import { useRoute, useRouter } from "vue-router";

/*
 * Variables
 */
const store = useStoreNotes();
const route = useRoute();
const router = useRouter();
const content = ref(store.getNoteContent(route.params.id));

/*
 * Methods
 */
const save = () => {
  store.update(route.params.id, content.value);
  router.back();
}
</script>