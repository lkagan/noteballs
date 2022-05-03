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
        v-for="note in notes"
        :key="note.id"
        :note="note"
    ></Note>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";

const newNoteRef = ref(null);
const newNote = ref('');
const notes = ref([
  {
    id: 'id1',
    content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
    asperiores blanditiis dignissimos eius eligendi eos error esse est
    inventore iste, maxime neque odio quae saepe suscipit veritatis vero.
    Nihil, vel?`
  },
  {
    id: 'id2',
    content: 'This is a shorter note.'
  }
]);

const addNotes = () => {
  notes.value.unshift({
    id: Math.random().toString(),
    content: newNote.value
  })

  newNote.value = '';
  newNoteRef.value.focus();
}
</script>