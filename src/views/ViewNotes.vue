<template>
  <div class="notes">

    <div class="card has-background-info-dark p-4 mb-5">
      <div class="field">
        <div class="control">
            <textarea
                class="textarea"
                placeholder="Add a new note"
            ></textarea>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-info">Add New Note
          </button>
        </div>
      </div>
    </div>
    <div
        class="card mb-4"
        v-for="note in notes"
        key="note.id"
    >
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a
            href="#"
            class="card-footer-item"
        >Edit</a>
        <a
            href="#"
            class="card-footer-item"
        >Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
</script>