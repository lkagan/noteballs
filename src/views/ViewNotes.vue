<template>
  <div class="notes">
    <AddEditNote
        ref="addEditNoteRef"
        v-model="newNote"
        maxlength="100"
        placeholder="Add a new note"
    >
    <template #buttons>
        <button
            class="button is-link has-background-info"
            @click="addNotes"
            :disabled="!newNote"
        >Add New Note
        </button>
      </template>
    </AddEditNote>
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
import { useStoreNotes } from "@/stores/storeNotes";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useWatchCharacters } from "@/use/useWatchCharacters.js";

const newNote = ref('');
const addEditNoteRef = ref(null);
const notesStore = useStoreNotes();

const addNotes = () => {
  notesStore.addNote(newNote.value);
  newNote.value = '';
  addEditNoteRef.value.focusTextArea();
}

useWatchCharacters(newNote);
</script>