<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>Stat</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ store.noteCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ store.totalCharCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
        class="input"
        type="text"
        placeholder="Do you love noteballs?"
        v-autofocus
        v-model="feedback"
    >
  </div>
</template>

<script setup>
import { useStoreNotes } from "@/stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";
import { ref } from "vue";

const store = useStoreNotes();
const feedback = ref(null);
useWatchCharacters(feedback, 50);
</script>