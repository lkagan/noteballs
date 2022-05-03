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
          <button class="button is-link has-background-info">Add New Note</button>
        </div>
      </div>
    </div>
    <div
        class="card mb-4"
        v-for="i of 3"
    >
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
          laudantium, ut. Enim esse itaque labore quae quo sint soluta vero!
          Consequatur deserunt facere inventore maxime minima, quas tempora
          tenetur vitae.
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