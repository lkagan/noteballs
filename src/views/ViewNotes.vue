<template>
  <div class="notes">

    <div class="card has-background-info-dark p-4 mb-5">
      <div class="field">
        <div class="control">
            <textarea
                class="textarea"
                placeholder="Add a new note"
                v-model="newNote"
                ref="newNoteRef"
            ></textarea>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
              class="button is-link has-background-info"
              @click="addNotes"
              :disabled="!newNote"
          >Add New Note
          </button>
        </div>
      </div>
    </div>
    <Note
        v-for="note in notesStore.notes"
        :key="note.id"
        :note="note"
    ></Note>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes} from "@/stores/storeNotes";

const newNoteRef = ref(null);
const newNote = ref('');
const notesStore = useStoreNotes();

const addNotes = () => {
  notesStore.addNote(newNote.value);
  newNote.value = '';
  newNoteRef.value.focus();
}
</script>